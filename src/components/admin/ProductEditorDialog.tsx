"use client";

import { useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useFieldArray, useForm } from "react-hook-form";
import {
  ChevronDown,
  ChevronUp,
  ImagePlus,
  Loader2,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  type CmsCategory,
  type CmsProduct,
  type ProductFormValues,
  productFormSchema,
} from "@/lib/product.cms";
import { saveCmsProduct, uploadCmsImageBase64 } from "@/lib/product.cms";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

function makeSection<T extends { id?: string }>(items: T[], fallback: T) {
  return items.length > 0 ? items : [fallback];
}

function formValuesFromProduct(product: CmsProduct | null, categories: CmsCategory[]): ProductFormValues {
  return {
    id: product?.id,
    slug: product?.slug ?? "",
    title: product?.title ?? "",
    category_id: product?.category_id ?? categories[0]?.id ?? "",
    short_description: product?.short_description ?? "",
    featured_image: product?.featured_image ?? "",
    is_featured: product?.is_featured ?? false,
    is_published: product?.is_published ?? false,
    meta_title: product?.meta_title ?? "",
    meta_description: product?.meta_description ?? "",
    content_sections: makeSection(product?.content_sections ?? [], {
      id: "default-section",
      heading: "What makes this box special?",
      content: "Describe the product story, packaging benefits, or brand-specific selling points.",
    }),
    box_styles: makeSection(product?.box_styles ?? [], {
      id: "default-style",
      title: "Signature style",
      description: "Describe the visual and structural style customers can choose from.",
    }),
    materials: makeSection(product?.materials ?? [], {
      id: "default-material",
      title: "Premium stock",
      description: "Explain the material options or finishes that pair with this product.",
    }),
    features: product?.features ?? [{ feature: "Premium unboxing experience" }],
    gallery_images: product?.gallery_images ?? [],
  };
}

