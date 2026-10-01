import type { ParagraphProps } from "./paragraph.types";

export const ParagraphTextAlign: Record<
  NonNullable<ParagraphProps["textAlign"]>,
  string
> = {
  inherit: "[text-align:inherit]",
  initial: "[text-align:initial]",
  revert: "[text-align:revert]",
  "revert-layer": "[text-align:revert-layer]",
  unset: "[text-align:unset]",
  center: "text-center",
  end: "text-end",
  justify: "text-justify",
  left: "text-left",
  "match-parent": "[text-align:match-parent]",
  right: "text-right",
  start: "text-start",
};

export const ParagraphTypography: Record<
  NonNullable<ParagraphProps["typography"]>,
  string
> = {
  t1: "text-[2rem]/[2.5rem]",
  t2: "text-[1.5rem]/[2rem]",
  t3: "text-[1.25rem]/[1.75rem]",
  t4: "text-[1rem]/[1.5rem]",
  t5: "text-[0.875rem]/[1.25rem]",
  t6: "text-[0.75rem]/[1rem]",
  t7: "text-[0.625rem]/[0.875rem]",

  st1: "text-[2.5rem]/[3rem]",
  st2: "text-[2.25rem]/[2.75rem]",
  st3: "text-[2rem]/[2.5rem]",
  st4: "text-[1.75rem]/[2.25rem]",
  st5: "text-[1.5rem]/[2rem]",
  st6: "text-[1.25rem]/[1.75rem]",
  st7: "text-[1rem]/[1.5rem]",
  st8: "text-[0.875rem]/[1.25rem]",
  st9: "text-[0.75rem]/[1rem]",
  st10: "text-[0.625rem]/[0.875rem]",
  st11: "text-[0.5rem]/[0.75rem]",
  st12: "text-[0.375rem]/[0.5rem]",
  st13: "text-[0.25rem]/[0.375rem]",
};

export const ParagraphFontWeight: Record<
  NonNullable<ParagraphProps["fontWeight"]>,
  string
> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const ParagraphDisplay: Record<
  NonNullable<ParagraphProps["display"]>,
  string
> = {
  block: "block",
  inline: "inline",
};

export const ParagraphColor: Record<
  NonNullable<ParagraphProps["color"]>,
  string
> = {
  primary: "text-(color:--primary)",
  destructive: "text-(color:--destructive)",
  info: "text-(color:--info)",
  neutral: "text-(color:--neutral)",
  secondary: "text-(color:--secondary)",
  success: "text-(color:--success)",
  warning: "text-(color:--warning)",
  white: "text-(color:--white)",
};
