/** Prefix root-relative public paths for GitHub Pages (`import.meta.env.BASE_URL`). */
export function publicUrl(path: string) {
  if (!path || /^https?:\/\//i.test(path)) return path
  const base = import.meta.env.BASE_URL
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}
