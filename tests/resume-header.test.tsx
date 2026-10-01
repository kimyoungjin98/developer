import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { ResumeHeader } from "../components/resume/resume-header";

const profile = {
  name: "김영진",
  role: "풀스택 개발자",
  summary: "소개 문구",
  contacts: [
    { label: "Email", value: "gyu250@naver.com", href: "mailto:gyu250@naver.com" },
    { label: "GitHub", value: "kimyoungjin98", href: "https://github.com/kimyoungjin98" },
  ],
};

test("resume header exposes the name as a heading and retains summary and contact destinations", () => {
  const html = renderToStaticMarkup(<ResumeHeader {...profile} />);
  assert.match(html, /<h1[^>]*>김영진<\/h1>/);
  assert.match(html, /풀스택 개발자/);
  assert.match(html, /소개 문구/);
  assert.match(html, /href="mailto:gyu250@naver.com"/);
  assert.match(html, /href="https:\/\/github.com\/kimyoungjin98"/);
  const labels = [...html.matchAll(/<dt[^>]*>(.*?)<\/dt>/g)].map(
    ([, label]) => label.replace(/<[^>]+>/g, ""),
  );
  assert.deepEqual(labels, ["Email.", "GitHub."]);
});

test("resume header offers an accessible placeholder when the photo is absent", () => {
  const html = renderToStaticMarkup(<ResumeHeader {...profile} />);
  assert.match(html, /aria-label="김영진 프로필 사진 자리"/);
  assert.doesNotMatch(html, /<img/);
});

test("resume header renders an optional photo and caption", () => {
  const html = renderToStaticMarkup(
    <ResumeHeader {...profile} imageSrc="/profile.jpg" caption="기술 분야" />,
  );
  assert.match(html, /<img[^>]+alt="김영진 프로필 사진"/);
  assert.match(html, /src="\/profile.jpg"/);
  assert.match(html, /기술 분야/);
  assert.doesNotMatch(html, /프로필 사진 자리/);
});
