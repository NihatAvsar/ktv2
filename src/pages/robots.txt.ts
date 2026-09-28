import { site } from '../config';

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site.siteUrl).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
