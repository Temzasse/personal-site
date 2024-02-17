import Image from "next/image";
import { Stack, VisuallyHidden, styled } from "@/styled";

import headshotImg from "../assets/headshot.png";
import { getPosts } from "./utils.server";
import { PostCard } from "./blog/PostCard";

export default async function Home() {
  const posts = await getPosts();

  return (
    <Stack direction="column" gap="$xl">
      <VisuallyHidden>
        <h1>Teemu Taskula&lsquo;s blog</h1>
      </VisuallyHidden>

      <Stack direction={{ base: "column", md: "row" }} gap="$md">
        <ImageWrapper>
          <Image
            src={headshotImg}
            width={70}
            height={70}
            alt="Headshot of Teemu Taskula"
          />
        </ImageWrapper>
        <Stack direction="column">
          <p>
            Hi! 👋🏻 My name is Teemu Taskula. I'm a software developer from
            Finland.
          </p>
          <p>
            I enjoy building Web and mobile applications (mainly with React and
            React Native).
          </p>
        </Stack>
      </Stack>

      <Stack direction="column" gap="$md">
        <h2>Latest posts</h2>

        <RecentPosts>
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard
                title={post.title}
                image={post.image}
                slug={post.slug}
              />
            </li>
          ))}
        </RecentPosts>
      </Stack>
    </Stack>
  );
}

const ImageWrapper = styled("div", {
  base: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "$primary.1",
    border: "1px solid transparent",
  },
});

const RecentPosts = styled("ul", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "$lg",
    "& a": {
      height: "100%",
    },
  },
});
