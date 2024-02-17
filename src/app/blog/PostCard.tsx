import { styled } from "@/styled";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
};

export function PostCard({ title, image, slug }: Props) {
  return (
    <Container href={slug}>
      <Body>
        <ImageWrapper>
          <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
        </ImageWrapper>
        <Content>
          <h2 className="no-decoration">{title}</h2>
        </Content>
      </Body>
    </Container>
  );
}

const Container = styled(Link, {
  base: {
    borderRadius: "$md",
    overflow: "hidden",
    boxShadow: "0px 0px 0px 1px rgba(150, 150, 150, 0.1)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease-in-out",
    _hover: {
      transform: "scale(1.01)",
    },
  },
});

const Body = styled("div", {
  base: {
    flex: 1,
    borderBottom: "1px solid",
    borderGlow: "$primary.1",
    display: "flex",
    flexDirection: "column",
  },
});

const Content = styled("div", {
  base: {
    display: "flex",
    padding: "$lg",
    flex: 1,
  },
});

const ImageWrapper = styled("div", {
  base: {
    position: "relative",
    height: "220px",
  },
});
