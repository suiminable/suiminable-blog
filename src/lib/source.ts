import { about, blog, social } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";

export const blogSource = loader({
  baseUrl: "/blog",
  source: blog.toFumadocsSource(),
  plugins: [],
});

export const aboutSource = loader({
  baseUrl: "/about",
  source: about.toFumadocsSource(),
  plugins: [],
});

export const socialSource = loader({
  baseUrl: "/social",
  source: social.toFumadocsSource(),
  plugins: [],
});
