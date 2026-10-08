import { cn } from "../../tailwind-util";
import { renderBoldText } from "../bold-text";
import {
  ParagraphColor,
  ParagraphFontWeight,
  ParagraphTypography,
} from "../paragraph.styles";
import type { ParagraphTextProps } from "./paragraph-text.types";

export function ParagraphText({
  children,
  className,
  color,
  fontWeight,
  typography,
  id,
  style,
  ...rest
}: ParagraphTextProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      id={id}
      className={cn(
        typography && ParagraphTypography[typography],
        fontWeight && ParagraphFontWeight[fontWeight],
        color && ParagraphColor[color],
        className,
      )}
      style={style}
      {...rest}
    >
      {renderBoldText(children)}
    </span>
  );
}
