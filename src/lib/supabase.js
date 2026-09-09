const config = window.MENU_CONFIG || {};
const enabled = Boolean(window.supabase && config.supabaseUrl && config.supabaseAnonKey);
export const db = enabled ? window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey) : null;

export async function currentSession() {
  if (!db) return { user: null, error: null };
  const { data, error } = await db.auth.getSession();
  return { user: data?.session?.user || null, error };
}

export async function tenantForUser(userId) {
  if (!db || !userId) return { tenantId: null, error: null };
  const { data, error } = await db.from('tenant_members').select('tenant_id').eq('user_id', userId).limit(1).maybeSingle();
  return { tenantId: data?.tenant_id || null, error };
}

export async function scopedSelect(table, columns='*', limit=50) {
  const session = await currentSession();
  if (!session.user) return { data: [], error: null, permissionDenied: false, tenantId: null };
  const tenant = await tenantForUser(session.user.id);
  if (tenant.error) return { data: [], error: tenant.error, permissionDenied: false, tenantId: null };
  if (!tenant.tenantId) return { data: [], error: new Error('No tenant membership'), permissionDenied: true, tenantId: null };
  const result = await db.from(table).select(columns).eq('tenant_id', tenant.tenantId).order('created_at', { ascending: false }).limit(limit);
  return { data: result.data || [], error: result.error, permissionDenied: result.error?.code === '42501', tenantId: tenant.tenantId };
}

export async function insertScoped(table, row) {
  const session = await currentSession();
  if (!session.user) return { data: null, error: new Error('Authentication required'), permissionDenied: false };
  const tenant = await tenantForUser(session.user.id);
  if (tenant.error) return { data: null, error: tenant.error, permissionDenied: false };
  if (!tenant.tenantId) return { data: null, error: new Error('No tenant membership'), permissionDenied: true };
  const result = await db.from(table).insert({ ...row, tenant_id: tenant.tenantId }).select().single();
  return { data: result.data, error: result.error, permissionDenied: result.error?.code === '42501', tenantId: tenant.tenantId };
}

export async function updateScoped(table, id, row) {
  const session = await currentSession();
  if (!session.user) return { data: null, error: new Error('Authentication required'), permissionDenied: false };
  const tenant = await tenantForUser(session.user.id);
  if (tenant.error || !tenant.tenantId) return { data: null, error: tenant.error || new Error('No tenant membership'), permissionDenied: !tenant.tenantId };
  const result = await db.from(table).update(row).eq('id', id).eq('tenant_id', tenant.tenantId).select().single();
  return { data: result.data, error: result.error, permissionDenied: result.error?.code === '42501', tenantId: tenant.tenantId };
}
