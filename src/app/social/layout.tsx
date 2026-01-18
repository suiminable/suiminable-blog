import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { socialSource } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/social">) {
  return (
    <>
      <HomeLayout {...baseOptions()}></HomeLayout>
      <DocsLayout
        tree={socialSource.getPageTree()}
        {...baseOptions()}
        sidebar={{ enabled: false }}
        nav={{ enabled: false }}
      >
        {children}
      </DocsLayout>
    </>
  );
}
