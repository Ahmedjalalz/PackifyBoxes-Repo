import { supabase } from "@/integrations/supabase/client";

export const ADMIN_RESET_PASSWORD_PATH = "/admin/reset-password";

export async function getAdminSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session ?? null;
}

export async function isAdminAuthed() {
  return (await getAdminSession()) !== null;
}

export async function signInAdmin(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });
}

export async function sendAdminPasswordReset(email: string) {
  const redirectTo = `${window.location.origin}${ADMIN_RESET_PASSWORD_PATH}`;
  return supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
    redirectTo,
  });
}

export async function exchangeAdminRecoveryCode(code: string) {
  return supabase.auth.exchangeCodeForSession(code);
}

export async function updateAdminPassword(password: string) {
  return supabase.auth.updateUser({ password });
}

export async function signOutAdmin() {
  return supabase.auth.signOut();
}
