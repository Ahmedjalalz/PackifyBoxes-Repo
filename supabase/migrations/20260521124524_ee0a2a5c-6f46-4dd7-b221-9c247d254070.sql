
create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text,
  box_type text not null,
  dimensions text,
  quantity integer not null,
  material text,
  printing text,
  notes text,
  attachment_name text,
  attachment_url text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.quote_requests enable row level security;
alter table public.contact_messages enable row level security;

insert into storage.buckets (id, name, public)
values ('quote-attachments', 'quote-attachments', true)
on conflict (id) do nothing;

-- Anyone can submit (public forms)
create policy "Anyone can submit a quote" on public.quote_requests for insert to anon, authenticated with check (true);
create policy "Anyone can submit a contact message" on public.contact_messages for insert to anon, authenticated with check (true);

-- Only authenticated users can read (admin dashboard later)
create policy "Authenticated can view quotes" on public.quote_requests for select to authenticated using (true);
create policy "Authenticated can view messages" on public.contact_messages for select to authenticated using (true);
create policy "Authenticated can update quotes" on public.quote_requests for update to authenticated using (true);
create policy "Authenticated can update messages" on public.contact_messages for update to authenticated using (true);
create policy "Authenticated can delete quotes" on public.quote_requests for delete to authenticated using (true);
create policy "Authenticated can delete messages" on public.contact_messages for delete to authenticated using (true);
