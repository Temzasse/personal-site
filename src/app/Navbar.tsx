"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { styled } from "@/styled";

export function Navbar() {
  const segment = useSelectedLayoutSegment();

  return (
    <Nav>
      <NavItems>
        <NavItem>
          <NavLink href="/" isActive={segment === null}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog" isActive={segment === "blog"}>
            Blog
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://twitter.com/teemu_taskula"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://github.com/Temzasse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </NavLink>
        </NavItem>
      </NavItems>
    </Nav>
  );
}

const Nav = styled("nav", {
  base: {
    position: "fixed",
    zIndex: 1,
    bottom: "calc(var(--env-safe-area-inset-bottom, 0px) + 1rem)",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

const NavItems = styled("ul", {
  base: {
    display: "flex",
    backgroundColor: "$primary.6/50",
    borderRadius: "$full",
    overflow: "hidden",
    backdropFilter: "blur(20px)",
    boxShadow: "inset 0px 1px 2px rgba(255, 255, 255, 0.1)",
  },
});

const NavItem = styled("li", {
  base: {
    listStyle: "none",
  },
});

const NavLink = styled(Link, {
  base: {
    position: "relative",
    display: "block",
    padding: "$md",
    hoverHighlight: 1,

    "&:first-child": {
      paddingLeft: "$lg",
    },
    "&:last-child": {
      paddingRight: "$lg",
    },
  },
  variants: {
    isActive: {
      true: {
        textDecoration: "underline",
        color: "$primary.1",
      },
    },
  },
});
