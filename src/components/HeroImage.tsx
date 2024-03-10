import { styled } from "@/styled";
import Image, { ImageProps } from "next/image";

type Props = ImageProps & {
  credit: string;
};

export function HeroImage({ credit, alt = "", ...rest }: Props) {
  return (
    <Wrapper>
      <Image fill sizes="100vw" alt={alt} {...rest} />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  base: {
    width: "100%",
    height: "400px",
    borderRadius: "$md",
    marginBottom: "$2xl",
    marginTop: "-10vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "$neutral.1",
    boxShadow: "0px 0px 0px 1px rgba(150, 150, 150, 0.08)",
    "& img": {
      objectFit: "cover",
    },
  },
});
