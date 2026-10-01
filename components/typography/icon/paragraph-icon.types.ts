import type { IconProps } from "../../icon";
import type { ParagraphTypography } from "../paragraph.types";

export type ParagraphIconProps = {
  name: IconProps["name"];
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  typography?: ParagraphTypography;
};
