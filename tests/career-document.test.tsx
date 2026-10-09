import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { CareerDocument } from "../components/career/career-document";
import { careerExperiences, careerQualifications } from "../components/career/data";
import { resumeHeader } from "../components/resume/data";

test("career document includes all projects, periods, duties and contributions from the source document", () => {
  const html = renderToStaticMarkup(
    <CareerDocument header={resumeHeader} experiences={careerExperiences} qualifications={careerQualifications} />,
  );
  const projects = careerExperiences.flatMap(experience =>
    experience.teams.flatMap(team => team.projects),
  );
  assert.equal(projects.length, 20);
  for (const project of projects) {
    for (const text of [project.name, project.period!, project.description, `기여도 ${project.contributionRate}%`, ...project.achievements![0].items]) {
      assert.ok(html.includes(text), `Missing career content: ${text}`);
    }
  }
  for (const text of ["사내 홈페이지 리뉴얼", "사진 미션 리워드 서비스", "베트남 여행 예약 플랫폼", "신체 기록 관리 서비스", "헬로 유니콘 웹/앱", "여행 상품·콘텐츠 운영 플랫폼", "클라이언트 ↔ 프리랜서 매칭 플랫폼"]) {
    assert.ok(html.includes(text), `Missing source project: ${text}`);
  }
  assert.equal((html.match(/<h4\b/g) || []).length, 20);
  assert.ok(html.includes("2026.08 ~ 2026.09"));
  assert.ok(html.includes("기여도 100%"));
  assert.ok(html.includes("Phaser3 + Angular 기반 미니게임 4종 개발"));
});

test("career qualifications display authored items and hide unfinished or draft sections", () => {
  const empty = renderToStaticMarkup(
    <CareerDocument header={resumeHeader} experiences={[]} qualifications={[
      { title: "미작성 경력", items: ["", " "] },
    ]} />,
  );
  assert.ok(!empty.includes("핵심 실무 경험"));
  assert.ok(!empty.includes("미작성 경력"));

  const filled = renderToStaticMarkup(
    <CareerDocument header={resumeHeader} experiences={[]} qualifications={[
      { title: "React 실무 경력", items: ["프로젝트 A에서 **React** 화면 설계", " "] },
      { title: "미작성 SSR", items: [] },
      { title: "숨긴 운영 경험", items: ["숨긴 내용"], draft: true },
    ]} />,
  );
  assert.ok(filled.includes("핵심 실무 경험"));
  assert.ok(filled.includes("React 실무 경력"));
  assert.match(filled, /<strong[^>]*>React<\/strong>/);
  assert.ok(!filled.includes("미작성 SSR"));
  assert.ok(!filled.includes("숨긴 운영 경험"));
});

test("career document includes draft companies, teams, projects and achievements", () => {
  const html = renderToStaticMarkup(<CareerDocument header={resumeHeader} experiences={[
    { company: "숨긴 회사", period: "숨긴 기간", draft: true, teams: [] },
    { company: "숨긴 팀의 회사", period: "숨긴 기간", teams: [
      { name: "숨긴 팀", period: "숨긴 기간", description: "숨긴 소개", draft: true, projects: [] },
    ] },
    { company: "공개 회사", period: "2024 ~ 현재", teams: [
      { name: "공개 직책", period: "2024 ~ 현재", description: ["공개 업무", "추가 회사 소개"], projects: [
        { name: "숨긴 프로젝트", description: "숨긴 개요", draft: true },
        { name: "공개 프로젝트", description: "공개 개요", techStack: ["TypeScript", "React", "NestJS"], achievements: [
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
  assert.equal((html.match(/추가 회사 소개/g) || []).length, 2);
  assert.ok(html.includes("TypeScript, React, NestJS"));
});
