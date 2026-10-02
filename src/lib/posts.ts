import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Published posts, newest first. Drafts are included only in `npm run dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', (p: Post) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postUrl(post: Post) {
  return `/writing/${post.id}/`;
}

export function formatDate(d: Date, style: 'short' | 'long' = 'short') {
  if (style === 'long') {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
  }
  return d.toISOString().slice(0, 10);
}

export function readingMinutes(body = '') {
  const text = body.replace(/```[\s\S]*?```/g, ' ');
  const cjk = (text.match(/[\u4e00-\u9fff]/g) ?? []).length;
  const words = text.replace(/[\u4e00-\u9fff]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230 + cjk / 400));
}

export function tagSlug(tag: string) {
  return tag.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/(^-|-$)/g, '');
}
