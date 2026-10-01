import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../tailwind-util";

export type A4LayoutProps = ComponentPropsWithoutRef<"main"> & {
  /** 화면에만 표시되는 문서 도구 영역이에요. */
  toolbar?: ReactNode;
};

export function A4Layout({
  children,
  toolbar,
  className,
  ...props
}: A4LayoutProps) {
  return (
    <main
      data-a4-layout
      className={cn(
        "min-h-screen bg-[#f3f3f3] px-4 pt-8 pb-12 text-[#18181b]",
        "[font-family:var(--font-geist-sans),Arial,'Noto_Sans_KR',sans-serif]",
        "print:min-h-0 print:bg-white print:p-0",
        className,
      )}
      {...props}
    >
      {toolbar && (
        <div
          data-a4-toolbar
          className="mx-auto mb-6 flex w-[210mm] max-w-full items-center justify-between gap-4 print:hidden"
        >
          {toolbar}
        </div>
      )}
      <div
        data-a4-pages
        className="grid grid-cols-1 justify-items-center gap-6 print:block"
      >
        {children}
      </div>
    </main>
  );
}

export type A4PageProps = ComponentPropsWithoutRef<"article"> & {
  /** 긴 문서는 내용을 이어 배치하고 인쇄 시 A4 크기로 자동 분할합니다. */
  continuous?: boolean;
};

/** 여러 장은 A4Layout 안에 A4Page를 나란히 넣어 주세요. */
export function A4Page({ children, className, continuous = false, ...props }: A4PageProps) {
  return (
    <article
      data-a4-page
      className={cn(
        "@container box-border min-h-[297mm] w-[210mm] max-w-full bg-white p-10 text-[#18181b] wrap-anywhere",
        "[@media_screen_and_(max-width:825px)]:min-h-auto",
        "[@media_screen_and_(max-width:825px)]:aspect-[210/297]",
        "[@media_screen_and_(max-width:825px)]:p-[clamp(24px,6vw,68px)]",
        "print:max-w-none print:break-after-page print:[box-shadow:none] print:last:break-after-auto",
        "print:[print-color-adjust:exact] print:[-webkit-print-color-adjust:exact]",
        "print:[&_h1]:break-after-avoid print:[&_h2]:break-after-avoid print:[&_h3]:break-after-avoid",
        continuous && "[@media_screen_and_(max-width:825px)]:aspect-auto print:block print:min-h-0 print:w-auto print:p-0 print:break-after-auto print:[page:resume]",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
