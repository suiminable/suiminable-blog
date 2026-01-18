import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "suiminable.com",
      transparentMode: "none",
    },
    links: [
      {
        text: "About Me",
        url: "/about",
        secondary: false,
      },
      {
        text: "Blog",
        url: "/blog",
        secondary: false,
      },
      {
        text: "Socials",
        url: "/social",
        secondary: false,
      },
    ],
    githubUrl: "https://github.com/suiminable/suiminable-blog",
  };
}
