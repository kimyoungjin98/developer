import {
  ResumeExperience,
  type ExperienceAchievement,
  type ResumeExperienceProps,
} from "../resume/resume-experience";
import type { ResumeHeaderProps } from "../resume/resume-header";
import { Paragraph } from "../typography/paragraph";
import { renderBoldText } from "../typography/bold-text";

export function CareerDocument({
  header,
  experiences,
  qualifications = [],
}: {
  header: ResumeHeaderProps;
  experiences: ResumeExperienceProps[];
  qualifications?: ExperienceAchievement[];
}) {
  const visibleQualifications = qualifications
    .filter((qualification) => !qualification.draft)
    .map((qualification) => ({
      ...qualification,
      items: qualification.items.filter((item) => item.trim()),
    }))
    .filter((qualification) => qualification.items.length > 0);
  // 경력기술서는 전체 기록을 표시하되, 이력서 원본의 숨김 설정은 변경하지 않습니다.
  const careerExperiences = experiences.map((experience) => ({
    ...experience,
    draft: false,
    teams: experience.teams.map((team) => ({
      ...team,
      draft: false,
      projects: team.projects.map((project) => ({
        ...project,
        draft: false,
        achievements: project.achievements?.map((achievement) => ({
          ...achievement,
          draft: false,
        })),
      })),
    })),
  }));

  return (
    <div className="text-black">
      <header data-a4-block className="border-b-2 border-black pb-6">
        <h1>
          <Paragraph.Text typography="t2" fontWeight="semibold">
            경력기술서
          </Paragraph.Text>
        </h1>
        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <Paragraph.Text typography="t3" fontWeight="medium">
            {header.name}
          </Paragraph.Text>
          <Paragraph.Text typography="st8" className="text-gray-700">
            {header.role}
          </Paragraph.Text>
        </div>
        <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {header.contacts.map((contact) => (
            <div
              key={contact.label}
              className="flex min-w-0 flex-wrap gap-x-1 text-xs leading-4"
            >
              <dt className="font-semibold">
                {renderBoldText(contact.label)}.
              </dt>
              <dd>
                <a
                  href={contact.href}
                  className="text-gray-700 underline decoration-zinc-300 underline-offset-4"
                >
                  {renderBoldText(contact.value)}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {visibleQualifications.length > 0 && (
        <section className="mt-8" aria-label="핵심 실무 경험">
          <h2 data-a4-block data-a4-keep-with-next>
            <Paragraph.Text typography="t3" fontWeight="semibold">
              핵심 실무 경험
            </Paragraph.Text>
          </h2>
          <div className="mt-4 space-y-4">
            {visibleQualifications.map((qualification, index) => (
              <div key={`${qualification.title}-${index}`} data-a4-block>
                <Paragraph typography="st8" fontWeight="medium">
                  {qualification.title}
                </Paragraph>
                <ul className="mt-2 list-disc space-y-1 pl-4 marker:text-zinc-400">
                  {qualification.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Paragraph typography="st9" className="text-gray-700">
                        {item}
                      </Paragraph>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-8" aria-label="경력 요약">
        <h2 data-a4-block data-a4-keep-with-next>
          <Paragraph.Text typography="t3" fontWeight="semibold">
            경력 요약
          </Paragraph.Text>
        </h2>
        <div className="mt-5 space-y-3">
          {careerExperiences.map((experience) => (
            <div
              key={experience.company}
              data-a4-block
              data-a4-atomic
              className="border-l-2 border-zinc-300 pl-3"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Paragraph.Text typography="t4" fontWeight="semibold">
                  {experience.company}
                </Paragraph.Text>
                <Paragraph.Text typography="t6" className="text-gray-700">
                  {experience.period}
                </Paragraph.Text>
              </div>
              {experience.teams.map((team) => (
                <div key={`${team.name}-${team.period}`} className="mt-2">
                  <Paragraph
                    typography="st8"
                    fontWeight="medium"
                    className="text-zinc-900"
                  >
                    {team.name}
                  </Paragraph>
                  <ul className="mt-2 list-disc space-y-1 pl-4 marker:text-zinc-400">
                    {(Array.isArray(team.description)
                      ? team.description
                      : [team.description]
                    ).map((description, index) => (
                      <li key={index}>
                        <Paragraph typography="st9" className="text-gray-700">
                          {description}
                        </Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-label="프로젝트별 담당 업무 및 성과">
        <h2
          data-a4-block
          data-a4-keep-with-next
          className="mb-6 border-b border-zinc-300 pb-3"
        >
          <Paragraph.Text typography="t3" fontWeight="semibold">
            담당 업무 및 주요 성과
          </Paragraph.Text>
        </h2>
        <div className="space-y-12">
          {careerExperiences.map((experience) => (
            <ResumeExperience key={experience.company} {...experience} />
          ))}
        </div>
      </section>
    </div>
  );
}
