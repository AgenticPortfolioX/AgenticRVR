import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'public', 'blog');
const dataFile = path.join(process.cwd(), 'src', 'data', 'blog-posts.json');

// Ensure parent directories exist
if (!fs.existsSync(path.dirname(dataFile))) {
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
}

function parseYAML(content: string) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  
  const res: any = {};
  const lines = match[1].split(/\r?\n/);
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const k = line.substring(0, colonIndex).trim();
    let v = line.substring(colonIndex + 1).trim();
    
    // Remove surrounding quotes
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.substring(1, v.length - 1);
    }
    
    const key = k.toLowerCase();
    // Handle tags as array
    if (key === 'tags') {
      res[key] = v.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    } else {
      res[key] = v;
      // Also keep original key for backward compatibility if needed, 
      // but the UI likely expects specific keys. 
      // Based on the previous output, the keys were Title, Date, Description.
      res[k] = v; 
    }
  }
  return res;
}

async function sync() {
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
    fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
    return;
  }

  const folders = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());
  const posts = folders.map(f => {
    const filePath = path.join(blogDir, f, 'final.md');
    if (!fs.existsSync(filePath)) return null;

    const content = fs.readFileSync(filePath, 'utf8');
    const meta = parseYAML(content);
    
    // Map meta_description or description to excerpt
    const excerpt = meta.meta_description || meta.description || "";
    
    return { 
      id: f, 
      title: meta.title || "",
      date: meta.date || "",
      description: meta.description || "",
      category: meta.category || "",
      author: meta.author || "",
      tags: meta.tags || [],
      excerpt,
      image: `/blog/${f}/feature_image.png`, 
      path: `/blog/${f}/final.md`, 
      schema: `/blog/${f}/sdira_compliance_schema.json` 
    };
  }).filter(p => p !== null);

  posts.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
  console.log(`Synced ${posts.length} blog posts to ${dataFile}`);
}

sync().catch(console.error);
