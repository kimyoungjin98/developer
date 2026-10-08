import { cn } from "../tailwind-util";
import { renderBoldText } from "../typography/bold-text";
import { Paragraph } from "../typography/paragraph";

export type ResumeActivity = {
  draft?: boolean;
  title: string;
  period?: string;
  description?: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export type ResumeActivityGroup = {
  draft?: boolean;
  title: string;
  items: ResumeActivity[];
};

export type ResumeActivitiesProps = {
  /** true이면 활동 섹션 전체를 화면과 인쇄에서 숨깁니다. */
  draft?: boolean;
  title?: string;
  description?: string;
  groups: ResumeActivityGroup[];
  sideGroups?: ResumeActivityGroup[];
  className?: string;
};

function visibleActivityGroups(groups: ResumeActivityGroup[]) {
  return groups
    .filter(group => !group.draft)
    .map(group => ({ ...group, items: group.items.filter(item => !item.draft) }))
    .filter(group => group.items.length > 0);
}

function ActivityGroups({ groups }: { groups: ResumeActivityGroup[] }) {
  return (
    <div className="min-w-0 space-y-8">
      {groups.map((group, groupIndex) => (
        <section key={`${group.title}-${groupIndex}`} aria-label={group.title}>
          <h3 className="print:break-after-avoid">
            <Paragraph.Text typography="t3" fontWeight="semibold">
              {group.title}
            </Paragraph.Text>
          </h3>
          <div className="mt-8 space-y-8">
            {group.items.map((item, itemIndex) => (
              <div
                key={`${item.title}-${itemIndex}`}
                className="flex flex-col gap-2 print:break-inside-avoid"
              >
                <div
                  data-a4-atomic
                  data-a4-keep-with-next={!!(item.description || item.links?.length || item.bullets?.length) || undefined}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 print:break-after-avoid"
                >
                  <Paragraph.Text typography="t4" fontWeight="semibold">
                    {item.title}
                  </Paragraph.Text>
                  {item.period && (
                    <Paragraph.Text typography="t6" className="text-gray-700">
                      {item.period}
                    </Paragraph.Text>
                  )}
                </div>
                {(item.description || !!item.links?.length) && (
                  <Paragraph typography="st9" className="text-gray-700">
                    {item.description}
                    {item.links?.map(({ label, href }, linkIndex) => (
                      <Paragraph.Text key={`${href}-${linkIndex}`}>
                        {" ("}
                        <a
                          href={href}
                          target={
                            /^https?:\/\//.test(href) ? "_blank" : undefined
                          }
                          rel={
                            /^https?:\/\//.test(href)
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="underline decoration-zinc-300 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                          {renderBoldText(label)}
                        </a>
                        {")"}
                      </Paragraph.Text>
                    ))}
                  </Paragraph>
                )}
                {!!item.bullets?.length && (
                  <ul className="mt-4 list-disc space-y-1 pl-4 text-gray-800">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={`${bulletIndex}-${bullet}`}>
                        <Paragraph typography="st8" fontWeight="regular">
                          {bullet}
                        </Paragraph>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ResumeActivities({
  draft,
  title = "Experience",
  description,
  groups,
  sideGroups,
  className,
}: ResumeActivitiesProps) {
  if (draft) return null;

  const visibleGroups = visibleActivityGroups(groups);
  const visibleSideGroups = visibleActivityGroups(sideGroups ?? []);
  const hasSidebar = visibleSideGroups.length > 0;
  const hasTwoColumns = visibleGroups.length > 0 && hasSidebar;

  if (visibleGroups.length === 0 && !hasSidebar) return null;

  return (
    <section
      data-resume-activities
      data-a4-block
      aria-label={title}
      className={cn("min-w-0 text-black", className)}
    >
      <header
        data-a4-keep-with-next
        className="flex flex-wrap items-center gap-x-3 gap-y-1 print:break-after-avoid"
      >
        <h2>
          <Paragraph.Text typography="t2" fontWeight="bold">
            {title}
          </Paragraph.Text>
        </h2>
        {description && (
          <Paragraph.Text typography="t6" className="text-gray-700">
            {description}
          </Paragraph.Text>
        )}
      </header>
      <div
        data-a4-atomic={hasTwoColumns || undefined}
        className={cn(
          "mt-8 grid min-w-0 gap-x-8 gap-y-8",
          hasTwoColumns &&
            "@min-[640px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] print:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
        )}
      >
        {visibleGroups.length > 0 && <ActivityGroups groups={visibleGroups} />}
        {hasSidebar && (
          <aside
            data-activities-sidebar
            aria-label="추가 경험"
            className="min-w-0"
          >
            <ActivityGroups groups={visibleSideGroups} />
          </aside>
        )}
      </div>
    </section>
  );
}
