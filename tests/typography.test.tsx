import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Paragraph } from "../components/typography/paragraph";

test("paragraph allows callers to override typography with Tailwind classes", () => {
  const html = renderToStaticMarkup(
    <Paragraph typography="t1" fontWeight="bold" className="text-sm font-medium">
      Hello
    </Paragraph>,
  );
  assert.match(html, /class="text-sm font-medium"/);
  assert.doesNotMatch(html, /font-size:|line-height:|font-weight:/);
});

test("paragraph preserves custom styles and HTML attributes", () => {
  const html = renderToStaticMarkup(
    <Paragraph id="description" aria-label="Description" style={{ marginTop: 8 }}>
      Hello
    </Paragraph>,
  );
  assert.match(html, /id="description"/);
  assert.match(html, /aria-label="Description"/);
  assert.match(html, /margin-top:8px/);
  assert.match(html, />Hello<\/p>/);
});

test("paragraph supports dynamic line counts while preserving caller styles", () => {
  const html = renderToStaticMarkup(
    <Paragraph ellipsisAfterLines={7.8} style={{ marginTop: 8 }}>
      Hello
    </Paragraph>,
  );
  assert.match(html, /class="line-clamp-\(--paragraph-lines\)"/);
  assert.match(html, /--paragraph-lines:7/);
  assert.match(html, /margin-top:8px/);
  for (const lines of [undefined, 0, -1, NaN, Infinity, 0.5]) {
    const unclamped = renderToStaticMarkup(
      <Paragraph ellipsisAfterLines={lines}>Hello</Paragraph>,
    );
    assert.doesNotMatch(unclamped, /line-clamp|--paragraph-lines/);
  }
});

test("paragraph text allows Tailwind overrides and retains explicit styles", () => {
  const html = renderToStaticMarkup(
    <Paragraph.Text
      typography="t1"
      color="primary"
      fontWeight="bold"
      className="text-sm text-red-500 font-medium"
      style={{ fontSize: 18 }}
    >
      Hello
    </Paragraph.Text>,
  );
  assert.match(html, /class="text-sm text-red-500 font-medium"/);
  assert.match(html, /font-size:18px/);
  assert.doesNotMatch(html, /line-height:|font-weight:|color:var/);
});

test("paragraph icon retains typography and permits size overrides", () => {
  const html = renderToStaticMarkup(
    <Paragraph.Icon name="mdi:check" typography="t4" className="size-6" />,
  );
  assert.match(html, /size-6/);
  assert.doesNotMatch(html, /size-\[1em\]|width:1em|height:1em|font-size:/);
  assert.match(html, /aria-hidden="true"/);
});
