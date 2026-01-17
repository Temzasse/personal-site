import Image from "next/image";

import { Stack, VisuallyHidden, styled } from "#styled/jsx";
import headshotImg from "../assets/headshot.png";
import { getPosts } from "./utils.server";
import { PostCard } from "#components/PostCard";
import { GithubCard } from "#components/GithubCard";
import { Text } from "#components/Text";

export default async function Home() {
  const posts = await getPosts();

  const githubRepos = [
    {
      title: "React Modal Sheet",
      description:
        "A flexible, animated, and accessible bottom sheet component for React.",
      libraryName: "react-modal-sheet",
      repoUrl: "https://github.com/Temzasse/react-modal-sheet",
      image:
        "https://github.com/Temzasse/react-modal-sheet/raw/main/media/banner.jpg",
    },
    {
      title: "Figmage",
      description:
        "A simple CLI tool to help you generate design tokens as code from your Figma project.",
      libraryName: "figmage",
      repoUrl: "https://github.com/Temzasse/figmage",
      image: "https://github.com/Temzasse/figmage/raw/main/media/figmage.png",
    },
    {
      title: "Stitches Native",
      description:
        "React Native implementation of Stitches (CSS-in-JS library).",
      libraryName: "stitches-native",
      repoUrl: "https://github.com/Temzasse/stitches-native",
      image:
        "https://github.com/Temzasse/stitches-native/raw/main/media/logo.jpg",
    },
  ];

  return (
    <Stack direction="column" gap="$3xl">
      <VisuallyHidden>
        <Text variant="heading1">Teemu Taskula&lsquo;s blog</Text>
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
          <Text variant="body">
            Hi! 👋🏻 My name is Teemu Taskula. I'm a software developer from
            Finland.
          </Text>
          <Text variant="body">
            I enjoy building Web and mobile applications (mainly with React and
            React Native).
          </Text>
        </Stack>
      </Stack>

      <Stack direction="column" gap="$md">
        <Text variant="heading2">Latest posts</Text>

        <RecentPosts>
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard
                title={post.title}
                titleLevel="h3"
                image={post.image}
                slug={post.slug}
              />
            </li>
          ))}
        </RecentPosts>
      </Stack>

      <Stack direction="column" gap="$md">
        <Text variant="heading2">Open source</Text>

        <RecentPosts>
          {githubRepos.map((repo) => (
            <li key={repo.title}>
              <GithubCard
                title={repo.title}
                titleLevel="h3"
                description={repo.description}
                image={repo.image}
                repoUrl={repo.repoUrl}
                libraryName={repo.libraryName}
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
    backgroundColor: "$primary1",
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
