import Image from "next/image";
import type { ReactNode } from "react";
import { Paragraph } from "../typography/paragraph";

export type ResumeContact = {
  label: string;
  value: string;
  href: string;
};

export type ResumeHeaderProps = {
  name: string;
  role: string;
  summary: ReactNode;
  contacts: ResumeContact[];
  imageSrc?: string;
  caption?: string;
};

export function ResumeHeader({
  name,
  role,
  summary,
  contacts,
  imageSrc,
  caption,
}: ResumeHeaderProps) {
  return (
    <header
      data-resume-header
      className="grid grid-cols-[64px_minmax(0,1fr)] items-start gap-x-6 gap-y-4 md:grid-cols-[84px_minmax(0,1fr)_max-content] print:break-inside-avoid print:grid-cols-[84px_minmax(0,1fr)_max-content]"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`${name} 프로필 사진`}
          width={84}
          height={84}
          unoptimized
          className="size-16 rounded-full object-cover md:size-21 print:size-21"
        />
      ) : (
        <div
          role="img"
          aria-label={`${name} 프로필 사진 자리`}
          className="flex size-16 items-center justify-center overflow-hidden rounded-full bg-[#dedede] text-[#a3a3a3] md:size-21 print:size-21"
        >
          <svg viewBox="0 0 84 84" className="size-full" aria-hidden="true">
            <circle cx="42" cy="31" r="14" fill="currentColor" />
            <path d="M15 84V73a27 27 0 0 1 54 0v11z" fill="currentColor" />
          </svg>
        </div>
      )}

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <Paragraph.Text
            typography="t3"
            fontWeight="semibold"
            className="text-zinc-900"
          >
            {name}
          </Paragraph.Text>
          <Paragraph.Text typography="t6" className="text-zinc-800">
            {role}
          </Paragraph.Text>
          {caption && (
            <Paragraph.Text typography="t7" className="text-zinc-500">
              {caption}
            </Paragraph.Text>
          )}
        </div>
        <Paragraph
          typography="t7"
          className="mt-2.5 leading-[1.5] whitespace-pre-line text-zinc-700"
        >
          {summary}
        </Paragraph>
      </div>

      <dl className="col-start-2 min-w-0 text-[10px]/[15px] text-black md:col-auto md:max-w-[180px] print:col-auto print:max-w-[180px]">
        {contacts.map(({ label, value, href }) => {
          const isExternal = /^https?:\/\//.test(href);
          return (
            <div key={`${label}-${href}`} className="flex items-baseline gap-1">
              <dt className="shrink-0">
                <Paragraph.Text fontWeight="semibold">{label}.</Paragraph.Text>
              </dt>
              <dd className="min-w-0">
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 ${isExternal ? "underline" : ""}`}
                >
                  <Paragraph.Text>{value}</Paragraph.Text>
                </a>
              </dd>
            </div>
          );
        })}
      </dl>
    </header>
  );
}
