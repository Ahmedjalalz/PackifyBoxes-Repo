import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  boxType: z.string().trim().min(1).max(100),
  dimensions: z.string().trim().max(120).optional().or(z.literal("")),
  quantity: z.number().int().min(1).max(10_000_000),
  material: z.string().trim().max(80).optional().or(z.literal("")),
  printing: z.string().trim().max(80).optional().or(z.literal("")),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  attachmentFileName: z.string().trim().max(255).optional().or(z.literal("")),
  attachmentContentType: z.string().trim().max(100).optional().or(z.literal("")),
  attachmentBase64Data: z.string().optional().or(z.literal("")),
});

const QUOTE_ATTACHMENT_BUCKET = "quote-attachments";
const RESEND_API_URL = "https://api.resend.com/emails";

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }

  if (!toEmail) {
    throw new Error("Missing RESEND_TO_EMAIL environment variable");
  }

  return { apiKey, fromEmail, toEmail };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendResendEmail(params: {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
  attachmentBase64Data?: string | null;
  attachmentName?: string | null;
  attachmentContentType?: string | null;
}) {
  const { apiKey, fromEmail, toEmail } = getResendConfig();

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: params.replyTo,
      subject: params.subject,
      text: params.text,
      html: params.html,
      attachments:
        params.attachmentBase64Data && params.attachmentName
          ? [
              {
                filename: params.attachmentName,
                content: params.attachmentBase64Data,
                contentType: params.attachmentContentType || "application/octet-stream",
              },
            ]
          : [],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email failed: ${errorText}`);
  }
}

async function sendQuoteEmail(params: {
  quoteId: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  boxType: string;
  dimensions: string | null;
  quantity: number;
  material: string | null;
  printing: string | null;
  notes: string | null;
  attachmentName: string | null;
  attachmentUrl: string | null;
  attachmentBase64Data: string | null;
  attachmentContentType: string | null;
}) {
  const lines = [
    `New quote request from ${params.name}`,
    `Quote ID: ${params.quoteId}`,
    `Email: ${params.email}`,
    `Company: ${params.company || "-"}`,
    `Phone: ${params.phone || "-"}`,
    `Box type: ${params.boxType}`,
    `Dimensions: ${params.dimensions || "-"}`,
    `Quantity: ${params.quantity}`,
    `Material: ${params.material || "-"}`,
    `Printing: ${params.printing || "-"}`,
    `Attachment: ${params.attachmentName || "-"}`,
    `Attachment URL: ${params.attachmentUrl || "-"}`,
    "",
    "Notes:",
    params.notes || "-",
  ];

  await sendResendEmail({
    subject: `New quote request from ${params.name}`,
    replyTo: params.email,
    text: lines.join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 16px">New quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(params.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(params.company || "-")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(params.phone || "-")}</p>
        <p><strong>Box type:</strong> ${escapeHtml(params.boxType)}</p>
        <p><strong>Dimensions:</strong> ${escapeHtml(params.dimensions || "-")}</p>
        <p><strong>Quantity:</strong> ${params.quantity}</p>
        <p><strong>Material:</strong> ${escapeHtml(params.material || "-")}</p>
        <p><strong>Printing:</strong> ${escapeHtml(params.printing || "-")}</p>
        <p><strong>Attachment:</strong> ${escapeHtml(params.attachmentName || "-")}</p>
        ${params.attachmentUrl ? `<p><strong>Attachment URL:</strong> <a href="${escapeHtml(params.attachmentUrl)}">${escapeHtml(params.attachmentUrl)}</a></p>` : ""}
        <p><strong>Notes:</strong></p>
        <div style="white-space:pre-wrap;background:#f9fafb;border:1px solid #e5e7eb;padding:12px;border-radius:8px">${escapeHtml(params.notes || "-")}</div>
      </div>
    `,
    attachmentBase64Data: params.attachmentBase64Data,
    attachmentName: params.attachmentName,
    attachmentContentType: params.attachmentContentType,
  });
}

async function sendContactEmail(params: { name: string; email: string; subject: string | null; message: string }) {
  const subject = params.subject?.trim() || `New contact message from ${params.name}`;
  const lines = [
    `New contact message from ${params.name}`,
    `Email: ${params.email}`,
    `Subject: ${params.subject || "-"}`,
    "",
    "Message:",
    params.message,
  ];

  await sendResendEmail({
    subject,
    replyTo: params.email,
    text: lines.join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 16px">New contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(params.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(params.subject || "-")}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;background:#f9fafb;border:1px solid #e5e7eb;padding:12px;border-radius:8px">${escapeHtml(params.message)}</div>
      </div>
    `,
  });
}

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
});

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => quoteSchema.parse(input))
  .handler(async ({ data }) => {
    // Shortcut: skip DB and storage and send the quote directly via email.
    const quoteId = crypto.randomUUID();
    const attachmentBase64 = data.attachmentBase64Data && data.attachmentFileName ? data.attachmentBase64Data.replace(/^data:.*;base64,/, "") : null;

    await sendQuoteEmail({
      quoteId,
      name: data.name,
      company: data.company || null,
      email: data.email,
      phone: data.phone || null,
      boxType: data.boxType,
      dimensions: data.dimensions || null,
      quantity: data.quantity,
      material: data.material || null,
      printing: data.printing || null,
      notes: data.notes || null,
      attachmentName: data.attachmentFileName || null,
      attachmentUrl: null,
      attachmentBase64Data: attachmentBase64,
      attachmentContentType: data.attachmentContentType || null,
    });

    return { ok: true };
  });

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    await sendContactEmail({
      name: data.name,
      email: data.email,
      subject: data.subject || null,
      message: data.message,
    });

    return { ok: true };
  });
