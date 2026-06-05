import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import {
  BarChart3,
  CircleCheck,
  LogOut,
  Package,
  Search,
  ShieldCheck,
  Tag,
  Trash2,
} from "lucide-react";
import { useDeferredValue, useEffect, useMemo, useState, type ComponentType, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getAdminSession, signOutAdmin } from "@/lib/admin";
import {
  createCmsCategory,
  deleteCmsProduct,
  listCmsCategories,
  listCmsProducts,
  type CmsCategory,
  type CmsProduct,
} from "@/lib/product.cms";
import { ProductEditorDialog } from "@/components/admin/ProductEditorDialog";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Panel — PackifyBoxes" }] }),
  component: AdminPanel,
});

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function truncatePreview(value: string | null | undefined, maxLength: number) {
  const text = value?.trim() ?? "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

function AdminPanel() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [ready, setReady] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editorProductId, setEditorProductId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState("");

  const deferredSearch = useDeferredValue(search);
  const fetchProducts = useServerFn(listCmsProducts);
  const fetchCategories = useServerFn(listCmsCategories);
  const createCategory = useServerFn(createCmsCategory);
  const deleteProduct = useServerFn(deleteCmsProduct);

  useEffect(() => {
    let mounted = true;

    getAdminSession()
      .then((session) => {
        if (!mounted) return;
        if (!session) {
          navigate({ to: "/admin/login" });
          return;
        }
        setReady(true);
      })
      .catch(() => {
        if (mounted) navigate({ to: "/admin/login" });
      });

    return () => {
      mounted = false;
    };
  }, [navigate]);

  const { data: products = [], isLoading: productsLoading } = useQuery<CmsProduct[]>({
    queryKey: ["admin", "products"],
    queryFn: () => fetchProducts(),
    enabled: ready,
  });

  const { data: categories = [], isLoading: categoriesLoading } = useQuery<CmsCategory[]>({
    queryKey: ["admin", "categories"],
    queryFn: () => fetchCategories(),
    enabled: ready,
  });

  const editorProduct = useMemo(
    () => products.find((product) => product.id === editorProductId) ?? null,
    [editorProductId, products],
  );

  const metrics = useMemo(() => {
    const published = products.filter((product) => product.is_published).length;
    const featured = products.filter((product) => product.is_featured).length;
    const drafts = products.length - published;

    return {
      total: products.length,
      published,
      featured,
      drafts,
    };
  }, [products]);

  const filteredProducts = useMemo(() => {
    const searchTerm = deferredSearch.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !searchTerm ||
        [product.title, product.slug, product.short_description, product.category?.name, product.category?.slug]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(searchTerm));
      const matchesCategory = categoryFilter === "all" || product.category_id === categoryFilter;
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "published" && product.is_published) ||
        (statusFilter === "draft" && !product.is_published) ||
        (statusFilter === "featured" && product.is_featured);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [categoryFilter, deferredSearch, products, statusFilter]);

  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  useEffect(() => {
    setPage(1);
  }, [categoryFilter, deferredSearch, statusFilter]);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-surface/40">
      <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur-xl">
        <div className="container-tight flex items-center justify-between gap-4 py-4">
          <div className="min-w-0 flex-1">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">PackifyBoxes</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Admin</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-1 font-display text-3xl sm:text-4xl">Product CMS</h1>
          </div>
          <Button
            variant="outline"
            onClick={async () => {
              await signOutAdmin();
              navigate({ to: "/admin/login" });
            }}
          >
            <LogOut className="h-4 w-4" /> Sign out
          </Button>
        </div>
      </header>

      <main className="container-tight space-y-8 py-8 md:py-10">
        {/*
        <section className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Dashboard</p>
              <h2 className="font-display text-3xl">Overview</h2>
              <p className="mt-1 text-sm text-ink-muted">
                Manage products and categories from a single product-focused workspace.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard title="Total products" value={metrics.total} icon={Package} note="All CMS product records" />
            <MetricCard title="Published" value={metrics.published} icon={CircleCheck} note="Visible on the storefront" />
            <MetricCard title="Featured" value={metrics.featured} icon={ShieldCheck} note="Curated product highlights" />
            <MetricCard title="Drafts" value={metrics.drafts} icon={BarChart3} note="Hidden until published" />
          </div>
        </section>
        */}

        <section className="space-y-5">
          <SectionHeader
            title="Products"
            description="Search, filter, edit, publish, and delete products."
            actions={
              <Button
                className="bg-gradient-accent border-0 shadow-soft hover:shadow-glow"
                onClick={() => {
                  setEditorProductId(null);
                  setEditorOpen(true);
                }}
              >
                Add product
              </Button>
            }
          />

          <div className="grid gap-3 rounded-3xl border bg-card p-4 shadow-soft lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products, slugs, descriptions..."
                className="pl-9"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="featured">Featured</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {productsLoading ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-105 rounded-3xl" />
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:hidden">
                {pageItems.map((product) => (
                  <div key={product.id} className="overflow-hidden rounded-3xl border bg-card shadow-soft">
                    <div className="aspect-4/3 overflow-hidden bg-muted">
                      {product.featured_image || product.category?.image_url ? (
                        <img
                          src={product.featured_image || product.category?.image_url || ""}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                    </div>
                    <div className="space-y-4 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium">{product.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{product.category?.name ?? "Unassigned"}</p>
                        </div>
                        <div className="flex flex-wrap justify-end gap-2">
                          <Badge variant={product.is_published ? "default" : "secondary"}>
                            {product.is_published ? "Live" : "Draft"}
                          </Badge>
                          {product.is_featured && <Badge variant="outline">Featured</Badge>}
                        </div>
                      </div>
                      <p className="truncate text-sm leading-6 text-ink-muted">
                        {truncatePreview(product.short_description, 90)}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditorProductId(product.id);
                            setEditorOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                        <Button type="button" variant="ghost" size="icon" onClick={() => setDeleteTarget(product.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden overflow-hidden rounded-3xl border bg-card shadow-soft md:block">
                <Table className="table-fixed">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[38%]">Product</TableHead>
                      <TableHead className="w-[16%]">Category</TableHead>
                      <TableHead className="w-[12%]">Status</TableHead>
                      <TableHead className="w-[12%]">Flags</TableHead>
                      <TableHead className="w-[10%]">Created</TableHead>
                      <TableHead className="w-[8%] text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pageItems.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="py-14 text-center text-muted-foreground">
                          No products found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      pageItems.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="align-top overflow-hidden">
                            <div className="flex min-w-0 max-h-28 items-start gap-4 overflow-hidden">
                              <div className="h-16 w-20 overflow-hidden rounded-2xl border bg-muted">
                                {product.featured_image || product.category?.image_url ? (
                                  <img
                                    src={product.featured_image || product.category?.image_url || ""}
                                    alt={product.title}
                                    className="h-full w-full object-cover"
                                  />
                                ) : null}
                              </div>
                              <div className="min-w-0 flex-1 overflow-hidden">
                                <p className="truncate font-medium">{product.title}</p>
                                <p className="mt-1 block w-full truncate text-xs leading-5 text-muted-foreground">
                                  {truncatePreview(product.short_description, 70)}
                                </p>
                                <p className="mt-1 truncate text-[11px] uppercase tracking-[0.3em] text-primary">
                                  {product.slug}
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{product.category?.name ?? "Unassigned"}</TableCell>
                          <TableCell>
                            <Badge variant={product.is_published ? "default" : "secondary"}>
                              {product.is_published ? "Published" : "Draft"}
                            </Badge>
                          </TableCell>
                          <TableCell className="flex flex-wrap gap-2">
                            {product.is_featured && <Badge variant="outline">Featured</Badge>}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {new Date(product.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="inline-flex items-center gap-1">
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setEditorProductId(product.id);
                                  setEditorOpen(true);
                                }}
                              >
                                Edit
                              </Button>
                              <Button type="button" variant="ghost" size="icon" onClick={() => setDeleteTarget(product.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-3xl border bg-card p-4 shadow-soft">
                <p className="text-sm text-muted-foreground">
                  Showing {pageItems.length} of {filteredProducts.length} products
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={currentPage === 1}>
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button variant="outline" size="sm" onClick={() => setPage((value) => Math.min(totalPages, value + 1))} disabled={currentPage === totalPages}>
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </section>

        <section className="space-y-5 pb-10">
          <SectionHeader
            title="Categories"
            description="Create categories here and they will immediately appear in the product category dropdown."
          />

          <div className="grid gap-5 lg:grid-cols-[380px_minmax(0,1fr)]">
            <div className="rounded-3xl border bg-card p-5 shadow-soft">
              <h3 className="font-display text-2xl">Create category</h3>
              <p className="mt-2 text-sm text-ink-muted">Keep category creation close to product setup so the CMS stays tidy.</p>
              <div className="mt-5 space-y-4">
                <div className="space-y-2">
                  <Input value={categoryName} onChange={(event) => setCategoryName(event.target.value)} placeholder="Category name" />
                </div>
                <div className="space-y-2">
                  <Input value={slugify(categoryName)} readOnly placeholder="Auto-generated slug" className="bg-muted/50" />
                </div>
                <Button
                  className="w-full bg-gradient-accent border-0 shadow-soft hover:shadow-glow"
                  onClick={async () => {
                    const name = categoryName.trim();
                    const slug = slugify(name);

                    if (!name || !slug) {
                      toast.error("Category name is required");
                      return;
                    }

                    try {
                      await createCategory({
                        data: {
                          name,
                          slug,
                          description: null,
                        },
                      });
                      toast.success("Category created");
                      setCategoryName("");
                      await qc.invalidateQueries({ queryKey: ["admin", "categories"] });
                    } catch (error) {
                      toast.error(error instanceof Error ? error.message : "Failed to create category");
                    }
                  }}
                >
                  Create category
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {categoriesLoading
                ? Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} className="h-40 rounded-3xl" />)
                : categories.map((category) => (
                    <div key={category.id} className="rounded-3xl border bg-card p-5 shadow-soft">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-primary">Category</p>
                          <h4 className="mt-2 font-display text-2xl">{category.name}</h4>
                          <p className="mt-2 text-sm text-ink-muted">{category.description ?? "Premium packaging category."}</p>
                        </div>
                        <Badge variant="outline">{products.filter((product) => product.category_id === category.id).length} products</Badge>
                      </div>
                      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                        <Tag className="h-4 w-4" /> {category.slug}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </main>

      <ProductEditorDialog
        open={editorOpen}
        onOpenChange={(open) => {
          setEditorOpen(open);
          if (!open) setEditorProductId(null);
        }}
        product={editorProduct}
        categories={categories}
        onSaved={async () => {
          await qc.invalidateQueries({ queryKey: ["admin", "products"] });
        }}
      />

      <Dialog open={deleteTarget !== null} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Delete product?</DialogTitle>
            <DialogDescription>
              This removes the product and all related content sections, styles, materials, features, and gallery images.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTarget(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={async () => {
                if (!deleteTarget) return;
                try {
                  await deleteProduct({ data: deleteTarget });
                  toast.success("Product deleted");
                  setDeleteTarget(null);
                  await qc.invalidateQueries({ queryKey: ["admin", "products"] });
                } catch (error) {
                  toast.error(error instanceof Error ? error.message : "Failed to delete product");
                }
              }}
            >
              Delete product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function MetricCard({
  title,
  value,
  note,
  icon: Icon,
}: {
  title: string;
  value: number;
  note: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="rounded-3xl border bg-card p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 font-display text-4xl">{value}</p>
          <p className="mt-2 text-sm text-ink-muted">{note}</p>
        </div>
        <div className="rounded-2xl bg-primary/10 p-3 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-primary">CMS</p>
        <h2 className="font-display text-3xl">{title}</h2>
        <p className="mt-1 text-sm text-ink-muted">{description}</p>
      </div>
      {actions}
    </div>
  );
}
