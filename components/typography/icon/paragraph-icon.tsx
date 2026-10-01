import { cn } from "../../tailwind-util";
import { Icon } from "../../icon";
import { ParagraphTypography } from "../paragraph.styles";
import type { ParagraphIconProps } from "./paragraph-icon.types";

export function ParagraphIcon({
  name,
  id,
  style,
  className,
  typography,
}: ParagraphIconProps) {
  return (
    <span
      id={id}
      className={cn(
        "inline-flex size-[1em] align-text-bottom",
        typography && ParagraphTypography[typography],
        className,
      )}
      style={style}
    >
      <Icon name={name} className="size-full" />
    </span>
  );
}
