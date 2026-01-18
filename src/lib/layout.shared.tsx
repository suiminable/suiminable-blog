import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "suiminable's Blog",
      transparentMode: "top",
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
        url: "/socials",
        secondary: false,
      },
    ],
    githubUrl: "https://github.com/suiminable/suiminable-blog",
  };
}
