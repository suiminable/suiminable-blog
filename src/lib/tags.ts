export const TAGS = {
  tech: { label: "技術" },
  diary: { label: "日記" },
} as const;

export type TagCode = keyof typeof TAGS;

export function getTagLabel(tag: TagCode) {
  return TAGS[tag].label;
}

export function isTagCode(value: string): value is TagCode {
  return value in TAGS;
}
