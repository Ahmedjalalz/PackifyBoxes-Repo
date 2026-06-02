import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const listQuotes = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    const { data: rows, error } = await supabaseAdmin
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return rows ?? [];
  });

export const listContacts = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    const { data: rows, error } = await supabaseAdmin
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return rows ?? [];
  });

export const updateStatus = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) =>
    z
      .object({
        table: z.enum(["quote_requests", "contact_messages"]),
        id: z.string().uuid(),
        status: z.string().min(1).max(40),
      })
      .parse(i),
  )
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from(data.table)
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteRecord = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) =>
    z
      .object({
        table: z.enum(["quote_requests", "contact_messages", "products"]),
        id: z.string().uuid(),
      })
      .parse(i),
  )
  .middleware([requireSupabaseAuth])
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from(data.table)
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
