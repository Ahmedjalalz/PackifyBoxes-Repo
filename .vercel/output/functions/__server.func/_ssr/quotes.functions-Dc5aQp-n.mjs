import { g as createLucideIcon, i as createSsrRpc } from "./router-WJfh7UaR.mjs";
import { k as createServerFn } from "./server-BQ-xwmlc.mjs";
import { o as objectType, s as stringType, l as literalType, n as numberType } from "./types-DnP57xCP.mjs";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode);
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
const contactSchema = objectType({
  name: stringType().trim().min(1).max(100),
  email: stringType().trim().email().max(255),
  subject: stringType().trim().max(150).optional().or(literalType("")),
  message: stringType().trim().min(1).max(2e3)
});
const submitQuote = createServerFn({
  method: "POST"
}).inputValidator((input) => quoteSchema.parse(input)).handler(createSsrRpc("493fd10f39da2f1597657e562c8b1b87933e1ad9b06279ae8cd5862bd7f4e43d"));
const submitContact = createServerFn({
  method: "POST"
}).inputValidator((input) => contactSchema.parse(input)).handler(createSsrRpc("2b29d856f98914b05ab37002456c56baf2426d0bce267c02156dbba97e51cefd"));
export {
  Clock as C,
  submitQuote as a,
  submitContact as s
};
