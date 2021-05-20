import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const contentsDirectory = join(process.cwd(), "data", "blog");

export function getContentSlugs() {
  if (fs.existsSync(contentsDirectory)) {
    return fs.readdirSync(contentsDirectory);
  }

  return [];
}

export interface BlogPost {
  title: string;
  slug: string;
  content: string;
  tags: string[];
  date: string;
  summary: string;
}

export function getContents() {
  const slugs = getContentSlugs();
  const contents: BlogPost[] = [];
  slugs.forEach((slug) => {
    const data = getContentBySlug(slug);
    contents.push(data);
  });

  return contents.sort((a, b) => dateSortDesc(a.date, b.date));
}

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export function getContentBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(contentsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  let items: any = {};

  items["slug"] = realSlug;
  items["content"] = content;
  Object.keys(data).forEach((key) => {
    if (!items[key]) {
      items[key] = data[key];
    }
  });

  return items;
}