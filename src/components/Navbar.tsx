"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { styled } from "@/styled";
import { Icon } from "./Icon";

export function Navbar() {
  const segment = useSelectedLayoutSegment();

  return (
    <Nav>
      <NavItems>
        <NavItem>
          <NavLink href="/" isActive={segment === null}>
            <Icon
              name="home"
              size={24}
              color={segment === null ? "primary.1" : "text"}
            />
            <span>Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog" isActive={segment === "blog"}>
            <Icon
              name="pen"
              size={24}
              color={segment === "blog" ? "primary.1" : "text"}
            />
            <span>Blog</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://twitter.com/teemu_taskula"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="twitter" size={24} color="text" />
            <span>Twitter</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://github.com/Temzasse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={24} color="text" />
            <span>Github</span>
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
    backgroundColor: "$primary.6/70",
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
    display: "flex",
    alignItems: "center",
    gap: "$sm",
    padding: "$md",
    hoverHighlight: 1,

    "&:first-child": {
      paddingLeft: "$lg",
    },
    "&:last-child": {
      paddingRight: "$lg",
    },

    smDown: {
      "& span": {
        visuallyHidden: 1,
      },
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
