import { A4Layout, A4Page } from "@/components/layout/a4-layout";
import { PrintButton } from "@/components/layout/print-button";
import { ResumeHeader } from "@/components/resume/resume-header";
import { Paragraph } from "@/components/typography/paragraph";

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
          summary={[
            "주로 사용하는 기술과 전문 분야를 소개해 주세요.",
            "프로젝트에서 맡은 역할과 해결한 문제, 주요 성과를 작성해 주세요.",
            "협업할 때 중요하게 생각하는 점과 앞으로의 방향을 덧붙여 주세요.",
          ].join("\n")}
          contacts={[
            { label: "Contact", value: "010-9456-0400", href: "tel:01094560400" },
            { label: "Email", value: "gyu250@naver.com", href: "mailto:gyu250@naver.com" },
            { label: "GitHub", value: "kimyoungjin98", href: "https://github.com/kimyoungjin98" },
          ]}
        />

        <div className="mt-10 space-y-10">
          <section
            className="grid gap-3 sm:grid-cols-[28mm_1fr]"
            aria-labelledby="experience-heading"
          >
            <h2 id="experience-heading" className="text-sm font-semibold">
              경력
            </h2>
            <div className="border-l border-zinc-200 pl-5">
              <h3 className="text-sm font-medium">회사명 · 직무</h3>
              <Paragraph typography="t6" className="mt-2 text-zinc-400">
                시작 연월 — 종료 연월
              </Paragraph>
              <Paragraph
                typography="t5"
                className="mt-4 leading-7 text-zinc-500"
              >
                맡은 역할과 주요 성과를 작성해 주세요.
              </Paragraph>
            </div>
          </section>
          <section
            className="grid gap-3 sm:grid-cols-[28mm_1fr]"
            aria-labelledby="projects-heading"
          >
            <h2 id="projects-heading" className="text-sm font-semibold">
              프로젝트
            </h2>
            <div>
              <h3 className="text-sm font-medium">프로젝트명</h3>
              <Paragraph
                typography="t5"
                className="mt-3 leading-7 text-zinc-500"
              >
                해결한 문제, 기여한 부분, 결과를 작성해 주세요.
              </Paragraph>
            </div>
          </section>
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
