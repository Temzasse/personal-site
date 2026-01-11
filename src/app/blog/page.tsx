import { Stack, styled } from "@/styled";
import { getPosts } from "../utils.server";
import { PostCard } from "../../components/PostCard";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <Stack direction="column" gap="$2xl">
      <h1>Blog</h1>
      <Posts>
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard title={post.title} image={post.image} slug={post.slug} />
          </li>
        ))}
      </Posts>
    </Stack>
  );
}

const Posts = styled("ul", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "$lg",
    "& a": { height: "100%" },
  },
});
