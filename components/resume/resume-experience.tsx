import { cn } from "../tailwind-util";
import { Paragraph } from "../typography/paragraph";

export type ExperienceAchievement = {
  title: string;
  items: string[];
};

export type ExperienceProject = {
  name: string;
  description: string;
  techStack?: string[];
  achievements?: ExperienceAchievement[];
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
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="print:break-after-avoid">
          <Paragraph.Text typography="t3" fontWeight="bold">
            {company}
          </Paragraph.Text>
        </h2>
        <Paragraph.Text typography="t7" className="leading-[1.5]">
          {period}
        </Paragraph.Text>
      </header>

      <div className="mt-6 space-y-6">
        {teams.map((team, teamIndex) => (
          <div key={`${team.name}-${teamIndex}`}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 print:break-after-avoid">
              <h3>
                <Paragraph.Text typography="t5" fontWeight="semibold">
                  {team.name}
                </Paragraph.Text>
              </h3>
              <Paragraph.Text typography="t7" className="leading-[1.5]">
                {team.period}
              </Paragraph.Text>
            </div>
            <Paragraph typography="t7" className="mt-1 leading-[1.5]">
              {team.description}
            </Paragraph>

            <div className="mt-6 space-y-6">
              {team.projects.map((project, projectIndex) => (
                <div key={`${project.name}-${projectIndex}`}>
                  <h4 className="border-l-2 border-black pl-1.5 text-xs/4 print:break-after-avoid">
                    <Paragraph.Text typography="t6" fontWeight="semibold">
                      {project.name}
                    </Paragraph.Text>
                  </h4>
                  <Paragraph typography="t7" className="mt-3 leading-[1.5]">
                    {project.description}
                  </Paragraph>
                  {!!project.techStack?.length && (
                    <Paragraph typography="t7" className="mt-2 leading-[1.5] text-zinc-400">
                      {project.techStack.join(", ")}
                    </Paragraph>
                  )}

                  {!!project.achievements?.length && (
                    <div className="mt-3 space-y-1">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <div key={`${achievement.title}-${achievementIndex}`}>
                          <h5 className="text-[10px]/[15px] font-normal print:break-after-avoid">
                            <Paragraph.Text>{achievement.title}</Paragraph.Text>
                          </h5>
                          <ul className="list-disc pl-3.5 marker:text-black">
                            {achievement.items.map((item, itemIndex) => (
                              <li key={`${itemIndex}-${item}`} className="text-[10px]/[15px]">
                                <Paragraph typography="t7" className="leading-[1.5]">
                                  {item}
                                </Paragraph>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
