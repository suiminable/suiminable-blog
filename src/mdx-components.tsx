import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import AvatarCard from "@/components/avatar-card";
import Image from "@/components/image";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <Image {...(props as any)} />,
    AvatarCard,
    ...components,
  };
}
