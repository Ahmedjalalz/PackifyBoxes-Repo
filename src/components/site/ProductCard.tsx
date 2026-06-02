import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { cn, truncateText } from "@/lib/utils";
import type { CmsProduct } from "@/lib/product.cms";

export function ProductCard({
  product,
  className,
  showStatus = false,
}: {
  product: CmsProduct;
  className?: string;
  showStatus?: boolean;
}) {
  const image = product.featured_image || product.category?.image_url || "";

  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className={cn(
        "group flex h-full min-h-128 flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant",
        className,
      )}
    >
      <div className="relative flex-none">
        <AspectRatio ratio={4 / 3}>
          {image ? (
            <img
              src={image}
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-hero">
              <div className="text-center">
                <Sparkles className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-sm text-ink-muted">PackifyBoxes</p>
              </div>
            </div>
          )}
        </AspectRatio>
      </div>
      <div className="flex flex-1 flex-col justify-between space-y-4 border-t bg-card p-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            {product.category?.name ?? "Packaging"}
          </p>
          <h3 className="font-display text-xl leading-tight text-foreground text-balance">
            {product.title}
          </h3>
        </div>

        <p className="min-h-18 text-sm leading-6 text-ink-muted">
          {truncateText(product.short_description ?? "Premium packaging designed for modern brands.", 120)}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {showStatus && (
            <>
              <Badge variant={product.is_published ? "default" : "secondary"}>
                {product.is_published ? "Published" : "Draft"}
              </Badge>
              {product.is_featured && <Badge variant="outline">Featured</Badge>}
            </>
          )}
          {!showStatus && product.is_featured && <Badge variant="outline">Featured</Badge>}
          <div className="ml-auto rounded-full border border-border bg-background p-2 text-primary transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
