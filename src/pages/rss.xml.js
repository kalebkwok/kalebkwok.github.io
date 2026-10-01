import rss from '@astrojs/rss';
import { getPosts, postUrl } from '../lib/posts';
import { site } from '../data/site';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${site.title} — Writing`,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
      categories: post.data.tags,
    })),
  });
}
