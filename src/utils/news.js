import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const NEWS_DIR = join(process.cwd(), 'src/content/news');

const load = () => {
  const files = fs.readdirSync(NEWS_DIR);

  const news = Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace('.md', '');
        return await findNewsBySlug(slug);
      }),
  );

  return news;
};

let _news;

/** */
export const fetchNews = async () => {
  _news = _news || load();

  return await _news;
};

/** */
export const findLatestNews = async ({ count } = {}) => {
  const _count = count || 4;
  const news = await fetchNews();

  return news ? news.slice(_count * -1) : [];
};

/** */
export const findNewsBySlug = async (slug) => {
  if (!slug) return null;

  try {
    const readFile = fs.readFileSync(join(NEWS_DIR, `${slug}.md`), 'utf-8');
    const { data: frontmatter, content } = matter(readFile);
    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (e) {}

  return null;
};

/** */
export const findNewsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];

  const news = await fetchNews();

  return ids.reduce(function (r, id) {
    news.some(function (item) {
      return id === item.id && r.push(item);
    });
    return r;
  }, []);
};
