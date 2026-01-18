import { createFromSource } from "fumadocs-core/search/server";
import { blogSource } from "@/lib/source";

export const revalidate = false;

export const { staticGET: GET } = createFromSource(blogSource, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: "japanese",
});
