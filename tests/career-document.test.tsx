import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { CareerDocument } from "../components/career/career-document";
import { resumeExperiences, resumeHeader } from "../components/resume/data";

test("career document includes every project and original measurable outcomes", () => {
  const html = renderToStaticMarkup(
    <CareerDocument header={resumeHeader} experiences={resumeExperiences} />,
  );
  for (const text of ["사내 ERP 개발", "말이랑", "건설사 A/S", "약 3~5초에서 약 1초", "5개에서 2개", "3~5분", "1분내"]) {
    assert.ok(html.includes(text), `Missing career content: ${text}`);
  }
  for (const text of ["크롬 익스텐션 기반", "광주스타트업플랫폼", "아동 학습 미니게임", "AI 기반 프로젝트·서비스 기획 관리 도구", "구글 Ads 기반", "광고 통합 관리 시스템"]) {
    assert.ok(html.includes(text), `Missing draft project: ${text}`);
  }
  assert.equal((html.match(/<h4\b/g) || []).length, 13);
  assert.equal(resumeExperiences[0].teams[0].projects[1].draft, true);
});

test("career document includes draft companies, teams, projects and achievements", () => {
  const html = renderToStaticMarkup(<CareerDocument header={resumeHeader} experiences={[
    { company: "숨긴 회사", period: "숨긴 기간", draft: true, teams: [] },
    { company: "숨긴 팀의 회사", period: "숨긴 기간", teams: [
      { name: "숨긴 팀", period: "숨긴 기간", description: "숨긴 소개", draft: true, projects: [] },
    ] },
    { company: "공개 회사", period: "2024 ~ 현재", teams: [
      { name: "공개 직책", period: "2024 ~ 현재", description: "공개 업무", projects: [
        { name: "숨긴 프로젝트", description: "숨긴 개요", draft: true },
        { name: "공개 프로젝트", description: "공개 개요", achievements: [
          { title: "숨긴 성과", items: ["숨긴 내용"], draft: true },
          { title: "공개 성과", items: ["공개 결과"] },
        ] },
      ] },
    ] },
  ]} />);
  for (const text of ["숨긴 회사", "숨긴 팀", "숨긴 프로젝트", "숨긴 성과", "숨긴 내용"]) {
    assert.ok(html.includes(text), `Missing draft career content: ${text}`);
  }
  assert.ok(html.includes("공개 직책"));
  assert.ok(html.includes("공개 프로젝트"));
  assert.ok(html.includes("공개 결과"));
});
