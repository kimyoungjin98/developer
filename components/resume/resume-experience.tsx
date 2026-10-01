import { cn } from "../tailwind-util";
import { Paragraph } from "../typography/paragraph";

export type ExperienceAchievement = {
  title: string;
  items: string[];
};

export type ExperienceProject = {
  name: string;
  description: string;
  contribution?: string;
  techStack?: string[];
  link?: string;
  achievements?: ExperienceAchievement[];
  /** 자동 배치 대신 이 프로젝트부터 새 A4 페이지를 시작합니다. */
  pageBreakBefore?: boolean;
};

export type ExperienceTeam = {
  name: string;
  period: string;
  description: string;
  projects: ExperienceProject[];
};

export type ResumeExperienceProps = {
  company: string;
  period: string;
  teams: ExperienceTeam[];
  className?: string;
};

export function ResumeExperience({
  company,
  period,
  teams,
  className,
}: ResumeExperienceProps) {
  return (
    <section
      data-resume-experience
      aria-label={`${company} 경력`}
      className={cn("min-w-0 text-black", className)}
    >
      <header
        data-a4-block
        data-a4-keep-with-next
        className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
      >
        <h2 className="print:break-after-avoid">
          <Paragraph.Text typography="t2" fontWeight="bold">
            {company}
          </Paragraph.Text>
        </h2>
        <Paragraph.Text typography="t6" className="leading-[1.5]">
          {period}
        </Paragraph.Text>
      </header>

      <div className="mt-6 space-y-8">
        {teams.map((team, teamIndex) => (
          <div key={`${team.name}-${teamIndex}`}>
            <div data-a4-block>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 print:break-after-avoid">
                <h3>
                  <Paragraph.Text typography="t3" fontWeight="semibold">
                    {team.name}
                  </Paragraph.Text>
                </h3>
                <Paragraph.Text typography="t6" className="leading-[1.5]">
                  {team.period}
                </Paragraph.Text>
              </div>
              <Paragraph
                typography="t5"
                className="mt-2 text-[13px] leading-[1.6]"
              >
                {team.description}
              </Paragraph>
            </div>

            <div className="mt-8 space-y-8">
              {team.projects.map((project, projectIndex) => (
                <div
                  data-a4-block
                  data-a4-break-before={project.pageBreakBefore || undefined}
                  key={`${project.name}-${projectIndex}`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 print:break-after-avoid">
                    <h4 className="border-l-2 border-black pl-1.5">
                      <Paragraph.Text
                        typography="t4"
                        fontWeight="semibold"
                        className="text-lg/6"
                      >
                        {project.link ? (
                          <a
                            href={project.link}
                            className="underline decoration-zinc-300 underline-offset-4"
                          >
                            {project.name}
                          </a>
                        ) : (
                          project.name
                        )}
                      </Paragraph.Text>
                    </h4>
                  </div>
                  <Paragraph
                    typography="t5"
                    className="mt-2 text-[13px] leading-[1.6]"
                  >
                    {project.description}
                  </Paragraph>
                  {!!project.techStack?.length && (
                    <Paragraph
                      typography="t6"
                      className="mt-1 leading-[1.5] text-zinc-400"
                    >
                      {project.techStack.join(", ")}
                    </Paragraph>
                  )}

                  {project.contribution && (
                    <div className="mt-4">
                      <h5 className="print:break-after-avoid">
                        <Paragraph.Text typography="t5" fontWeight="semibold">
                          기여 내용
                        </Paragraph.Text>
                      </h5>
                      <Paragraph
                        typography="t5"
                        className="mt-1 text-[13px] leading-[1.6]"
                      >
                        {project.contribution}
                      </Paragraph>
                    </div>
                  )}

                  {!!project.achievements?.length && (
                    <div className="mt-4 space-y-3">
                      {project.achievements.map(
                        (achievement, achievementIndex) => (
                          <div key={`${achievement.title}-${achievementIndex}`}>
                            <h5 className="print:break-after-avoid">
                              <Paragraph.Text
                                typography="t5"
                                fontWeight="semibold"
                              >
                                {achievement.title}
                              </Paragraph.Text>
                            </h5>
                            <ul className="mt-1 list-disc space-y-1 pl-3.5 marker:text-black">
                              {achievement.items.map((item, itemIndex) => (
                                <li
                                  key={`${itemIndex}-${item}`}
                                  className="text-[13px]/[1.6]"
                                >
                                  <Paragraph
                                    typography="t5"
                                    className="text-[13px] leading-[1.6]"
                                  >
                                    {item}
                                  </Paragraph>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
