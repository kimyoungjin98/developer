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
    <div className="min-w-0 space-y-8">
      {groups.map((group, groupIndex) => (
        <section key={`${group.title}-${groupIndex}`} aria-label={group.title}>
          <h3 className="print:break-after-avoid">
            <Paragraph.Text typography="t3" fontWeight="semibold">
              {group.title}
            </Paragraph.Text>
          </h3>
          <div className="mt-3 space-y-5">
            {group.items.map((item, itemIndex) => (
              <div
                key={`${item.title}-${itemIndex}`}
                className="print:break-inside-avoid"
              >
                <div className="flex flex-wrap items-baseline gap-x-2 text-[13px]/[1.6]">
                  <Paragraph.Text
                    typography="t4"
                    fontWeight="semibold"
                    className="text-lg/6 print:break-after-avoid"
                  >
                    {item.title}
                  </Paragraph.Text>
                  {item.period && (
                    <Paragraph.Text typography="t6" className="text-zinc-700">
                      {item.period}
                    </Paragraph.Text>
                  )}
                </div>
                {(item.description || !!item.links?.length) && (
                  <Paragraph
                    typography="t5"
                    className="mt-2 text-[13px] leading-[1.6] text-zinc-700"
                  >
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
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-[13px]/[1.6] text-zinc-700">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={`${bulletIndex}-${bullet}`}>
                        <Paragraph
                          typography="t5"
                          className="text-[13px] leading-[1.6]"
                        >
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
    <section
      data-resume-activities
      data-a4-block
      aria-label={title}
      className={cn("min-w-0 text-black", className)}
    >
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1 print:break-after-avoid">
        <h2>
          <Paragraph.Text typography="t2" fontWeight="bold">
            {title}
          </Paragraph.Text>
        </h2>
        {description && (
          <Paragraph.Text
            typography="t6"
            className="leading-[1.5] text-zinc-700"
          >
            {description}
          </Paragraph.Text>
        )}
      </header>
      <div
        className={cn(
          "mt-6 grid min-w-0 gap-x-8 gap-y-8",
          hasSidebar &&
            "@min-[640px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] print:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
        )}
      >
        <ActivityGroups groups={groups} />
        {hasSidebar && (
          <aside
            data-activities-sidebar
            aria-label="추가 경험"
            className="min-w-0"
          >
            <ActivityGroups groups={sideGroups} />
          </aside>
        )}
      </div>
    </section>
  );
}
