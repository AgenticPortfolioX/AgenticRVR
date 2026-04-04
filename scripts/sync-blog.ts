import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'public', 'blog');
const dataFile = path.join(process.cwd(), 'src', 'data', 'blog-posts.json');

// Ensure parent directories exist
if (!fs.existsSync(path.dirname(dataFile))) {
  fs.mkdirSync(path.dirname(dataFile), { recursive: true });
}

function parseYAML(content: string) {
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return {};
  const res: any = {};
  match[1].split('\n').filter(l => l.includes(':')).forEach(l => {
    const [k, ...v] = l.split(':');
    if (k && v.length > 0) {
      res[k.trim()] = v.join(':').trim().replace(/^["'](.*)["']$/, '$1');
    }
  });
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
    
    return { 
      id: f, 
      ...meta, 
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
