import { A4Layout, A4Page } from "@/components/layout/a4-layout";
import { PrintButton } from "@/components/layout/print-button";
import { ResumeHeader } from "@/components/resume/resume-header";
import { ResumeExperience } from "@/components/resume/resume-experience";
import { ResumeActivities } from "@/components/resume/resume-activities";
import { Paragraph } from "@/components/typography/paragraph";
import { resumeActivities, resumeExperiences } from "@/components/resume/data";

export default function Home() {
  return (
    <A4Layout
      toolbar={
        <div className="flex items-center justify-end w-full print:hidden">
          <PrintButton />
        </div>
      }
    >
      <A4Page aria-label="이력서 1페이지" className="flex flex-col">
        <ResumeHeader
          name="김영진"
          role="풀스택 개발자"
          summary={`React, Angular, Nestjs, Typescript 기반의 5년차 풀스택 개발자로,
            최근에는 AI 에이전트 주도 개발 시대에 발맞춰, 초반 설계를 어떻게 해야 일관성 있는
            작업이 가능한지에 대해 고민하며 개발하고 있습니다.
            또한 단순히 기능 구현에 그치지 않고,
            개발자와 사용자 모두에게 편리한 UI/UX를 제공하기 위해 노력하고 있습니다.`}
          contacts={[
            {
              label: "Contact",
              value: "010-9456-0400",
              href: "tel:01094560400",
            },
            {
              label: "Email",
              value: "gyu250@naver.com",
              href: "mailto:gyu250@naver.com",
            },
            {
              label: "GitHub",
              value: "kimyoungjin98",
              href: "https://github.com/kimyoungjin98",
            },
          ]}
        />

        <div className="mt-10 space-y-10">
          {resumeExperiences.map((experience, index) => (
            <ResumeExperience key={index} {...experience} />
          ))}
          <ResumeActivities {...resumeActivities} />
          <section
            className="grid gap-3 sm:grid-cols-[28mm_1fr]"
            aria-labelledby="education-heading"
          >
            <h2 id="education-heading" className="text-sm font-semibold">
              학력
            </h2>
            <Paragraph typography="t5" className="leading-7 text-zinc-500">
              학교명 · 전공 · 재학 기간
            </Paragraph>
          </section>
        </div>
      </A4Page>
    </A4Layout>
  );
}
