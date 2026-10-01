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
      data-a4-block
      className="grid grid-cols-[96px_minmax(0,1fr)] items-start gap-x-6 gap-y-4 text-black @min-[640px]:grid-cols-[112px_minmax(0,1fr)_max-content] print:break-inside-avoid print:grid-cols-[112px_minmax(0,1fr)_max-content]"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          unoptimized
          className="size-24 rounded-full object-cover object-center aspect-square @min-[640px]:size-28 print:size-28"
        />
      ) : (
        <div
          role="img"
          aria-label={`${name} 프로필 사진 자리`}
          className="flex size-24 items-center justify-center overflow-hidden rounded-full bg-[#dedede] text-[#a3a3a3] @min-[640px]:size-28 print:size-28"
        >
          <svg viewBox="0 0 84 84" className="size-full" aria-hidden="true">
            <circle cx="42" cy="31" r="14" fill="currentColor" />
            <path d="M15 84V73a27 27 0 0 1 54 0v11z" fill="currentColor" />
          </svg>
        </div>
      )}

      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Paragraph.Text typography="t3" fontWeight="medium">
            {name}
          </Paragraph.Text>
          <Paragraph.Text typography="st9" className="text-gray-700">
            {role}
          </Paragraph.Text>
          {caption && (
            <Paragraph.Text typography="st9" className="text-zinc-400">
              {caption}
            </Paragraph.Text>
          )}
        </div>
        <Paragraph
          typography="st9"
          className="whitespace-pre-line text-gray-700"
        >
          {summary}
        </Paragraph>
      </div>

      <dl className="col-start-2 min-w-0 @min-[640px]:col-auto @min-[640px]:max-w-[220px] print:col-auto print:max-w-[220px]">
        {contacts.map(({ label, value, href }) => {
          const isExternal = /^https?:\/\//.test(href);
          return (
            <div key={`${label}-${href}`} className="flex items-baseline gap-1">
              <dt className="shrink-0">
                <Paragraph.Text typography="st9" fontWeight="semibold">
                  {label}.
                </Paragraph.Text>
              </dt>
              <dd className="min-w-0">
                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`text-gray-700 decoration-zinc-300 underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 ${isExternal ? "underline" : ""}`}
                >
                  <Paragraph.Text typography="st9">{value}</Paragraph.Text>
                </a>
              </dd>
            </div>
          );
        })}
      </dl>
    </header>
  );
}
