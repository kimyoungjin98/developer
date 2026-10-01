import { cn } from "../tailwind-util";
import { Paragraph } from "../typography/paragraph";

export type ResumeActivity = {
  title: string;
  period?: string;
  description?: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export type ResumeActivityGroup = {
  title: string;
  items: ResumeActivity[];
};

export type ResumeActivitiesProps = {
  title?: string;
  description?: string;
  groups: ResumeActivityGroup[];
  sideGroups?: ResumeActivityGroup[];
  className?: string;
};

function ActivityGroups({ groups }: { groups: ResumeActivityGroup[] }) {
  return (
    <div className="min-w-0 space-y-5">
      {groups.map((group, groupIndex) => (
        <section key={`${group.title}-${groupIndex}`} aria-label={group.title}>
          <h3 className="text-xs/4 print:break-after-avoid">
            <Paragraph.Text typography="t6" fontWeight="semibold">
              {group.title}
            </Paragraph.Text>
          </h3>
          <div className="mt-1 space-y-1.5">
            {group.items.map((item, itemIndex) => (
              <div key={`${item.title}-${itemIndex}`} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-baseline gap-x-1.5 text-[10px]/[15px]">
                  <h4 className="print:break-after-avoid">
                    <Paragraph.Text fontWeight="semibold">{item.title}</Paragraph.Text>
                  </h4>
                  {item.period && (
                    <Paragraph.Text className="text-zinc-700">{item.period}</Paragraph.Text>
                  )}
                </div>
                {(item.description || !!item.links?.length) && (
                  <Paragraph typography="t7" className="leading-[1.5] text-zinc-700">
                    {item.description}
                    {item.links?.map(({ label, href }, linkIndex) => (
                      <Paragraph.Text key={`${href}-${linkIndex}`}>
                        {" ("}
                        <a
                          href={href}
                          target={/^https?:\/\//.test(href) ? "_blank" : undefined}
                          rel={/^https?:\/\//.test(href) ? "noopener noreferrer" : undefined}
                          className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                          {label}
                        </a>
                        {")"}
                      </Paragraph.Text>
                    ))}
                  </Paragraph>
                )}
                {!!item.bullets?.length && (
                  <ul className="mt-1 list-disc pl-3.5 text-[10px]/[15px] text-zinc-700">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={`${bulletIndex}-${bullet}`}>
                        <Paragraph typography="t7" className="leading-[1.5]">
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
  title = "Experience",
  description,
  groups,
  sideGroups,
  className,
}: ResumeActivitiesProps) {
  const hasSidebar = !!sideGroups?.length;

  return (
    <section data-resume-activities aria-label={title} className={cn("min-w-0 text-black", className)}>
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1 print:break-after-avoid">
        <h2>
          <Paragraph.Text typography="t3" fontWeight="bold">{title}</Paragraph.Text>
        </h2>
        {description && (
          <Paragraph.Text typography="t7" className="leading-[1.5] text-zinc-700">
            {description}
          </Paragraph.Text>
        )}
      </header>
      <div className={cn(
        "mt-3 grid min-w-0 gap-x-8 gap-y-5",
        hasSidebar && "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] print:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
      )}>
        <ActivityGroups groups={groups} />
        {hasSidebar && (
          <aside data-activities-sidebar aria-label="추가 경험" className="min-w-0">
            <ActivityGroups groups={sideGroups} />
          </aside>
        )}
      </div>
    </section>
  );
}
