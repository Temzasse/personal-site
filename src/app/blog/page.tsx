import Link from "next/link";
import { getPosts } from "../utils.server";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
