import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import type { ComponentProps } from "react";

type ImageProps = ComponentProps<"img">;

type ImageZoomProps = ComponentProps<typeof ImageZoom> & {
  zoomInProps?: ComponentProps<"img">;
};

const baseClassName = "rounded-xl";
const baseStyle: ImageProps["style"] = {
  width: "80%",
  height: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

function mergeClassName(base: string, extra?: string) {
  return [base, extra].filter(Boolean).join(" ");
}

function mergeStyle(base: ImageProps["style"], extra?: ImageProps["style"]) {
  return {
    ...base,
    ...extra,
  };
}

export default function Image({
  zoomInProps,
  className,
  style,
  ...props
}: ImageZoomProps) {
  const mergedClassName = mergeClassName(baseClassName, className);
  const mergedStyle = mergeStyle(baseStyle, style);

  return (
    <ImageZoom
      {...props}
      className={mergedClassName}
      style={mergedStyle}
      zoomInProps={{ className: mergedClassName, ...zoomInProps }}
    />
  );
}
