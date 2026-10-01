import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import {
  ResumeExperience,
  type ResumeExperienceProps,
} from "../components/resume/resume-experience";
import { ResumeActivities } from "../components/resume/resume-activities";
import { ResumeEducation } from "../components/resume/resume-education";

const experience: ResumeExperienceProps = {
  company: "공개 회사",
  period: "2024 — 현재",
  teams: [{
    name: "공개 팀",
    period: "2024 — 현재",
    description: "공개 팀 설명",
    projects: [{
      name: "공개 프로젝트",
      description: "공개 프로젝트 설명",
      achievements: [{ title: "공개 성과", items: ["공개 성과 내용"] }],
    }],
  }],
};

test("omitted and false draft flags keep experience content visible", () => {
  for (const draft of [undefined, false]) {
    const html = renderToStaticMarkup(<ResumeExperience
      {...experience}
      draft={draft}
      teams={experience.teams.map(team => ({
        ...team,
        draft,
        projects: team.projects.map(project => ({
          ...project,
          draft,
          achievements: project.achievements?.map(achievement => ({ ...achievement, draft })),
        })),
      }))}
    />);
    for (const text of ["공개 회사", "공개 팀", "공개 프로젝트", "공개 성과 내용"]) {
      assert.ok(html.includes(text), `Missing visible content: ${text}`);
    }
  }
});

test("draft experience hides its entire section", () => {
  assert.equal(renderToStaticMarkup(<ResumeExperience {...experience} draft />), "");
});

test("draft teams hide their descendants and an experience with only draft teams", () => {
  const draftTeam = { ...experience.teams[0], name: "비공개 팀", draft: true };
  const html = renderToStaticMarkup(<ResumeExperience
    {...experience}
    teams={[draftTeam, experience.teams[0]]}
  />);
  assert.doesNotMatch(html, /비공개 팀/);
  assert.equal((html.match(/공개 프로젝트 설명/g) || []).length, 1);
  assert.equal(renderToStaticMarkup(<ResumeExperience {...experience} teams={[draftTeam]} />), "");
});

test("draft projects omit descriptions, links, page breaks and achievements", () => {
  const html = renderToStaticMarkup(<ResumeExperience
    {...experience}
    teams={[{
      ...experience.teams[0],
      projects: [
        {
          name: "비공개 프로젝트",
          description: "비공개 설명",
          draft: true,
          link: "https://example.com/draft",
          pageBreakBefore: true,
          achievements: [{ title: "비공개 성과", items: ["비공개 내용"] }],
        },
        experience.teams[0].projects[0],
      ],
    }]}
  />);
  assert.doesNotMatch(html, /비공개|example\.com\/draft|data-a4-break-before/);
  assert.ok(html.includes("공개 프로젝트"));
});

test("draft achievements disappear and all-draft achievements leave no list", () => {
  const project = experience.teams[0].projects[0];
  const draftAchievement = { title: "비공개 성과", items: ["비공개 내용"], draft: true };
  for (const achievements of [
    [draftAchievement, ...project.achievements!],
    [draftAchievement],
  ]) {
    const html = renderToStaticMarkup(<ResumeExperience
      {...experience}
      teams={[{ ...experience.teams[0], projects: [{ ...project, achievements }] }]}
    />);
    assert.doesNotMatch(html, /비공개/);
    if (achievements.length === 1) {
      assert.doesNotMatch(html, /<ul\b|<h5\b/);
    } else {
      assert.ok(html.includes("공개 성과 내용"));
    }
  }
});

test("activities omit draft groups, draft items and groups left empty", () => {
  const html = renderToStaticMarkup(<ResumeActivities groups={[
    { title: "비공개 그룹", draft: true, items: [{ title: "그룹 하위 비공개 항목" }] },
    { title: "비어버린 그룹", items: [{ title: "숨긴 항목", draft: true }] },
    { title: "공개 그룹", draft: false, items: [
      { title: "비공개 항목", draft: true, links: [{ label: "비공개 링크", href: "https://example.com/draft" }] },
      { title: "공개 항목", draft: false },
      { title: "기본 공개 항목" },
    ] },
  ]} />);
  assert.doesNotMatch(html, /비공개|비어버린|숨긴|example\.com\/draft/);
  for (const text of ["공개 그룹", "공개 항목", "기본 공개 항목"]) assert.ok(html.includes(text));
});

test("a draft-only activity sidebar does not leave a second column", () => {
  const html = renderToStaticMarkup(<ResumeActivities
    groups={[{ title: "공개 그룹", items: [{ title: "공개 항목" }] }]}
    sideGroups={[{ title: "숨긴 사이드 그룹", items: [{ title: "숨긴 사이드 항목", draft: true }] }]}
  />);
  assert.doesNotMatch(html, /<aside\b|grid-cols-\[minmax|숨긴/);
  assert.ok(html.includes("공개 항목"));
});

test("sidebar-only activities retain visible content without an empty main column", () => {
  const html = renderToStaticMarkup(<ResumeActivities
    groups={[{ title: "숨긴 그룹", draft: true, items: [{ title: "숨긴 항목" }] }]}
    sideGroups={[{ title: "공개 사이드 그룹", items: [{ title: "공개 사이드 항목" }] }]}
  />);
  assert.ok(html.includes("공개 사이드 항목"));
  assert.doesNotMatch(html, /숨긴|grid-cols-\[minmax/);
});

test("draft and empty activities render no section", () => {
  const groups = [{ title: "그룹", items: [{ title: "항목" }] }];
  assert.equal(renderToStaticMarkup(<ResumeActivities draft groups={groups} />), "");
  assert.equal(renderToStaticMarkup(<ResumeActivities groups={[
    { title: "그룹", items: [{ title: "항목", draft: true }] },
  ]} />), "");
});

test("education hides draft items and removes an entirely hidden section", () => {
  const visible = { name: "공개 학교", major: "전공", period: "2020 — 2024" };
  const hidden = { ...visible, name: "비공개 학교", draft: true };
  const html = renderToStaticMarkup(<ResumeEducation items={[
    hidden, visible, { ...visible, name: "명시적 공개 학교", draft: false },
  ]} />);
  assert.doesNotMatch(html, /비공개 학교/);
  assert.ok(html.includes("공개 학교"));
  assert.ok(html.includes("명시적 공개 학교"));
  assert.equal(renderToStaticMarkup(<ResumeEducation items={[hidden]} />), "");
  assert.equal(renderToStaticMarkup(<ResumeEducation draft items={[visible]} />), "");
});
