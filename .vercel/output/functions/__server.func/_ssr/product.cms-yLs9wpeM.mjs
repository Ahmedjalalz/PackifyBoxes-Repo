import { c as createServerRpc } from "./createServerRpc-CV_F8eDn.mjs";
import { a as createServerFn } from "./server-ChO8Lnwp.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { r as requireSupabaseAuth } from "./auth-middleware-DSW6PhwW.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, a as arrayType, b as booleanType, l as literalType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function createSupabaseAdminClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_SERVICE_ROLE_KEY ? ["SUPABASE_SERVICE_ROLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Configure Supabase environment variables in your project settings.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      storage: void 0,
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
let _supabaseAdmin;
const supabaseAdmin = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  }
});
const productSectionSchema = objectType({
  id: stringType().optional(),
  heading: stringType().min(1, "Heading is required"),
  content: stringType().min(1, "Content is required")
});
const productCardSchema = objectType({
  id: stringType().optional(),
  title: stringType().min(1, "Title is required"),
  description: stringType().min(1, "Description is required")
});
const productFeatureSchema = objectType({
  id: stringType().optional(),
  feature: stringType().min(1, "Feature is required")
});
const galleryImageSchema = objectType({
  id: stringType().optional(),
  image_url: stringType().url("Image URL is required"),
  alt_text: stringType().optional().nullable()
});
const productFormSchema = objectType({
  id: stringType().optional(),
  slug: stringType().min(1).max(120),
  title: stringType().min(2, "Title is required"),
  category_id: stringType().min(1, "Category is required"),
  short_description: stringType().min(8, "Short description is required"),
  featured_image: stringType().url().or(literalType("")).optional().nullable(),
  is_featured: booleanType().default(false),
  is_published: booleanType().default(false),
  meta_title: stringType().max(70).optional().nullable(),
  meta_description: stringType().max(165).optional().nullable(),
  content_sections: arrayType(productSectionSchema).default([]),
  box_styles: arrayType(productCardSchema).default([]),
  materials: arrayType(productCardSchema).default([]),
  features: arrayType(productFeatureSchema).default([]),
  gallery_images: arrayType(galleryImageSchema).default([])
});
function normalizeCategory(row) {
  return {
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.name),
    description: typeof row.description === "string" ? row.description : null,
    image_url: typeof row.image_url === "string" ? row.image_url : null,
    sort_order: typeof row.sort_order === "number" ? row.sort_order : null,
    created_at: typeof row.created_at === "string" ? row.created_at : (/* @__PURE__ */ new Date(0)).toISOString(),
    updated_at: typeof row.updated_at === "string" ? row.updated_at : null
  };
}
function getRowOrder(row) {
  return row.display_order ?? row.sort_order ?? 0;
}
function sortByOrder(items) {
  return [...items].sort((left, right) => getRowOrder(left) - getRowOrder(right));
}
async function loadCategories() {
  const {
    data,
    error
  } = await supabaseAdmin.from("categories").select("*");
  if (error) throw new Error(error.message);
  return sortByOrder((data ?? []).map((row) => normalizeCategory(row)));
}
async function loadRelations(productId) {
  const [sections, boxStyles, materials, features, galleryImages] = await Promise.all([supabaseAdmin.from("product_content_sections").select("*").eq("product_id", productId), supabaseAdmin.from("product_box_styles").select("*").eq("product_id", productId), supabaseAdmin.from("product_materials").select("*").eq("product_id", productId), supabaseAdmin.from("product_features").select("*").eq("product_id", productId), supabaseAdmin.from("product_gallery_images").select("*").eq("product_id", productId)]);
  if (sections.error) throw new Error(sections.error.message);
  if (boxStyles.error) throw new Error(boxStyles.error.message);
  if (materials.error) throw new Error(materials.error.message);
  if (features.error) throw new Error(features.error.message);
  if (galleryImages.error) throw new Error(galleryImages.error.message);
  return {
    content_sections: sections.data ?? [],
    box_styles: boxStyles.data ?? [],
    materials: materials.data ?? [],
    features: features.data ?? [],
    gallery_images: galleryImages.data ?? []
  };
}
function normalizeProduct(row, category, relations) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    short_description: row.short_description ?? null,
    featured_image: row.featured_image ?? null,
    category_id: row.category_id ?? null,
    is_featured: Boolean(row.is_featured),
    is_published: Boolean(row.is_published),
    meta_title: row.meta_title ?? null,
    meta_description: row.meta_description ?? null,
    created_at: row.created_at,
    updated_at: row.updated_at ?? null,
    category,
    content_sections: sortByOrder(relations.content_sections).map((section) => ({
      ...section
    })),
    box_styles: sortByOrder(relations.box_styles).map((section) => ({
      ...section
    })),
    materials: sortByOrder(relations.materials).map((section) => ({
      ...section
    })),
    features: sortByOrder(relations.features).map((section) => ({
      ...section
    })),
    gallery_images: sortByOrder(relations.gallery_images).map((section) => ({
      ...section
    }))
  };
}
function normalizeProductSummary(row, category) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    short_description: row.short_description ?? null,
    featured_image: row.featured_image ?? null,
    category_id: row.category_id ?? null,
    is_featured: Boolean(row.is_featured),
    is_published: Boolean(row.is_published),
    meta_title: row.meta_title ?? null,
    meta_description: row.meta_description ?? null,
    created_at: row.created_at,
    updated_at: row.updated_at ?? null,
    category,
    content_sections: [],
    box_styles: [],
    materials: [],
    features: [],
    gallery_images: []
  };
}
const listCmsCategories_createServerFn_handler = createServerRpc({
  id: "f702a9cb2fb5204041cab250808f6606860d848d4f58cd87ae78cef278102673",
  name: "listCmsCategories",
  filename: "src/lib/product.cms.ts"
}, (opts) => listCmsCategories.__executeServer(opts));
const listCmsCategories = createServerFn({
  method: "GET"
}).handler(listCmsCategories_createServerFn_handler, async () => loadCategories());
const createCmsCategory_createServerFn_handler = createServerRpc({
  id: "681d6d9dbf235a6b09772c56ee074143f1c415de364158110332779de5c1221b",
  name: "createCmsCategory",
  filename: "src/lib/product.cms.ts"
}, (opts) => createCmsCategory.__executeServer(opts));
const createCmsCategory = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  name: stringType().min(2, "Category name is required"),
  slug: stringType().min(2, "Category slug is required"),
  description: stringType().optional().nullable()
}).parse(input)).middleware([requireSupabaseAuth]).handler(createCmsCategory_createServerFn_handler, async ({
  data
}) => {
  const {
    data: category,
    error
  } = await supabaseAdmin.from("categories").insert({
    name: data.name,
    slug: data.slug
  }).select("*").single();
  if (error) throw new Error(error.message);
  return normalizeCategory(category);
});
const listCmsProducts_createServerFn_handler = createServerRpc({
  id: "d2666bcd10312dd4be304290b407515425b19e40dd52318931c6a5e7e3b1c0b9",
  name: "listCmsProducts",
  filename: "src/lib/product.cms.ts"
}, (opts) => listCmsProducts.__executeServer(opts));
const listCmsProducts = createServerFn({
  method: "GET"
}).handler(listCmsProducts_createServerFn_handler, async () => {
  const [productsResult, categories] = await Promise.all([supabaseAdmin.from("products").select("*").order("created_at", {
    ascending: false
  }), loadCategories().catch(() => [])]);
  if (productsResult.error) throw new Error(productsResult.error.message);
  const byId = new Map(categories.map((category) => [category.id, category]));
  const rows = (productsResult.data ?? []).map((row) => normalizeProductSummary(row, row.category_id ? byId.get(row.category_id) ?? null : null));
  return rows;
});
const listPublicProducts_createServerFn_handler = createServerRpc({
  id: "3202aff87951064a632a7aeaaf251f1050ace87131d03006b866ee2a3e75bc22",
  name: "listPublicProducts",
  filename: "src/lib/product.cms.ts"
}, (opts) => listPublicProducts.__executeServer(opts));
const listPublicProducts = createServerFn({
  method: "GET"
}).handler(listPublicProducts_createServerFn_handler, async () => {
  const rows = await listCmsProducts({
    data: void 0
  });
  try {
    const total = rows.length;
    const published = rows.filter((p) => p.is_published).length;
    console.debug(`listPublicProducts: total=${total}, published=${published}`);
  } catch (e) {
    console.debug("listPublicProducts: debug failed", e);
  }
  return rows.filter((product) => product.is_published);
});
const getCmsProductBySlug_createServerFn_handler = createServerRpc({
  id: "f11f87ee310200aae6ffce0e3163371d8184c18dd2b9cc6d97f6c98a233b81be",
  name: "getCmsProductBySlug",
  filename: "src/lib/product.cms.ts"
}, (opts) => getCmsProductBySlug.__executeServer(opts));
const getCmsProductBySlug = createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().parse(i)).handler(getCmsProductBySlug_createServerFn_handler, async ({
  data: slug
}) => {
  const {
    data: row,
    error
  } = await supabaseAdmin.from("products").select("*").eq("slug", slug).maybeSingle();
  if (error) throw new Error(error.message);
  if (!row) return null;
  const categories = await loadCategories().catch(() => []);
  const relations = await loadRelations(row.id);
  return normalizeProduct(row, row.category_id ? categories.find((category) => category.id === row.category_id) ?? null : null, relations);
});
const getPublicProductBySlug_createServerFn_handler = createServerRpc({
  id: "ecc8fbdf6efb93100cabdf2af1cc080756f1323e7633378c286380fa22bb0283",
  name: "getPublicProductBySlug",
  filename: "src/lib/product.cms.ts"
}, (opts) => getPublicProductBySlug.__executeServer(opts));
const getPublicProductBySlug = createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().parse(i)).handler(getPublicProductBySlug_createServerFn_handler, async ({
  data: slug
}) => {
  const product = await getCmsProductBySlug({
    data: slug
  });
  if (product) {
    console.debug(`getPublicProductBySlug: slug=${slug}, is_published=${product.is_published}`);
    if (!product.is_published) console.debug(`getPublicProductBySlug: product exists but is not published: id=${product.id}`);
  } else {
    console.debug(`getPublicProductBySlug: slug=${slug} -> not found`);
  }
  return product?.is_published ? product : null;
});
const getCmsProductById_createServerFn_handler = createServerRpc({
  id: "01085035bc267745d0d1c718401d278a9a2f19d77fe3a4c4de19136a22d93e30",
  name: "getCmsProductById",
  filename: "src/lib/product.cms.ts"
}, (opts) => getCmsProductById.__executeServer(opts));
const getCmsProductById = createServerFn({
  method: "GET"
}).inputValidator((i) => stringType().uuid().parse(i)).handler(getCmsProductById_createServerFn_handler, async ({
  data: id
}) => {
  const {
    data: row,
    error
  } = await supabaseAdmin.from("products").select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  if (!row) return null;
  const categories = await loadCategories().catch(() => []);
  const relations = await loadRelations(row.id);
  return normalizeProduct(row, row.category_id ? categories.find((category) => category.id === row.category_id) ?? null : null, relations);
});
async function replaceChildRows(table, productId, rows, mapRow) {
  const deleteResult = await supabaseAdmin.from(table).delete().eq("product_id", productId);
  if (deleteResult.error) throw new Error(deleteResult.error.message);
  if (rows.length === 0) return;
  const payload = rows.map((row, index) => ({
    product_id: productId,
    ...mapRow(row, index)
  }));
  const insertResult = await supabaseAdmin.from(table).insert(payload);
  if (insertResult.error) throw new Error(insertResult.error.message);
}
function extractMissingColumn(errorMessage) {
  const match = errorMessage.match(/Could not find the '([^']+)' column/);
  return match?.[1] ?? null;
}
async function saveProductWithFallback(data) {
  const productPayload = {
    slug: data.slug,
    title: data.title,
    category_id: data.category_id,
    short_description: data.short_description,
    featured_image: data.featured_image || null,
    is_featured: data.is_featured,
    is_published: data.is_published,
    meta_title: data.meta_title || null,
    meta_description: data.meta_description || null
  };
  const attemptedMissingColumns = /* @__PURE__ */ new Set();
  while (true) {
    const saveResult = data.id ? await supabaseAdmin.from("products").update(productPayload).eq("id", data.id).select("*").single() : await supabaseAdmin.from("products").insert(productPayload).select("*").single();
    if (!saveResult.error && saveResult.data) {
      return saveResult.data;
    }
    const errorMessage = saveResult.error?.message ?? "Failed to save product";
    const missingColumn = extractMissingColumn(errorMessage);
    console.error("saveProductWithFallback error", {
      errorMessage,
      missingColumn,
      attemptedMissingColumns: Array.from(attemptedMissingColumns),
      productPayload
    });
    if (!missingColumn || attemptedMissingColumns.has(missingColumn) || !(missingColumn in productPayload)) {
      throw new Error(`${errorMessage}${missingColumn ? ` (missing column: ${missingColumn})` : ""}`);
    }
    attemptedMissingColumns.add(missingColumn);
    delete productPayload[missingColumn];
  }
}
const saveCmsProduct_createServerFn_handler = createServerRpc({
  id: "3e67d37a22277858f850aeb98f8ae4daa9cc45b9db544f22e0ae2c38bf87c320",
  name: "saveCmsProduct",
  filename: "src/lib/product.cms.ts"
}, (opts) => saveCmsProduct.__executeServer(opts));
const saveCmsProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => productFormSchema.parse(input)).middleware([requireSupabaseAuth]).handler(saveCmsProduct_createServerFn_handler, async ({
  data
}) => {
  let savedProduct;
  try {
    savedProduct = await saveProductWithFallback(data);
  } catch (err) {
    console.error("saveCmsProduct failed while saving product", {
      error: err,
      data
    });
    throw new Error(`Failed to save product: ${err instanceof Error ? err.message : String(err)}`);
  }
  try {
    await Promise.all([replaceChildRows("product_content_sections", savedProduct.id, data.content_sections, (row, index) => ({
      heading: row.heading,
      content: row.content,
      display_order: index
    })), replaceChildRows("product_box_styles", savedProduct.id, data.box_styles, (row) => ({
      title: row.title,
      description: row.description
    })), replaceChildRows("product_materials", savedProduct.id, data.materials, (row) => ({
      title: row.title,
      description: row.description
    })), replaceChildRows("product_features", savedProduct.id, data.features, (row) => ({
      feature: row.feature
    })), replaceChildRows("product_gallery_images", savedProduct.id, data.gallery_images, (row, index) => ({
      image_url: row.image_url,
      alt_text: row.alt_text ?? null,
      display_order: index
    }))]);
  } catch (err) {
    console.error("saveCmsProduct failed while replacing child rows", {
      error: err,
      data,
      savedProductId: savedProduct?.id
    });
    throw new Error(`Failed to save product relations: ${err instanceof Error ? err.message : String(err)}`);
  }
  const categories = await loadCategories().catch(() => []);
  const relations = await loadRelations(savedProduct.id);
  return normalizeProduct(savedProduct, categories.find((category) => category.id === savedProduct.category_id) ?? null, relations);
});
const deleteCmsProduct_createServerFn_handler = createServerRpc({
  id: "9bc619d8c670a1c0a19e4778c7a46fb3a960afc9f22121da5e21bf58c1944d75",
  name: "deleteCmsProduct",
  filename: "src/lib/product.cms.ts"
}, (opts) => deleteCmsProduct.__executeServer(opts));
const deleteCmsProduct = createServerFn({
  method: "POST"
}).inputValidator((input) => stringType().uuid().parse(input)).middleware([requireSupabaseAuth]).handler(deleteCmsProduct_createServerFn_handler, async ({
  data: id
}) => {
  const tables = ["product_gallery_images", "product_features", "product_materials", "product_box_styles", "product_content_sections"];
  for (const table of tables) {
    const result = await supabaseAdmin.from(table).delete().eq("product_id", id);
    if (result.error) throw new Error(result.error.message);
  }
  const {
    error
  } = await supabaseAdmin.from("products").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return {
    ok: true
  };
});
const uploadCmsImageBase64_createServerFn_handler = createServerRpc({
  id: "7edd74d38c9bf72238aea5c548f501d1d63109682c9622c15d531e278d39dc8f",
  name: "uploadCmsImageBase64",
  filename: "src/lib/product.cms.ts"
}, (opts) => uploadCmsImageBase64.__executeServer(opts));
const uploadCmsImageBase64 = createServerFn({
  method: "POST"
}).inputValidator((input) => objectType({
  fileName: stringType().min(1),
  contentType: stringType().min(1),
  base64Data: stringType().min(1)
}).parse(input)).middleware([requireSupabaseAuth]).handler(uploadCmsImageBase64_createServerFn_handler, async ({
  data
}) => {
  const base64 = data.base64Data.replace(/^data:[^;]+;base64,/, "");
  const buffer = Buffer.from(base64, "base64");
  const filePath = `${Date.now()}_${data.fileName}`;
  const {
    error
  } = await supabaseAdmin.storage.from("product-images").upload(filePath, buffer, {
    contentType: data.contentType,
    upsert: true
  });
  if (error) throw new Error(error.message);
  const {
    data: publicUrlData
  } = supabaseAdmin.storage.from("product-images").getPublicUrl(filePath);
  return {
    url: publicUrlData.publicUrl
  };
});
export {
  createCmsCategory_createServerFn_handler,
  deleteCmsProduct_createServerFn_handler,
  getCmsProductById_createServerFn_handler,
  getCmsProductBySlug_createServerFn_handler,
  getPublicProductBySlug_createServerFn_handler,
  listCmsCategories_createServerFn_handler,
  listCmsProducts_createServerFn_handler,
  listPublicProducts_createServerFn_handler,
  saveCmsProduct_createServerFn_handler,
  uploadCmsImageBase64_createServerFn_handler
};
