import { s as supabase } from "./client-CBuvpRjS.mjs";
const ADMIN_RESET_PASSWORD_PATH = "/admin/reset-password";
async function getAdminSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session ?? null;
}
async function signInAdmin(email, password) {
  return supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password
  });
}
async function sendAdminPasswordReset(email) {
  const redirectTo = `${window.location.origin}${ADMIN_RESET_PASSWORD_PATH}`;
  return supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
    redirectTo
  });
}
async function exchangeAdminRecoveryCode(code) {
  return supabase.auth.exchangeCodeForSession(code);
}
async function updateAdminPassword(password) {
  return supabase.auth.updateUser({ password });
}
async function signOutAdmin() {
  return supabase.auth.signOut();
}
export {
  signInAdmin as a,
  signOutAdmin as b,
  exchangeAdminRecoveryCode as e,
  getAdminSession as g,
  sendAdminPasswordReset as s,
  updateAdminPassword as u
};
