import { cn } from "../tailwind-util";
import { Paragraph } from "../typography/paragraph";

export type ResumeEducationItem = {
  name: string;
  major: string;
  period: string;
  description?: string;
};

export type ResumeEducationProps = {
  title?: string;
  items: ResumeEducationItem[];
  className?: string;
};

export function ResumeEducation({
  title = "학력",
  items,
  className,
}: ResumeEducationProps) {
  return (
    <section
      data-resume-education
      data-a4-block
      aria-label={title}
      className={cn("min-w-0 text-black", className)}
    >
      <h2 className="print:break-after-avoid">
        <Paragraph.Text typography="t2" fontWeight="bold">
          {title}
        </Paragraph.Text>
      </h2>
      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div
            key={`${item.name}-${item.period}`}
            className="print:break-inside-avoid"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3>
                <Paragraph.Text typography="t4" fontWeight="semibold" className="text-lg/6">
                  {item.name}
                </Paragraph.Text>
              </h3>
              <Paragraph.Text typography="t6">{item.period}</Paragraph.Text>
            </div>
            <Paragraph
              typography="t5"
              className="mt-2 text-[13px] leading-[1.6] text-zinc-700"
            >
              {[item.major, item.description].filter(Boolean).join(" · ")}
            </Paragraph>
          </div>
        ))}
      </div>
    </section>
  );
}
