import { createTokenizer } from "@orama/tokenizers/japanese";
import { createFromSource } from "fumadocs-core/search/server";
import { blogSource } from "@/lib/source";

export const revalidate = false;

export const { staticGET: GET } = createFromSource(blogSource, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  localeMap: {
    jp: {
      language: "japanese",
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
    en: { language: "english" },
  },
});
