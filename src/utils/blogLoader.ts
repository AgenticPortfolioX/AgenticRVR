export interface BlogPostMeta {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface BlogPost {
  id: string; // The slug (folder name)
  meta: BlogPostMeta;
  content: string;
  resolvedImage: string;
}

// Ensure the paths are relative to THIS file (`src/utils/blogLoader.ts`)
const metaFiles = import.meta.glob<{ default: BlogPostMeta }>('../content/blog/*/*.json', { eager: true });
const contentFiles = import.meta.glob<{ default: string }>('../content/blog/*/*.md', { query: '?raw', eager: true });
const imageFiles = import.meta.glob<{ default: string }>('../content/blog/*/*.{jpg,jpeg,png,webp,gif}', { query: '?url', eager: true });

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in metaFiles) {
    const meta = metaFiles[path].default;
    // Extract folder name as slug (e.g. "../content/blog/2026-03-24/meta.json" -> "2026-03-24")
    const match = path.match(/\/blog\/([^/]+)\/meta\.json$/);
    if (!match) continue;
    
    const slug = match[1];
    
    // Find matching content
    const contentPath = `../content/blog/${slug}/content.md`;
    const content = contentFiles[contentPath]?.default || '';

    // Find matching image url
    const imageName = meta.image || '';
    const imagePath = `../content/blog/${slug}/${imageName}`;
    const resolvedImage = imageFiles[imagePath]?.default || '';

    posts.push({
      id: slug,
      meta,
      content,
      resolvedImage
    });
  }

  // Sort by date (descending)
  return posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find(post => post.id === slug);
}
