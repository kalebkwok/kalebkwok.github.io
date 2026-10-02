export const site = {
  name: 'Kaleb Guo',
  title: 'Kaleb Guo',
  description:
    'Kaleb Guo writes about LLM serving systems: schedulers, KV caches, and the parallelism underneath.',
  tagline: 'I work on LLM serving systems: schedulers, KV caches, and the parallelism underneath.',
  email: 'kalebguo@gmail.com',
  links: {
    github: 'https://github.com/kalebkwok',
    linkedin: 'https://www.linkedin.com/in/kaleb-kwok/',
  },
};

// Projects are hidden for now. To bring them back: set this to true and
// rename src/pages/_projects.astro to src/pages/projects.astro.
export const features = { projects: false };

export const nav = [
  { href: '/writing/', label: 'Writing' },
  ...(features.projects ? [{ href: '/projects/', label: 'Projects' }] : []),
  { href: '/about/', label: 'About' },
];
