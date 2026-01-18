import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { aboutSource } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/about">) {
  return (
    <>
      <HomeLayout {...baseOptions()}></HomeLayout>
      <DocsLayout
        tree={aboutSource.getPageTree()}
        {...baseOptions()}
        sidebar={{ enabled: false }}
        nav={{ enabled: false }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
