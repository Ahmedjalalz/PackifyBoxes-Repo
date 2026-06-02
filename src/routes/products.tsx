import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Reveal, Stagger } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { categories as fallbackCategories, materialsInfo, printingInfo } from "@/lib/catalog";
import { listCmsCategories, listPublicProducts } from "@/lib/product.cms";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Custom Packaging Boxes | PackifyBoxes" },
      { name: "description", content: "Explore premium custom packaging products with modern materials, box styles, and dynamic content sections." },
      { property: "og:title", content: "Custom Packaging Products — PackifyBoxes" },
      { property: "og:description", content: "Luxury, cosmetic, food, shipping, retail and eco packaging boxes." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsRouteShell,
});

function ProductsRouteShell() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isDetailRoute = pathname.startsWith("/products/") && pathname !== "/products/";

  if (isDetailRoute) {
    return <Outlet />;
  }

  return <ProductsPage />;
}

function ProductsPage() {
  const fetchProducts = useServerFn(listPublicProducts);
  const fetchCategories = useServerFn(listCmsCategories);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const deferredSearch = useDeferredValue(search);

  useEffect(() => {
    setPage(1);
  }, [category, deferredSearch]);

  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ["public", "products"],
    queryFn: async () => fetchProducts(),
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["public", "categories"],
    queryFn: () => fetchCategories(),
  });

  const [clientProducts, setClientProducts] = useState<any[] | null>(null);

  useEffect(() => {
    if (!productsLoading && products.length === 0) {
      fetchProducts()
        .then((res) => setClientProducts(Array.isArray(res) ? res : []))
        .catch(() => setClientProducts([]));
    }
  }, [productsLoading, products.length, fetchProducts]);

  useEffect(() => {
    let mounted = true;
    fetchProducts()
      .then((res) => mounted && setClientProducts(Array.isArray(res) ? res : []))
      .catch(() => mounted && setClientProducts([]));
    return () => {
      mounted = false;
    };
  }, []);

  const renderedProducts = clientProducts ?? products;

  const categoryOptions = categories.length > 0
    ? categories
    : fallbackCategories.map((category) => ({
        id: category.value,
        slug: category.value,
        name: category.label,
        description: category.blurb,
        image_url: category.image,
        sort_order: null,
        created_at: "",
        updated_at: null,
      }));

  const filteredProducts = useMemo(() => {
    const term = deferredSearch.trim().toLowerCase();
    return renderedProducts.filter((product) => {
      const matchesTerm =
        !term ||
        [product.title, product.slug, product.short_description, product.category?.name]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(term));
      const matchesCategory = category === "all" || product.category_id === category;
      return matchesTerm && matchesCategory;
    });
  }, [category, deferredSearch, renderedProducts]);

  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="container-tight relative py-20 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">Products</p>
            <h1 className="mt-3 max-w-4xl font-display text-5xl leading-[1.02] text-balance md:text-7xl">
              Premium packaging, organised like a modern CMS.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-muted">
              Browse published products by category, search by packaging type, and jump into product details built from the same relational content that powers the admin.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <StatCard title="Published products" value={products.filter((product) => product.is_published).length} />
            <StatCard title="Featured products" value={products.filter((product) => product.is_featured).length} />
            <StatCard title="Categories" value={categoryOptions.length} />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-tight space-y-6">
          <div className="grid gap-3 rounded-3xl border bg-card p-4 shadow-soft lg:grid-cols-[1.5fr_0.8fr] xl:grid-cols-[1.5fr_0.8fr_0.8fr]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products, slugs, descriptions, categories"
                className="pl-9"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {categoryOptions.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="justify-start" asChild>
              <Link to="/quote">
                <Filter className="h-4 w-4" /> Request a quote
              </Link>
            </Button>
          </div>

          <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productsLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index}>
                  <Skeleton className="h-128 rounded-3xl" />
                </div>
              ))}

            {!productsLoading && visibleProducts.length === 0 && (
              <div className="col-span-full rounded-3xl border bg-card p-12 text-center shadow-soft">
                <h2 className="font-display text-3xl">No products found</h2>
                <p className="mt-3 text-ink-muted">Try a different search or clear the category filter.</p>
              </div>
            )}

            {!productsLoading &&
              visibleProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </Stagger>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border bg-card p-4 shadow-soft">
            <p className="text-sm text-muted-foreground">
              Showing {visibleProducts.length} of {filteredProducts.length} products
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
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-tight space-y-8">
          <SectionHeading
            title="Materials"
            eyebrow="From sustainable kraft to luxury rigid board."
            description="We stock every common substrate and source specialty materials on request. Not sure which to pick? Our consultants will recommend the best fit."
          />

          <ItemGrid items={materialsInfo} />

          <SectionHeading
            title="Printing & finishes"
            eyebrow="Print, foil, emboss — done in-house."
            description="Five core techniques, infinite combinations. Mix and match to land on a finish that's unmistakably yours."
          />

          <ItemGrid items={printingInfo} />
        </div>
      </section>

      <section className="py-4 md:py-8">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-accent p-8 text-primary-foreground shadow-elegant md:p-12">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-background/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />
            <div className="relative flex flex-col items-center gap-6 text-center">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.35em] text-primary-foreground/70">Custom quote</p>
                <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
                  Didn&apos;t find exactly what you need? We&apos;ll build it for you.
                </h2>
                <p className="mt-4 text-primary-foreground/85">
                  Tell us the box style, material, and finish you have in mind, and our team will put together a custom quote tailored to your project.
                </p>
              </div>
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 border-0">
                <Link to="/quote">Request a custom quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="rounded-3xl border bg-card p-5 shadow-soft">
      <p className="text-xs uppercase tracking-[0.35em] text-primary">{title}</p>
      <p className="mt-4 font-display text-4xl">{value}</p>
    </motion.div>
  );
}

function SectionHeading({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-primary">{title}</p>
      <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">{eyebrow}</h2>
      <p className="mt-3 max-w-3xl text-ink-muted">{description}</p>
    </div>
  );
}

function ItemGrid({
  items,
}: {
  items: Array<{ name: string; desc: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item.name} className="rounded-3xl border bg-card p-6 shadow-soft">
          <p className="font-display text-2xl">{item.name}</p>
          <p className="mt-2 text-sm leading-6 text-ink-muted">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
