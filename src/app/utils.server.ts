import glob from "fast-glob";
import * as path from "path";

type Post = {
  slug: string;
  date: string;
  title: string;
  description: string;
  image: string;
};

async function importPost(filename: string) {
  const { metadata = {} } = await import(`./blog/${filename}`);

  return {
    slug: "/blog/" + filename.replace("/page.mdx", ""),
    ...metadata
  } as Post;
}

export async function getPosts() {
  const filenames = await glob(["*/page.mdx"], {
    cwd: path.join(process.cwd(), "src/app/blog")
  });

  const posts = await Promise.all(filenames.map(importPost));

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
