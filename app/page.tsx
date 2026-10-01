import { A4Layout, A4Page } from "@/components/layout/a4-layout";
import { PrintButton } from "@/components/layout/print-button";
import { Paragraph } from "@/components/typography/paragraph";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Paragraph typography="t5" className="text-blue-600 underline">
        {children}
      </Paragraph>
    </a>
  );
};

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
        <header className="flex gap-3 items-center justify-between pb-4">
          <div className="flex gap-3 items-center">
            <Paragraph typography="t1" fontWeight="medium">
              김영진
            </Paragraph>
            <Paragraph typography="t5" className="text-zinc-600">
              풀스택 개발자
            </Paragraph>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Paragraph
                typography="t5"
                fontWeight="semibold"
                className="min-w-14"
              >
                Contact
              </Paragraph>
              <Paragraph typography="t5" className="text-zinc-600">
                010-9456-0400
              </Paragraph>
            </div>
            <div className="flex gap-2 items-center">
              <Paragraph
                typography="t5"
                fontWeight="semibold"
                className="min-w-14"
              >
                Email
              </Paragraph>
              <Paragraph typography="t5" className="text-zinc-600">
                gyu250@naver.com
              </Paragraph>
            </div>
            <div className="flex gap-2 items-center">
              <Paragraph
                typography="t5"
                className="min-w-14"
                fontWeight="semibold"
              >
                Github
              </Paragraph>
              <Link href="https://github.com/kimyoungjin98">kimyoungjin98</Link>
            </div>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          <section
            className="grid gap-3 sm:grid-cols-[28mm_1fr]"
            aria-labelledby="profile-heading"
          >
            <h2 id="profile-heading" className="text-sm font-semibold">
              소개
            </h2>
            <Paragraph typography="t5" className="leading-7 text-zinc-500">
              나의 전문 분야와 일하는 방식을 소개해 주세요.
            </Paragraph>
          </section>
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
