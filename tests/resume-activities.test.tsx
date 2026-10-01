import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { ResumeActivities } from "../components/resume/resume-activities";

test("activities renders grouped experiences, periods, bullet points and related links", () => {
  const html = renderToStaticMarkup(
    <ResumeActivities
      description="커뮤니티, 발표, 출판 경험"
      groups={[
        {
          title: "퍼실리테이션",
          items: [
            { title: "프론트엔드 개발그룹", period: "2023.01 — 2023.12", description: "개발자 커뮤니티 운영", bullets: ["신규 입사자 온보딩", "정기 모임 운영"] },
          ],
        },
        {
          title: "커뮤니티",
          items: [
            { title: "SIPE", period: "1 — 5기", description: "스터디 활동", links: [{ label: "Blog", href: "https://example.com/activity" }] },
          ],
        },
      ]}
      sideGroups={[
        { title: "출판", items: [{ title: "기술 도서", period: "출판사", description: "공동 집필" }] },
      ]}
    />,
  );
  for (const text of ["Experience", "퍼실리테이션", "커뮤니티", "출판", "2023.01 — 2023.12", "신규 입사자 온보딩", "스터디 활동", "기술 도서", "공동 집필"]) {
    assert.ok(html.includes(text), `Missing activity content: ${text}`);
  }
  assert.equal((html.match(/<li\b/g) || []).length, 2);
  assert.match(html, /href="https:\/\/example.com\/activity"/);
  assert.match(html, /rel="noopener noreferrer"/);
});

test("activities supports a single column and omits absent optional item fields", () => {
  const html = renderToStaticMarkup(
    <ResumeActivities title="대외 활동" groups={[
      { title: "커뮤니티", items: [{ title: "스터디" }] },
    ]} />,
  );
  assert.ok(html.includes("대외 활동"));
  assert.ok(html.includes("스터디"));
  assert.doesNotMatch(html, /<aside\b|<ul\b|<a\b|undefined/);
});
