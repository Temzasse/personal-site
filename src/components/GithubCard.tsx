import { Stack, styled } from "@/styled";
import { Icon } from "./Icon";
import { Text } from "./Text";

type Props = {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  libraryName: string;
  titleLevel?: "h2" | "h3";
};

export function GithubCard({
  title,
  titleLevel = "h2",
  description,
  image,
  repoUrl,
  libraryName,
}: Props) {
  return (
    <Container href={repoUrl} target="_blank" rel="noopener noreferrer">
      <Body>
        <Image src={image} alt="" style={{ objectFit: "cover" }} />

        <Content>
          <Stack direction="column" gap="$sm">
            <Text variant="heading.3" as={titleLevel} className="no-decoration">
              {title}
            </Text>

            <Text variant="bodySmall" color="text.muted">
              {description}
            </Text>
          </Stack>

          <LibName>
            <Icon name="github" size={16} color="text.muted" />
            <span>{libraryName}</span>
          </LibName>
        </Content>
      </Body>
    </Container>
  );
}

const Container = styled("a", {
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
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "$lg",
    padding: "$lg",
    flex: 1,
  },
});

const Image = styled("img", {
  base: {
    position: "relative",
    height: "150px",
    objectFit: "cover",
  },
});

const LibName = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "$sm",
    backgroundColor: "$neutral.1",
    padding: "$sm",
    borderRadius: "$sm",
    textStyle: "$code",
  },
});
