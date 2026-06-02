import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const productSectionSchema = z.object({
  id: z.string().optional(),
  heading: z.string().min(1, "Heading is required"),
  content: z.string().min(1, "Content is required"),
});

export const productCardSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

export const productFeatureSchema = z.object({
  id: z.string().optional(),
  feature: z.string().min(1, "Feature is required"),
});

export const galleryImageSchema = z.object({
  id: z.string().optional(),
  image_url: z.string().url("Image URL is required"),
  alt_text: z.string().optional().nullable(),
});

export const productFormSchema = z.object({
  id: z.string().optional(),
  slug: z.string().min(1).max(120),
  title: z.string().min(2, "Title is required"),
  category_id: z.string().min(1, "Category is required"),
  short_description: z.string().min(8, "Short description is required"),
  featured_image: z.string().url().or(z.literal("")).optional().nullable(),
  is_featured: z.boolean().default(false),
  is_published: z.boolean().default(false),
  meta_title: z.string().max(70).optional().nullable(),
  meta_description: z.string().max(165).optional().nullable(),
  content_sections: z.array(productSectionSchema).default([]),
  box_styles: z.array(productCardSchema).default([]),
  materials: z.array(productCardSchema).default([]),
  features: z.array(productFeatureSchema).default([]),
  gallery_images: z.array(galleryImageSchema).default([]),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;

export type CmsCategory = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  image_url: string | null;
  sort_order: number | null;
  created_at: string;
  updated_at: string | null;
};

export type CmsProduct = {
  id: string;
  slug: string;
  title: string;
  short_description: string | null;
  featured_image: string | null;
  category_id: string | null;
  is_featured: boolean;
  is_published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string | null;
  category: CmsCategory | null;
  content_sections: Array<z.infer<typeof productSectionSchema> & { id: string }>;
  box_styles: Array<z.infer<typeof productCardSchema> & { id: string }>;
  materials: Array<z.infer<typeof productCardSchema> & { id: string }>;
  features: Array<z.infer<typeof productFeatureSchema> & { id: string }>;
  gallery_images: Array<z.infer<typeof galleryImageSchema> & { id: string }>;
};

function normalizeCategory(row: any): CmsCategory {
  return {
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.name),
    description: typeof row.description === "string" ? row.description : null,
    image_url: typeof row.image_url === "string" ? row.image_url : null,
    sort_order: typeof row.sort_order === "number" ? row.sort_order : null,
    created_at: typeof row.created_at === "string" ? row.created_at : new Date(0).toISOString(),
    updated_at: typeof row.updated_at === "string" ? row.updated_at : null,
  };
}

function getRowOrder(row: { display_order?: number | null; sort_order?: number | null }) {
  return row.display_order ?? row.sort_order ?? 0;
}

function sortByOrder<T extends { display_order?: number | null; sort_order?: number | null }>(items: T[]) {
  return [...items].sort((left, right) => getRowOrder(left) - getRowOrder(right));
}

async function loadCategories() {
  const { data, error } = await supabaseAdmin.from("categories").select("*");

  if (error) throw new Error(error.message);
  return sortByOrder((data ?? []).map((row) => normalizeCategory(row)));
}

async function loadRelations(productId: string) {
  const [sections, boxStyles, materials, features, galleryImages] = await Promise.all([
    supabaseAdmin.from("product_content_sections").select("*").eq("product_id", productId),
    supabaseAdmin.from("product_box_styles").select("*").eq("product_id", productId),
    supabaseAdmin.from("product_materials").select("*").eq("product_id", productId),
    supabaseAdmin.from("product_features").select("*").eq("product_id", productId),
    supabaseAdmin.from("product_gallery_images").select("*").eq("product_id", productId),
  ]);

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
    gallery_images: galleryImages.data ?? [],
  };
}

function normalizeProduct(row: any, category: CmsCategory | null, relations: Awaited<ReturnType<typeof loadRelations>>): CmsProduct {
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
    content_sections: sortByOrder(relations.content_sections).map((section: any) => ({ ...section })),
    box_styles: sortByOrder(relations.box_styles).map((section: any) => ({ ...section })),
    materials: sortByOrder(relations.materials).map((section: any) => ({ ...section })),
    features: sortByOrder(relations.features).map((section: any) => ({ ...section })),
    gallery_images: sortByOrder(relations.gallery_images).map((section: any) => ({ ...section })),
  };
}

