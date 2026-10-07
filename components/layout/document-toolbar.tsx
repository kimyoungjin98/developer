import Link from "next/link";
import { PrintButton } from "./print-button";

export function DocumentToolbar({ current }: { current: "resume" | "career" }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3 print:hidden">
      <nav aria-label="문서 선택" className="flex items-center gap-1 rounded-lg bg-white p-1 text-sm">
        {[
          { id: "resume", href: "/", label: "이력서" },
          { id: "career", href: "/career", label: "경력기술서" },
        ].map(item => (
          <Link
            key={item.id}
            href={item.href}
            aria-current={current === item.id ? "page" : undefined}
            className={`inline-flex min-h-10 items-center rounded-md px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 ${current === item.id ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <PrintButton />
    </div>
  );
}
