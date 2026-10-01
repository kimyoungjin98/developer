import { cn } from "../tailwind-util";
import { Paragraph } from "../typography/paragraph";

export type ResumeEducationItem = {
  draft?: boolean;
  name: string;
  major: string;
  period: string;
  description?: string;
};

export type ResumeEducationProps = {
  /** true이면 학력 섹션 전체를 화면과 인쇄에서 숨깁니다. */
  draft?: boolean;
  title?: string;
  items: ResumeEducationItem[];
  className?: string;
};

export function ResumeEducation({
  draft,
  title = "Education",
  items,
  className,
}: ResumeEducationProps) {
  if (draft) return null;

  const visibleItems = items.filter(item => !item.draft);
  if (visibleItems.length === 0) return null;

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
      <div className="mt-8 space-y-8">
        {visibleItems.map((item) => (
          <div
            data-a4-atomic
            key={`${item.name}-${item.period}`}
            className="flex flex-col gap-1 print:break-inside-avoid"
          >
            <div className="flex flex-wrap items-center gap-3 print:break-after-avoid">
              <h3 className="print:break-after-avoid">
                <Paragraph.Text typography="t4" fontWeight="semibold">
                  {item.name}
                </Paragraph.Text>
              </h3>
              <Paragraph.Text typography="t6" className="text-gray-700">
                {item.period}
              </Paragraph.Text>
            </div>
            <Paragraph typography="st8" className="text-gray-700">
              {[item.major, item.description].filter(Boolean).join(" · ")}
            </Paragraph>
          </div>
        ))}
      </div>
    </section>
  );
}
