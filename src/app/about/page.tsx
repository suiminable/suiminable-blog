import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aboutSource } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default function AboutPage() {
  const page = aboutSource.getPages().find((item) => item.url === "/about");
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(aboutSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateMetadata(): Metadata {
  const page = aboutSource.getPages().find((item) => item.url === "/about");
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
