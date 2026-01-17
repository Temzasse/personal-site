"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { styled } from "#styled/jsx";
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
              color={segment === null ? "primary1" : "text"}
            />
            <span>Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/blog" isActive={segment === "blog"}>
            <Icon
              name="pen"
              size={24}
              color={segment === "blog" ? "primary1" : "text"}
            />
            <span>Blog</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://bsky.app/profile/taskuteemu.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="bluesky" size={24} color="text" />
            <span>Bluesky</span>
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
    borderRadius: "$full",
    overflow: "hidden",
    backdropFilter: "blur(20px)",
    boxShadow: "inset 0px 1px 2px rgba(255, 255, 255, 0.1)",
    backgroundColor: "$primary6/70",
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
    $hoverHighlight: true,

    "&:first-child": {
      paddingLeft: "$lg",
    },
    "&:last-child": {
      paddingRight: "$lg",
    },

    smDown: {
      "& span": {
        $visuallyHidden: true,
      },
    },
  },
  variants: {
    isActive: {
      true: {
        textDecoration: "underline",
        color: "$primary1",
      },
    },
  },
});
