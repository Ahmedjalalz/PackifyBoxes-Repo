import { c as createServerRpc } from "./createServerRpc-CilZ4_Bz.mjs";
import { k as createServerFn } from "./server-BQ-xwmlc.mjs";
import { o as objectType, s as stringType, l as literalType, n as numberType } from "./types-DnP57xCP.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const quoteSchema = objectType({
  name: stringType().trim().min(1).max(100),
  company: stringType().trim().max(150).optional().or(literalType("")),
  email: stringType().trim().email().max(255),
  phone: stringType().trim().max(40).optional().or(literalType("")),
  boxType: stringType().trim().min(1).max(100),
  dimensions: stringType().trim().max(120).optional().or(literalType("")),
  quantity: numberType().int().min(1).max(1e7),
  material: stringType().trim().max(80).optional().or(literalType("")),
  printing: stringType().trim().max(80).optional().or(literalType("")),
  notes: stringType().trim().max(2e3).optional().or(literalType("")),
  attachmentFileName: stringType().trim().max(255).optional().or(literalType("")),
  attachmentContentType: stringType().trim().max(100).optional().or(literalType("")),
  attachmentBase64Data: stringType().optional().or(literalType(""))
});
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
  return {
    apiKey,
    fromEmail,
    toEmail
  };
}
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
async function sendResendEmail(params) {
  const {
    apiKey,
    fromEmail,
    toEmail
  } = getResendConfig();
  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: params.replyTo,
      subject: params.subject,
      text: params.text,
      html: params.html,
      attachments: params.attachmentBase64Data && params.attachmentName ? [{
        filename: params.attachmentName,
        content: params.attachmentBase64Data,
        contentType: params.attachmentContentType || "application/octet-stream"
      }] : []
    })
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email failed: ${errorText}`);
  }
}
async function sendQuoteEmail(params) {
  const lines = [`New quote request from ${params.name}`, `Quote ID: ${params.quoteId}`, `Email: ${params.email}`, `Company: ${params.company || "-"}`, `Phone: ${params.phone || "-"}`, `Box type: ${params.boxType}`, `Dimensions: ${params.dimensions || "-"}`, `Quantity: ${params.quantity}`, `Material: ${params.material || "-"}`, `Printing: ${params.printing || "-"}`, `Attachment: ${params.attachmentName || "-"}`, `Attachment URL: ${params.attachmentUrl || "-"}`, "", "Notes:", params.notes || "-"];
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
    attachmentContentType: params.attachmentContentType
  });
}
async function sendContactEmail(params) {
  const subject = params.subject?.trim() || `New contact message from ${params.name}`;
  const lines = [`New contact message from ${params.name}`, `Email: ${params.email}`, `Subject: ${params.subject || "-"}`, "", "Message:", params.message];
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
    `
  });
}
const contactSchema = objectType({
  name: stringType().trim().min(1).max(100),
  email: stringType().trim().email().max(255),
  subject: stringType().trim().max(150).optional().or(literalType("")),
  message: stringType().trim().min(1).max(2e3)
});
const submitQuote_createServerFn_handler = createServerRpc({
  id: "493fd10f39da2f1597657e562c8b1b87933e1ad9b06279ae8cd5862bd7f4e43d",
  name: "submitQuote",
  filename: "src/lib/quotes.functions.ts"
}, (opts) => submitQuote.__executeServer(opts));
const submitQuote = createServerFn({
  method: "POST"
}).inputValidator((input) => quoteSchema.parse(input)).handler(submitQuote_createServerFn_handler, async ({
  data
}) => {
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
    attachmentContentType: data.attachmentContentType || null
  });
  return {
    ok: true
  };
});
const submitContact_createServerFn_handler = createServerRpc({
  id: "2b29d856f98914b05ab37002456c56baf2426d0bce267c02156dbba97e51cefd",
  name: "submitContact",
  filename: "src/lib/quotes.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((input) => contactSchema.parse(input)).handler(submitContact_createServerFn_handler, async ({
  data
}) => {
  await sendContactEmail({
    name: data.name,
    email: data.email,
    subject: data.subject || null,
    message: data.message
  });
  return {
    ok: true
  };
});
export {
  submitContact_createServerFn_handler,
  submitQuote_createServerFn_handler
};
