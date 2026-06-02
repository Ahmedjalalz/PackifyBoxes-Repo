import cosmetic from "@/assets/cat-cosmetic.jpg";
import food from "@/assets/cat-food.jpg";
import shipping from "@/assets/cat-shipping.jpg";
import luxury from "@/assets/cat-luxury.jpg";
import retail from "@/assets/cat-retail.jpg";
import eco from "@/assets/cat-eco.jpg";

export type Category =
  | "product"
  | "shipping"
  | "luxury"
  | "cosmetic"
  | "food"
  | "custom";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  categoryLabel: string;
  image: string;
  description: string;
  materials: string[];
  printing: string[];
  dimensions: string;
  features: string[];
}

export const categories: { value: Category; label: string; image: string; blurb: string }[] = [
  { value: "cosmetic", label: "Cosmetic Boxes", image: cosmetic, blurb: "Soft-touch finishes, embossed logos, foiled details." },
  { value: "food", label: "Food Packaging", image: food, blurb: "Food-safe kraft, grease-resistant inks, custom dielines." },
  { value: "shipping", label: "Shipping Boxes", image: shipping, blurb: "Durable corrugated mailers built for the journey." },
  { value: "luxury", label: "Luxury Boxes", image: luxury, blurb: "Rigid construction, magnetic closures, premium liners." },
  { value: "product", label: "Retail Packaging", image: retail, blurb: "Shelf-ready product boxes with premium printing." },
  { value: "custom", label: "Eco Packaging", image: eco, blurb: "Recycled fibers, soy inks, fully compostable options." },
];

export const products: Product[] = [
  {
    slug: "luxury-magnetic-gift-box",
    name: "Luxury Magnetic Gift Box",
    tagline: "Rigid construction with a satisfying magnetic close.",
    category: "luxury",
    categoryLabel: "Luxury Boxes",
    image: luxury,
    description:
      "A statement piece for premium brands. Wrapped rigid board with magnetic closure, custom interior liner and edge foiling options. Perfect for unboxing-driven brands.",
    materials: ["Rigid greyboard 1200gsm", "Wrapped art paper", "Velvet or satin liner"],
    printing: ["Offset CMYK", "Hot foil stamping", "Blind embossing", "Spot UV"],
    dimensions: "Fully custom — typical 200×200×80mm",
    features: ["Magnetic closure", "Tear-resistant wrap", "Soft-touch lamination", "Custom inserts"],
  },
  {
    slug: "soft-touch-cosmetic-box",
    name: "Soft-Touch Cosmetic Box",
    tagline: "Editorial finish for beauty and skincare lines.",
    category: "cosmetic",
    categoryLabel: "Cosmetic Boxes",
    image: cosmetic,
    description:
      "Reverse-tuck folding cartons with soft-touch lamination, foiled logo and optional window patch. Engineered for retail shelves and direct-to-consumer launches alike.",
    materials: ["350gsm SBS", "Recycled paperboard option", "Window-patch PET"],
    printing: ["Offset CMYK + Pantone", "Foiling (gold, silver, rose)", "Embossing"],
    dimensions: "Custom — typical 70×70×140mm",
    features: ["Auto-bottom available", "Soft-touch matte", "Foiled brand mark", "FSC certified stock"],
  },
  {
    slug: "kraft-food-mailer",
    name: "Kraft Food Mailer",
    tagline: "Food-safe, grease-resistant, instantly recognizable.",
    category: "food",
    categoryLabel: "Food Packaging",
    image: food,
    description:
      "Tuck-top kraft boxes with food-safe inner coating. Perfect for ghost kitchens, burger spots and bakery delivery. Ships flat-packed and folds in seconds.",
    materials: ["Virgin kraft 300gsm", "Food-safe coating", "PLA window option"],
    printing: ["1–2 color flexo", "Digital full-color", "Soy-based inks"],
    dimensions: "150×150×70mm and 200×200×80mm standard",
    features: ["Flat-pack", "Food-safe", "Compostable", "Stackable"],
  },
  {
    slug: "corrugated-shipping-mailer",
    name: "Corrugated Shipping Mailer",
    tagline: "Built for the journey. Branded inside and out.",
    category: "shipping",
    categoryLabel: "Shipping Boxes",
    image: shipping,
    description:
      "Single or double-wall corrugated mailers with a self-locking tab. Custom interior print for a memorable unboxing without sacrificing strength.",
    materials: ["E-flute corrugated", "B-flute heavy-duty", "Recycled brown or white"],
    printing: ["Flexo 1–4 color", "Digital interior print", "Custom tape included"],
    dimensions: "Any dimension up to 600×400×400mm",
    features: ["Self-locking tab", "Stackable", "100% recyclable", "Tear-strip option"],
  },
  {
    slug: "minimal-retail-product-box",
    name: "Minimal Retail Product Box",
    tagline: "Quiet luxury — shelf-ready in any category.",
    category: "product",
    categoryLabel: "Retail Packaging",
    image: retail,
    description:
      "Clean two-piece folding box ideal for electronics, accessories and lifestyle goods. Pair matte stock with a single foiled accent for an instantly premium feel.",
    materials: ["350gsm coated white", "Uncoated natural", "Black on black option"],
    printing: ["Offset CMYK", "Spot Pantone", "Spot UV", "Foil accents"],
    dimensions: "Fully custom",
    features: ["Two-piece tray", "Snug fit insert", "Premium feel", "Retail-ready"],
  },
  {
    slug: "eco-recycled-mailer",
    name: "Eco Recycled Mailer",
    tagline: "100% recycled, fully compostable, brand-forward.",
    category: "custom",
    categoryLabel: "Eco Packaging",
    image: eco,
    description:
      "Post-consumer recycled fiber mailer printed with soy-based inks. Tear-strip opener and water-based adhesive — fully curbside recyclable.",
    materials: ["100% recycled kraft", "Soy inks", "Water-based adhesive"],
    printing: ["1–2 color flexo", "Digital full-color (recycled stock)"],
    dimensions: "240×170×60mm and custom",
    features: ["FSC certified", "Curbside recyclable", "Tear-strip opener", "Carbon-neutral shipping"],
  },
];

export const materialsInfo = [
  { name: "Kraft", desc: "Natural, sustainable, recognizable — perfect for eco brands and food." },
  { name: "Corrugated", desc: "Single or double-wall protection for shipping and ecommerce." },
  { name: "Cardboard (SBS)", desc: "Smooth, bright white substrate ideal for premium printing." },
  { name: "Rigid Board", desc: "Heavyweight wrapped board for luxury gift and product boxes." },
  { name: "Recycled Eco", desc: "Post-consumer fibers and compostable coatings." },
  { name: "Custom", desc: "Need a specific substrate? We source materials to match your brief." },
];

export const printingInfo = [
  { name: "Offset", desc: "Photographic quality CMYK with Pantone matching at any volume." },
  { name: "UV Coating", desc: "Spot or full UV for a glossy, tactile highlight." },
  { name: "Foil Stamping", desc: "Gold, silver, rose and holographic foils." },
  { name: "Embossing", desc: "Raised tactile elements for true premium feel." },
  { name: "Digital", desc: "Short runs, variable data, fast turnarounds." },
  { name: "Custom", desc: "Tell us the effect you want and we’ll build the print finish around it." },
];
