import type { CSSProperties } from "react";
import { cn } from "../tailwind-util";
import { ParagraphIcon } from "./icon/paragraph-icon";
import {
  ParagraphColor,
  ParagraphDisplay,
  ParagraphFontWeight,
  ParagraphTextAlign,
  ParagraphTypography,
} from "./paragraph.styles";
import type { ParagraphProps } from "./paragraph.types";
import { ParagraphText } from "./text/paragraph-text";

export type { ParagraphIconProps } from "./icon/paragraph-icon.types";

function ParagraphRoot(
  props: ParagraphProps & React.HTMLAttributes<HTMLParagraphElement>,
) {
  const {
    ellipsisAfterLines,
    typography,
    fontWeight,
    color,
    display,
    textAlign,
    children,
    className,
    style,
    ...rest
  } = props;

  const lineCount =
    ellipsisAfterLines === undefined ? 0 : Math.floor(ellipsisAfterLines);
  const isClamped = Number.isFinite(lineCount) && lineCount > 0;

  return (
    <p
      {...rest}
      className={cn(
        typography && ParagraphTypography[typography],
        fontWeight && ParagraphFontWeight[fontWeight],
        color && ParagraphColor[color],
        display && ParagraphDisplay[display],
        textAlign && ParagraphTextAlign[textAlign],
        isClamped && "line-clamp-(--paragraph-lines)",
        className,
      )}
      style={
        isClamped
          ? ({ "--paragraph-lines": lineCount, ...style } as CSSProperties)
          : style
      }
    >
      {children}
    </p>
  );
}

export const Paragraph = Object.assign(ParagraphRoot, {
  Text: ParagraphText,
  Icon: ParagraphIcon,
});