function normalizeProductSummary(row: any, category: CmsCategory | null): CmsProduct {
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
    gallery_images: [],
  };
}

export const listCmsCategories = createServerFn({ method: "GET" })
  .handler(async () => loadCategories());

export const createCmsCategory = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z.object({
      name: z.string().min(2, "Category name is required"),
      slug: z.string().min(2, "Category slug is required"),
      description: z.string().optional().nullable(),
    }).parse(input),
  )
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    const { data: category, error } = await supabaseAdmin
      .from("categories")
      .insert({
        name: data.name,
        slug: data.slug,
      })
      .select("*")
      .single();

    if (error) throw new Error(error.message);
    return normalizeCategory(category);
  });

export const listCmsProducts = createServerFn({ method: "GET" })
  .handler(async () => {
    const [productsResult, categories] = await Promise.all([
      supabaseAdmin.from("products").select("*").order("created_at", { ascending: false }),
      loadCategories().catch(() => [] as CmsCategory[]),
    ]);

    if (productsResult.error) throw new Error(productsResult.error.message);

    const byId = new Map(categories.map((category) => [category.id, category]));
    const rows = (productsResult.data ?? []).map((row: any) =>
      normalizeProductSummary(row, row.category_id ? byId.get(row.category_id) ?? null : null),
    );

    return rows;
  });

export const listPublicProducts = createServerFn({ method: "GET" })
  .handler(async () => {
    const rows = await listCmsProducts({ data: undefined });
    try {
      const total = rows.length;
      const published = rows.filter((p) => p.is_published).length;
      console.debug(`listPublicProducts: total=${total}, published=${published}`);
    } catch (e) {
      console.debug("listPublicProducts: debug failed", e);
    }
    return rows.filter((product) => product.is_published);
  });

export const getCmsProductBySlug = createServerFn({ method: "GET" })
  .inputValidator((i: unknown) => z.string().parse(i))
  .handler(async ({ data: slug }) => {
    const { data: row, error } = await supabaseAdmin
      .from("products")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!row) return null;

    const categories = await loadCategories().catch(() => [] as CmsCategory[]);
    const relations = await loadRelations(row.id);
    return normalizeProduct(row, row.category_id ? categories.find((category) => category.id === row.category_id) ?? null : null, relations);
  });

export const getPublicProductBySlug = createServerFn({ method: "GET" })
  .inputValidator((i: unknown) => z.string().parse(i))
  .handler(async ({ data: slug }) => {
    const product = await getCmsProductBySlug({ data: slug });
    if (product) {
      console.debug(`getPublicProductBySlug: slug=${slug}, is_published=${product.is_published}`);
      if (!product.is_published) console.debug(`getPublicProductBySlug: product exists but is not published: id=${product.id}`);
    } else {
      console.debug(`getPublicProductBySlug: slug=${slug} -> not found`);
    }
    return product?.is_published ? product : null;
  });

export const getCmsProductById = createServerFn({ method: "GET" })
  .inputValidator((i: unknown) => z.string().uuid().parse(i))
  .handler(async ({ data: id }) => {
    const { data: row, error } = await supabaseAdmin
      .from("products")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!row) return null;

    const categories = await loadCategories().catch(() => [] as CmsCategory[]);
    const relations = await loadRelations(row.id);
    return normalizeProduct(row, row.category_id ? categories.find((category) => category.id === row.category_id) ?? null : null, relations);
  });

async function replaceChildRows<T extends { id?: string }>(
  table: "product_content_sections" | "product_box_styles" | "product_materials" | "product_features" | "product_gallery_images",
  productId: string,
  rows: T[],
  mapRow: (row: T, index: number) => Record<string, unknown>,
) {
  const deleteResult = await supabaseAdmin.from(table).delete().eq("product_id", productId);
  if (deleteResult.error) throw new Error(deleteResult.error.message);

  if (rows.length === 0) return;

  const payload = rows.map((row, index) => ({
    product_id: productId,
    ...mapRow(row, index),
  }));

  const insertResult = await supabaseAdmin.from(table).insert(payload as any);
  if (insertResult.error) throw new Error(insertResult.error.message);
}

function extractMissingColumn(errorMessage: string) {
  const match = errorMessage.match(/Could not find the '([^']+)' column/);
  return match?.[1] ?? null;
}

