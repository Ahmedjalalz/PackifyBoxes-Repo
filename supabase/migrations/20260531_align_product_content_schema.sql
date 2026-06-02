alter table public.product_content_sections
  add column if not exists display_order integer;

update public.product_content_sections
set display_order = coalesce(display_order, sort_order)
where display_order is null;

alter table public.product_content_sections
  drop column if exists sort_order;

alter table public.product_gallery_images
  add column if not exists display_order integer;

update public.product_gallery_images
set display_order = coalesce(display_order, sort_order)
where display_order is null;

alter table public.product_gallery_images
  drop column if exists sort_order;

alter table public.product_gallery_images
  add column if not exists alt_text text;