function SectionCard({
  title,
  description,
  children,
  action,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border bg-card shadow-soft">
      <div className="flex flex-col gap-2 border-b p-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-display text-xl">{title}</h3>
          <p className="mt-1 text-sm text-ink-muted">{description}</p>
        </div>
        {action}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function ErrorText({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mt-1 text-xs text-destructive">{children}</p>;
}

function FieldRow({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2">{children}</div>;
}

function ReorderControls({
  onUp,
  onDown,
  onRemove,
  disableUp,
  disableDown,
}: {
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
  disableUp?: boolean;
  disableDown?: boolean;
}) {
  return (
    <div className="flex items-center gap-1">
      <Button type="button" variant="ghost" size="icon" onClick={onUp} disabled={disableUp}>
        <ChevronUp className="h-4 w-4" />
      </Button>
      <Button type="button" variant="ghost" size="icon" onClick={onDown} disabled={disableDown}>
        <ChevronDown className="h-4 w-4" />
      </Button>
      <Button type="button" variant="ghost" size="icon" onClick={onRemove}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}

export function ProductEditorDialog({
  open,
  onOpenChange,
  product,
  categories,
  onSaved,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: CmsProduct | null;
  categories: CmsCategory[];
  onSaved: () => void;
}) {
  const saveFn = useServerFn(saveCmsProduct);
  const uploadFn = useServerFn(uploadCmsImageBase64);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const defaultValues = useMemo(() => formValuesFromProduct(product, categories), [product, categories]);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues,
    values: defaultValues,
    mode: "onBlur",
  });

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  const contentSections = useFieldArray({ control, name: "content_sections" });
  const boxStyles = useFieldArray({ control, name: "box_styles" });
  const materials = useFieldArray({ control, name: "materials" });
  const features = useFieldArray({ control, name: "features" });
  const galleryImages = useFieldArray({ control, name: "gallery_images" });

  const titleValue = watch("title");
  const slugValue = watch("slug");
  const featuredImage = watch("featured_image");
  const isPublished = watch("is_published");
  const isFeatured = watch("is_featured");

  useEffect(() => {
    if (!product && titleValue && (!slugValue || slugValue === slugify(product?.title ?? ""))) {
      setValue("slug", slugify(titleValue), { shouldValidate: true });
    }
  }, [product, setValue, slugValue, titleValue]);

  useEffect(() => {
    if (open) {
      form.reset(defaultValues);
      setUploadProgress(0);
      setUploading(false);
    }
  }, [defaultValues, form, open]);

  async function uploadFiles(files: FileList | File[]) {
    const uploads = Array.from(files);
    if (uploads.length === 0) return [] as string[];

    setUploading(true);
    setUploadProgress(15);

    try {
      const urls: string[] = [];
      for (let index = 0; index < uploads.length; index += 1) {
        const file = uploads[index];
        const base64Data = await toDataUrl(file);
        const response = await uploadFn({
          data: {
            fileName: file.name.replace(/[^a-zA-Z0-9._-]/g, "_"),
            contentType: file.type,
            base64Data,
          },
        });
        urls.push(response.url);
        setUploadProgress(15 + Math.round(((index + 1) / uploads.length) * 85));
      }
      return urls;
    } finally {
      setUploading(false);
      setUploadProgress(100);
      setTimeout(() => setUploadProgress(0), 700);
    }
  }

  function collectErrorMessages(value: unknown, prefix = ""): string[] {
    if (!value || typeof value !== "object") return [];

    return Object.entries(value as Record<string, unknown>).flatMap(([key, entry]) => {
      const fieldName = prefix ? `${prefix}.${key}` : key;

      if (!entry) return [];
      if (typeof entry === "string") return [entry];
      if (Array.isArray(entry)) {
        return entry.flatMap((item, index) => collectErrorMessages(item, `${fieldName}[${index}]`));
      }
      if (typeof entry === "object" && "message" in entry && typeof (entry as { message?: unknown }).message === "string") {
        return [(entry as { message: string }).message];
      }

      return collectErrorMessages(entry, fieldName);
    });
  }

  const onSubmit = handleSubmit(
    async (values) => {
      try {
        const {
          meta_title: _metaTitle,
          meta_description: _metaDescription,
          gallery_images: galleryImagesValues,
          ...restValues
        } = values;

        const payload: ProductFormValues = {
          ...restValues,
          id: values.id ?? product?.id,
          slug: values.slug.trim(),
          title: values.title.trim(),
          category_id: values.category_id,
          short_description: values.short_description.trim(),
          featured_image: values.featured_image?.trim() || null,
          content_sections: values.content_sections.map((section) => ({
            ...section,
            heading: section.heading.trim(),
            content: section.content.trim(),
          })),
          box_styles: values.box_styles.map((style) => ({
            ...style,
            title: style.title.trim(),
            description: style.description.trim(),
          })),
          materials: values.materials.map((material) => ({
            ...material,
            title: material.title.trim(),
            description: material.description.trim(),
          })),
          features: values.features.map((feature) => ({
            ...feature,
            feature: feature.feature.trim(),
          })),
          gallery_images: galleryImagesValues.map((image) => ({
            id: image.id,
            image_url: image.image_url.trim(),
          })),
        };

        const saved = await saveFn({ data: payload });
        toast.success(product ? "Product updated" : "Product created");
        onSaved();
        onOpenChange(false);
        return saved;
      } catch (error) {
        // Log full error to console for debugging
        console.error("Product save failed", error);

        const errMsg = error instanceof Error
          ? error.message
          : typeof error === "object"
            ? JSON.stringify(error)
            : String(error);

        // Show a concise toast to the user, full details are in the console
        toast.error(errMsg.length > 200 ? `${errMsg.slice(0, 200)}...` : errMsg || "Failed to save product");
        throw error;
      }
    },
    (submitErrors) => {
      const messages = collectErrorMessages(submitErrors);
      toast.error(messages[0] ?? "Please fix the highlighted fields before saving.");
    },
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-5xl overflow-visible p-0 sm:rounded-4xl">
        <div className="max-h-[92vh] overflow-y-auto">
          <DialogHeader className="border-b px-6 py-6 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <DialogTitle className="text-2xl">{product ? "Edit product" : "Create product"}</DialogTitle>
              <Badge variant={isPublished ? "default" : "secondary"}>{isPublished ? "Published" : "Draft"}</Badge>
              {isFeatured && <Badge variant="outline">Featured</Badge>}
            </div>
            <DialogDescription>
              Build a complete CMS record with content sections, styles, materials, features, gallery images, and SEO settings.
            </DialogDescription>
          </DialogHeader>

          <div className="px-6 py-6">
            <form onSubmit={onSubmit} className="space-y-6">
              <SectionCard
                  title="Basic information"
                  description="Title, slug, category, and publishing state."
                >
                  <FieldRow>
                    <div>
                      <Label htmlFor="title">Product title</Label>
                      <Input id="title" placeholder="Luxury Magnetic Gift Box" {...register("title")} />
                      <ErrorText>{errors.title?.message}</ErrorText>
                    </div>
                    <div>
                      <Label htmlFor="slug">Slug</Label>
                      <Input id="slug" placeholder="luxury-magnetic-gift-box" {...register("slug")} />
                      <ErrorText>{errors.slug?.message}</ErrorText>
                    </div>
                  </FieldRow>
                  <FieldRow>
                    <div>
                      <Label htmlFor="category_id">Category</Label>
                      <select
                        id="category_id"
                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                        {...register("category_id")}
                      >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                      <ErrorText>{errors.category_id?.message}</ErrorText>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="short_description">Short description</Label>
                        <Textarea id="short_description" rows={4} placeholder="A compact summary used on cards and the hero." {...register("short_description")} />
                        <ErrorText>{errors.short_description?.message}</ErrorText>
                      </div>
                      <div className="grid gap-4">
                        <label className="flex items-center justify-between rounded-2xl border bg-surface/60 p-4">
                          <div>
                            <p className="font-medium">Featured product</p>
                            <p className="text-sm text-ink-muted">Show this product in curated placements.</p>
                          </div>
                          <Switch checked={isFeatured} onCheckedChange={(checked) => setValue("is_featured", checked)} />
                        </label>
                        <label className="flex items-center justify-between rounded-2xl border bg-surface/60 p-4">
                          <div>
                            <p className="font-medium">Published</p>
                            <p className="text-sm text-ink-muted">Visible on the storefront once enabled.</p>
                          </div>
                          <Switch checked={isPublished} onCheckedChange={(checked) => setValue("is_published", checked)} />
                        </label>
                      </div>
                    </div>
                  </FieldRow>
                </SectionCard>

              <SectionCard
                  title="Featured image"
                  description="Drag and drop a primary hero image for product cards and the detail page."
                >
                  <div
                    className={cn(
                      "grid gap-4 rounded-3xl border border-dashed p-6 transition-colors",
                      "bg-linear-to-br from-surface to-background",
                    )}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={async (event) => {
                      event.preventDefault();
                      const files = event.dataTransfer.files;
                      if (!files?.length) return;
                      const [url] = await uploadFiles(files);
                      if (url) setValue("featured_image", url, { shouldValidate: true });
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("featured-image-input")?.click()}
                        disabled={uploading}
                      >
                        <Upload className="h-4 w-4" /> Upload image
                      </Button>
                      <Button type="button" variant="ghost" onClick={() => setValue("featured_image", "")}>
                        Clear image
                      </Button>
                      {uploading && <Loader2 className="h-4 w-4 animate-spin text-primary" />}
                    </div>
                    <Input
                      id="featured-image-input"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (event) => {
                        const file = event.target.files?.[0];
                        if (!file) return;
                        const [url] = await uploadFiles([file]);
                        if (url) setValue("featured_image", url, { shouldValidate: true });
                        event.target.value = "";
                      }}
                    />
                    <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]">
                      <div className="overflow-hidden rounded-2xl border bg-card">
                        {featuredImage ? (
                          <img src={featuredImage} alt="Featured preview" className="h-full w-full object-cover" />
                        ) : (
                          <div className="grid h-56 place-items-center bg-muted/40 text-sm text-muted-foreground">
                            No featured image selected
                          </div>
                        )}
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-ink-muted">
                          <ImagePlus className="h-4 w-4" /> Drag an image into this panel or use the upload button.
                        </div>
                        {uploadProgress > 0 && <Progress value={uploadProgress} />}
                        <p className="text-sm text-ink-muted">
                          Use a warm, editorial crop. This image appears in the list, hero, and social previews.
                        </p>
                      </div>
                    </div>
                  </div>
                </SectionCard>

              <SectionCard
                  title="Gallery images"
                  description="Multiple images with reorder controls for the product gallery."
                  action={
                    <div className="flex flex-wrap gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={async () => {
                          const input = document.getElementById("gallery-upload-input") as HTMLInputElement | null;
                          input?.click();
                        }}
                      >
                        <Plus className="h-4 w-4" /> Add images
                      </Button>
                    </div>
                  }
                >
                  <Input
                    id="gallery-upload-input"
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={async (event) => {
                      const files = event.target.files;
                      if (!files?.length) return;
                      const urls = await uploadFiles(files);
                      urls.forEach((url) => galleryImages.append({ image_url: url, alt_text: "" }));
                      event.target.value = "";
                    }}
                  />
                  {galleryImages.fields.length === 0 ? (
                    <div className="grid place-items-center rounded-3xl border border-dashed py-16 text-center text-sm text-muted-foreground">
                      Drop multiple gallery images here or upload them with the button above.
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {galleryImages.fields.map((field, index) => (
                        <motion.div
                          key={field.id}
                          layout
                          className="overflow-hidden rounded-3xl border bg-card shadow-soft"
                        >
                          <div className="aspect-4/3 bg-muted/30">
                            <img
                              src={watch(`gallery_images.${index}.image_url`) || ""}
                              alt="Gallery preview"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="space-y-3 p-4">
                            <Input
                              placeholder="Alt text"
                              {...register(`gallery_images.${index}.alt_text`)}
                            />
                            <div className="flex items-center justify-between">
                              <ReorderControls
                                onUp={() => index > 0 && galleryImages.move(index, index - 1)}
                                onDown={() => index < galleryImages.fields.length - 1 && galleryImages.move(index, index + 1)}
                                onRemove={() => galleryImages.remove(index)}
                                disableUp={index === 0}
                                disableDown={index === galleryImages.fields.length - 1}
                              />
                              <Button type="button" variant="ghost" size="sm" onClick={() => setValue("featured_image", watch(`gallery_images.${index}.image_url`))}>
                                Use as hero
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </SectionCard>

                <Accordion type="multiple" defaultValue={["content", "styles", "seo"]} className="space-y-4">
                  <AccordionItem value="content" className="rounded-3xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="py-5 text-left hover:no-underline">Content sections</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {contentSections.fields.map((field, index) => (
                          <div key={field.id} className="rounded-3xl border bg-surface/60 p-4">
                            <div className="mb-4 flex items-center justify-between gap-4">
                              <Badge variant="secondary">Section {index + 1}</Badge>
                              <ReorderControls
                                onUp={() => index > 0 && contentSections.move(index, index - 1)}
                                onDown={() => index < contentSections.fields.length - 1 && contentSections.move(index, index + 1)}
                                onRemove={() => contentSections.remove(index)}
                                disableUp={index === 0}
                                disableDown={index === contentSections.fields.length - 1}
                              />
                            </div>
                            <FieldRow>
                              <div>
                                <Label>Heading</Label>
                                <Input {...register(`content_sections.${index}.heading`)} />
                              </div>
                              <div>
                                <Label>Content</Label>
                                <Textarea rows={5} {...register(`content_sections.${index}.content`)} />
                              </div>
                            </FieldRow>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => contentSections.append({ heading: "New section", content: "Describe the section in a concise, readable way." })}
                        >
                          <Plus className="h-4 w-4" /> Add section
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="styles" className="rounded-3xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="py-5 text-left hover:no-underline">Box styles</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {boxStyles.fields.map((field, index) => (
                          <div key={field.id} className="rounded-3xl border bg-surface/60 p-4">
                            <div className="mb-4 flex items-center justify-between gap-4">
                              <Badge variant="outline">Style {index + 1}</Badge>
                              <ReorderControls
                                onUp={() => index > 0 && boxStyles.move(index, index - 1)}
                                onDown={() => index < boxStyles.fields.length - 1 && boxStyles.move(index, index + 1)}
                                onRemove={() => boxStyles.remove(index)}
                                disableUp={index === 0}
                                disableDown={index === boxStyles.fields.length - 1}
                              />
                            </div>
                            <FieldRow>
                              <div>
                                <Label>Title</Label>
                                <Input {...register(`box_styles.${index}.title`)} />
                              </div>
                              <div>
                                <Label>Description</Label>
                                <Textarea rows={4} {...register(`box_styles.${index}.description`)} />
                              </div>
                            </FieldRow>
                          </div>
                        ))}
                        <Button type="button" variant="outline" onClick={() => boxStyles.append({ title: "New style", description: "Explain the shape, closure, or premium detail." })}>
                          <Plus className="h-4 w-4" /> Add style
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="materials" className="rounded-3xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="py-5 text-left hover:no-underline">Materials</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {materials.fields.map((field, index) => (
                          <div key={field.id} className="rounded-3xl border bg-surface/60 p-4">
                            <div className="mb-4 flex items-center justify-between gap-4">
                              <Badge variant="secondary">Material {index + 1}</Badge>
                              <ReorderControls
                                onUp={() => index > 0 && materials.move(index, index - 1)}
                                onDown={() => index < materials.fields.length - 1 && materials.move(index, index + 1)}
                                onRemove={() => materials.remove(index)}
                                disableUp={index === 0}
                                disableDown={index === materials.fields.length - 1}
                              />
                            </div>
                            <FieldRow>
                              <div>
                                <Label>Material title</Label>
                                <Input {...register(`materials.${index}.title`)} />
                              </div>
                              <div>
                                <Label>Material description</Label>
                                <Textarea rows={4} {...register(`materials.${index}.description`)} />
                              </div>
                            </FieldRow>
                          </div>
                        ))}
                        <Button type="button" variant="outline" onClick={() => materials.append({ title: "New material", description: "Explain the stock or finish in one concise paragraph." })}>
                          <Plus className="h-4 w-4" /> Add material
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="features" className="rounded-3xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="py-5 text-left hover:no-underline">Features</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {features.fields.map((field, index) => (
                          <div key={field.id} className="flex items-center gap-3 rounded-2xl border bg-surface/60 p-4">
                            <Badge variant="outline">{index + 1}</Badge>
                            <Input {...register(`features.${index}.feature`)} placeholder="Feature label" />
                            <Button type="button" variant="ghost" size="icon" onClick={() => features.remove(index)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        <Button type="button" variant="outline" onClick={() => features.append({ feature: "New feature" })}>
                          <Plus className="h-4 w-4" /> Add feature
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="seo" className="rounded-3xl border bg-card px-5 shadow-soft">
                    <AccordionTrigger className="py-5 text-left hover:no-underline">SEO & meta tags</AccordionTrigger>
                    <AccordionContent>
                      <FieldRow>
                        <div>
                          <Label>Meta title</Label>
                          <Input {...register("meta_title")} placeholder="Custom packaging boxes for modern brands" />
                        </div>
                        <div>
                          <Label>Meta description</Label>
                          <Textarea rows={4} {...register("meta_description")} placeholder="Concise meta description for search and social previews." />
                        </div>
                      </FieldRow>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <DialogFooter className="sticky bottom-0 border-t bg-background/95 px-0 py-4 backdrop-blur-xl">
                  <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting || uploading}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-gradient-accent border-0 shadow-soft hover:shadow-glow" disabled={isSubmitting || uploading}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Saving...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4" /> Save product
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  );
}
