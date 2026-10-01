import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { ResumeExperience } from "../components/resume/resume-experience";

test("experience renders separate company and team periods, project details and achievement lists", () => {
  const html = renderToStaticMarkup(
    <ResumeExperience
      company="카카오엔터테인먼트"
      period="24.11.26 - NOW"
      teams={[
        {
          name: "베리즈FE개발팀",
          period: "2024.11 - NOW",
          description: "팬 커뮤니티 서비스를 개발했습니다.",
          projects: [
            {
              name: "베리즈 개발",
              description: "SSR 환경에서 SEO와 캐싱 전략을 설계했습니다.",
              techStack: ["Next.js", "TypeScript"],
              achievements: [
                { title: "UX 개선", items: ["캐시를 적용했습니다.", "이미지를 최적화했습니다."] },
                { title: "테스트", items: ["회귀 테스트를 구축했습니다."] },
              ],
            },
          ],
        },
      ]}
    />,
  );
  for (const text of ["카카오엔터테인먼트", "24.11.26 - NOW", "2024.11 - NOW", "베리즈 개발", "Next.js, TypeScript", "캐시를 적용했습니다.", "회귀 테스트를 구축했습니다."]) {
    assert.ok(html.includes(text), `Missing experience content: ${text}`);
  }
  assert.equal((html.match(/<ul\b/g) || []).length, 2);
  assert.equal((html.match(/<li\b/g) || []).length, 3);
});

test("experience supports multiple teams and projects without optional stack or achievement lists", () => {
  const html = renderToStaticMarkup(
    <ResumeExperience
      company="회사명"
      period="재직 기간"
      teams={[
        {
          name: "첫 번째 팀",
          period: "2023 — 2024",
          description: "첫 번째 업무",
          projects: [
            { name: "프로젝트 A", description: "설명 A" },
            { name: "프로젝트 B", description: "설명 B", techStack: [], achievements: [] },
          ],
        },
        {
          name: "두 번째 팀",
          period: "2024 — 현재",
          description: "두 번째 업무",
          projects: [{ name: "프로젝트 C", description: "설명 C" }],
        },
      ]}
    />,
  );
  for (const text of ["첫 번째 팀", "두 번째 팀", "프로젝트 A", "프로젝트 B", "프로젝트 C"]) {
    assert.ok(html.includes(text));
  }
  assert.doesNotMatch(html, /<ul\b|undefined/);
});

test("experience renders portfolio periods, contributions, participation details and service links", () => {
  const html = renderToStaticMarkup(
    <ResumeExperience
      company="회사"
      period="2022.03 ~ 2026.05"
      teams={[{
        name: "개발팀 팀장",
        period: "2023.10 ~ 2025.04",
        description: "개발을 담당했습니다.",
        projects: [{
          name: "언어치료 플랫폼",
          period: "2024.12 — 2025.12",
          type: "웹·앱",
          description: "언어치료 서비스입니다.",
          contribution: "치료 데이터와 API를 설계했습니다.",
          roles: ["프론트엔드 개발", "백엔드 개발"],
          teamSize: 3,
          contributionRate: 0,
          link: "https://example.com/service",
          achievements: [{ title: "성능 개선", items: ["조회 요청을 줄였습니다."] }],
        }],
      }]}
    />,
  );
  for (const text of ["2024.12 — 2025.12", "웹·앱", "프론트엔드 개발", "백엔드 개발", "개발 3명", "기여도 0%", "치료 데이터와 API를 설계했습니다.", "조회 요청을 줄였습니다."]) {
    assert.ok(html.includes(text), `Missing portfolio content: ${text}`);
  }
  assert.match(html, /href="https:\/\/example\.com\/service"/);
});
