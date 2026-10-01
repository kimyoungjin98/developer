"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-500 text-white px-4 text-sm font-medium transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 8V3h10v5M7 17H4V9h16v8h-3M7 14h10v7H7z" />
        <path d="M17 11h.01" />
      </svg>
      인쇄하기
    </button>
  );
}