async function saveProductWithFallback(data: ProductFormValues) {
  const productPayload: Record<string, unknown> = {
    slug: data.slug,
    title: data.title,
    category_id: data.category_id,
    short_description: data.short_description,
    featured_image: data.featured_image || null,
    is_featured: data.is_featured,
    is_published: data.is_published,
    meta_title: data.meta_title || null,
    meta_description: data.meta_description || null,
  };

  const attemptedMissingColumns = new Set<string>();

  while (true) {
    const saveResult = data.id
      ? await supabaseAdmin.from("products").update(productPayload as any).eq("id", data.id).select("*").single()
      : await supabaseAdmin.from("products").insert(productPayload as any).select("*").single();

    if (!saveResult.error && saveResult.data) {
      return saveResult.data;
    }

    const errorMessage = saveResult.error?.message ?? "Failed to save product";
    const missingColumn = extractMissingColumn(errorMessage);

    // Log useful debugging context on the server so the logs contain the payload and error
    console.error("saveProductWithFallback error", {
      errorMessage,
      missingColumn,
      attemptedMissingColumns: Array.from(attemptedMissingColumns),
      productPayload,
    });

    if (!missingColumn || attemptedMissingColumns.has(missingColumn) || !(missingColumn in productPayload)) {
      throw new Error(`${errorMessage}${missingColumn ? ` (missing column: ${missingColumn})` : ""}`);
    }

    attemptedMissingColumns.add(missingColumn);
    delete productPayload[missingColumn];
  }
}

export const saveCmsProduct = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => productFormSchema.parse(input))
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    let savedProduct: any;
    try {
      savedProduct = await saveProductWithFallback(data);
    } catch (err) {
      console.error("saveCmsProduct failed while saving product", { error: err, data });
      throw new Error(`Failed to save product: ${err instanceof Error ? err.message : String(err)}`);
    }

    try {
      await Promise.all([
        replaceChildRows("product_content_sections", savedProduct.id, data.content_sections, (row, index) => ({
          heading: row.heading,
          content: row.content,
          display_order: index,
        })),
        replaceChildRows("product_box_styles", savedProduct.id, data.box_styles, (row) => ({ title: row.title, description: row.description })),
        replaceChildRows("product_materials", savedProduct.id, data.materials, (row) => ({ title: row.title, description: row.description })),
        replaceChildRows("product_features", savedProduct.id, data.features, (row) => ({ feature: row.feature })),
        replaceChildRows("product_gallery_images", savedProduct.id, data.gallery_images, (row, index) => ({
          image_url: row.image_url,
          alt_text: row.alt_text ?? null,
          display_order: index,
        })),
      ]);
    } catch (err) {
      console.error("saveCmsProduct failed while replacing child rows", { error: err, data, savedProductId: savedProduct?.id });
      throw new Error(`Failed to save product relations: ${err instanceof Error ? err.message : String(err)}`);
    }

    const categories = await loadCategories().catch(() => [] as CmsCategory[]);
    const relations = await loadRelations(savedProduct.id);
    return normalizeProduct(savedProduct, categories.find((category) => category.id === savedProduct.category_id) ?? null, relations);
  });

export const deleteCmsProduct = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.string().uuid().parse(input))
  .middleware([requireSupabaseAuth])
  .handler(async ({ data: id }) => {
    const tables = [
      "product_gallery_images",
      "product_features",
      "product_materials",
      "product_box_styles",
      "product_content_sections",
    ] as const;

    for (const table of tables) {
      const result = await supabaseAdmin.from(table).delete().eq("product_id", id);
      if (result.error) throw new Error(result.error.message);
    }

    const { error } = await supabaseAdmin.from("products").delete().eq("id", id);
    if (error) throw new Error(error.message);

    return { ok: true };
  });

export const uploadCmsImageBase64 = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) =>
    z.object({
      fileName: z.string().min(1),
      contentType: z.string().min(1),
      base64Data: z.string().min(1),
    }).parse(input),
  )
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    const base64 = data.base64Data.replace(/^data:[^;]+;base64,/, "");
    const buffer = Buffer.from(base64, "base64");
    const filePath = `${Date.now()}_${data.fileName}`;

    const { error } = await supabaseAdmin.storage
      .from("product-images")
      .upload(filePath, buffer, {
        contentType: data.contentType,
        upsert: true,
      });

    if (error) throw new Error(error.message);

    const { data: publicUrlData } = supabaseAdmin.storage.from("product-images").getPublicUrl(filePath);
    return { url: publicUrlData.publicUrl };
  });