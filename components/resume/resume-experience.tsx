import { cn } from "../tailwind-util";
import { Paragraph } from "../typography/paragraph";

export type ExperienceAchievement = {
  draft?: boolean;
  title: string;
  items: string[];
};

export type ExperienceProject = {
  draft?: boolean;
  name: string;
  description: string;
  techStack?: string[];
  link?: string;
  achievements?: ExperienceAchievement[];
  /** 자동 배치 대신 이 프로젝트부터 새 A4 페이지를 시작합니다. */
  pageBreakBefore?: boolean;
};

export type ExperienceTeam = {
  draft?: boolean;
  name: string;
  period: string;
  description: string;
  projects: ExperienceProject[];
};

export type ResumeExperienceProps = {
  /** true이면 이 경력 전체를 화면과 인쇄에서 숨깁니다. */
  draft?: boolean;
  company: string;
  period: string;
  teams: ExperienceTeam[];
  className?: string;
};

export function ResumeExperience({
  draft,
  company,
  period,
  teams,
  className,
}: ResumeExperienceProps) {
  if (draft) return null;

  const visibleTeams = teams
    .filter(team => !team.draft)
    .map(team => ({
      ...team,
      projects: team.projects
        .filter(project => !project.draft)
        .map(project => ({
          ...project,
          achievements: project.achievements?.filter(
            achievement => !achievement.draft,
          ),
        })),
    }));

  if (teams.length > 0 && visibleTeams.length === 0) return null;

  return (
    <section
      data-resume-experience
      aria-label={`${company} 경력`}
      className={cn("min-w-0 text-black", className)}
    >
      <header
        data-a4-block
        data-a4-keep-with-next
        className="flex flex-wrap items-center gap-x-3 gap-y-1"
      >
        <h2 className="print:break-after-avoid">
          <Paragraph.Text typography="t2" fontWeight="semibold">
            {company}
          </Paragraph.Text>
        </h2>
        <Paragraph.Text typography="t6" className="text-gray-700">
          {period}
        </Paragraph.Text>
      </header>

      <div className="mt-4 space-y-8">
        {visibleTeams.map((team, teamIndex) => (
          <div key={`${team.name}-${teamIndex}`}>
            <div
              data-a4-block
              data-a4-atomic
              data-a4-keep-with-next={team.projects.length > 0 || undefined}
              className="flex flex-col gap-1 mt-8"
            >
              <div className="flex flex-wrap items-center gap-3 print:break-after-avoid">
                <Paragraph.Text typography="t3" fontWeight="semibold">
                  {team.name}
                </Paragraph.Text>
                <Paragraph.Text typography="t6" className="text-gray-700">
                  {team.period}
                </Paragraph.Text>
              </div>
              <Paragraph typography="st8" className="text-gray-700">
                {team.description}
              </Paragraph>
            </div>

            {team.projects.length > 0 && (
              <div className="mt-8 space-y-8">
                {team.projects.map((project, projectIndex) => (
                  <div
                    data-a4-block
                    data-a4-break-before={project.pageBreakBefore || undefined}
                    key={`${project.name}-${projectIndex}`}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 print:break-after-avoid">
                      <h4 className="border-l-2 border-black pl-1.5">
                        <Paragraph.Text typography="t4" fontWeight="semibold">
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
                    <Paragraph typography="st9" className="text-gray-700">
                      {project.description}
                    </Paragraph>
                    {!!project.techStack?.length && (
                      <Paragraph typography="st9" className="text-zinc-400">
                        {project.techStack.join(", ")}
                      </Paragraph>
                    )}

                    {!!project.achievements?.length && (
                      <div className="mt-4 space-y-3">
                        {project.achievements.map(
                          (achievement, achievementIndex) => (
                            <div key={`${achievement.title}-${achievementIndex}`}>
                              <h5 className="print:break-after-avoid">
                                <Paragraph.Text
                                  typography="st8"
                                  fontWeight="medium"
                                >
                                  {achievement.title}
                                </Paragraph.Text>
                              </h5>
                              <ul className="mt-1 list-disc space-y-1">
                                {achievement.items.map((item, itemIndex) => (
                                  <Paragraph
                                    key={`${item}-${itemIndex}`}
                                    typography="st8"
                                    fontWeight="regular"
                                    className="text-gray-800"
                                  >
                                    <span className="mr-2">•</span>
                                    {item}
                                  </Paragraph>
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
