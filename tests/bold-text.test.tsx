import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Paragraph } from "../components/typography/paragraph";
import { ResumeExperience } from "../components/resume/resume-experience";
import { CareerDocument } from "../components/career/career-document";

test("paragraphs render multiple bold phrases while preserving plain text and line breaks", () => {
  const html = renderToStaticMarkup(
    <Paragraph>{"**React** 개발자\n**사용자 경험**을 개선했습니다."}</Paragraph>,
  );
  assert.match(html, /<strong[^>]*>React<\/strong> 개발자\n<strong[^>]*>사용자 경험<\/strong>을 개선했습니다\./);
  assert.doesNotMatch(html, /\*\*/);
});

test("inline text keeps unmatched markers, escapes HTML, and preserves existing React children", () => {
  const html = renderToStaticMarkup(
    <Paragraph.Text>
      {"**<script>alert(1)</script>** / **닫히지 않음"}
      <em>기존 요소</em>
      {0}
    </Paragraph.Text>,
  );
  assert.match(html, /<strong[^>]*>&lt;script&gt;alert\(1\)&lt;\/script&gt;<\/strong>/);
  assert.match(html, /\*\*닫히지 않음/);
  assert.match(html, /<em>기존 요소<\/em>0/);
  assert.doesNotMatch(html, /<script>/);
});

const experiences = [{
  company: "회사",
  period: "2022 ~ 현재",
  teams: [{
    name: "개발팀",
    period: "2022 ~ 현재",
    description: "**공통 UI** 개발",
    projects: [{
      name: "**ERP**",
      link: "https://example.com/erp",
      description: "**정산 업무** 개선",
      achievements: [{ title: "성과", items: ["대기 시간을 **1초**로 단축"] }],
    }],
  }],
}];

test("resume and career documents render bold data in linked titles, summaries and achievement lists", () => {
  const header = {
    name: "개발자",
    role: "프론트엔드 개발자",
    summary: "**React** 기반 개발",
    contacts: [{ label: "Blog", value: "**개발 블로그**", href: "https://example.com" }],
  };
  const resume = renderToStaticMarkup(<ResumeExperience {...experiences[0]} />);
  const career = renderToStaticMarkup(<CareerDocument header={header} experiences={experiences} />);
  for (const html of [resume, career]) {
    for (const phrase of ["공통 UI", "ERP", "정산 업무", "1초"]) {
      assert.match(html, new RegExp(`<strong[^>]*>${phrase}</strong>`));
    }
    assert.match(html, /href="https:\/\/example.com\/erp"/);
    assert.doesNotMatch(html, /\*\*/);
  }
  assert.match(career, /<strong[^>]*>React<\/strong>/);
  assert.match(career, /<strong[^>]*>개발 블로그<\/strong>/);
});
