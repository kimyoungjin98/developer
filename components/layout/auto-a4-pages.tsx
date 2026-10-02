"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { A4Page } from "./a4-layout";

type Block = { element: HTMLElement; keepWithNext: boolean };

/** 정적 문서를 data-a4-block 단위로 측정하고 A4 페이지에 배치합니다. */
export function AutoA4Pages({ children }: { children: ReactNode }) {
  const sourceRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const source = sourceRef.current;
    const output = outputRef.current;
    const original = source?.firstElementChild as HTMLElement | undefined;
    if (!source || !output || !original) return;

    let disposed = false;
    let frame = 0;

    const renderBlocks = (page: HTMLElement, blocks: Block[]) => {
      page.replaceChildren();
      const copies = new Map<HTMLElement, HTMLElement>([[original, page]]);

      const copyParent = (element: HTMLElement): HTMLElement => {
        const existing = copies.get(element);
        if (existing) return existing;
        const parent = copyParent(element.parentElement!);
        const copy = element.cloneNode(false) as HTMLElement;
        // 새 페이지에서 앞선 제목 없이 이어지는 내용에는 시작 여백을 붙이지 않습니다.
        if (!parent.children.length && element.previousElementSibling) {
          copy.style.marginTop = "0";
        }
        parent.append(copy);
        copies.set(element, copy);
        return copy;
      };

      for (const [index, block] of blocks.entries()) {
        const copy = block.element.cloneNode(true) as HTMLElement;
        if (index === 0) {
          copy.style.marginTop = "0";
          copy.style.marginBlockStart = "0";
        }
        copyParent(block.element.parentElement!).append(copy);
      }
    };

    const paginate = (printLayout = window.matchMedia("print").matches) => {
      if (disposed) return;
      // 인쇄 중 숨겨진 측정 원본도 잠깐 측정한 뒤 다시 숨깁니다.
      const previousDisplay = source.style.display;
      const originalWidth = original.style.width;
      const originalMaxWidth = original.style.maxWidth;
      const originalPadding = original.style.padding;
      source.style.display = "block";
      if (printLayout) {
        original.style.width = "210mm";
        original.style.maxWidth = "none";
        original.style.padding = "40px";
      }
      if (!original.getBoundingClientRect().width) {
        source.style.display = previousDisplay;
        original.style.width = originalWidth;
        original.style.maxWidth = originalMaxWidth;
        original.style.padding = originalPadding;
        return;
      }

      const marked = [...original.querySelectorAll<HTMLElement>("[data-a4-block]")]
        .filter(element => !element.parentElement?.closest("[data-a4-block]"));
      const elements = marked.length ? marked : [...original.children] as HTMLElement[];
      const blocks: Block[] = elements.map(element => ({
        element,
        keepWithNext: element.hasAttribute("data-a4-keep-with-next"),
      }));
      output.replaceChildren();

      let pageNumber = 0;
      const createPage = () => {
        const page = original.cloneNode(false) as HTMLElement;
        page.removeAttribute("data-a4-measure");
        page.setAttribute("data-a4-page", "");
        page.setAttribute("aria-label", `이력서 ${++pageNumber}페이지`);
        page.style.height = "297mm";
        page.style.minHeight = "297mm";
        page.style.aspectRatio = "auto";
        output.append(page);
        return page;
      };
      let page = createPage();
      let placed: Block[] = [];
      const fits = () => {
        const bottom = page.getBoundingClientRect().bottom
          - parseFloat(getComputedStyle(page).paddingBottom);
        return page.scrollHeight <= page.clientHeight + 1
          && [...page.children].every(element => element.getBoundingClientRect().bottom <= bottom + 1);
      };
      const expandBlock = (index: number) => {
        const block = blocks[index];
        // 제목·본문·프로필·명시적인 묶음은 내부 요소로 잘게 나누지 않습니다.
        if (block.element.hasAttribute("data-a4-atomic")
          || /^(H[1-6]|P|LI|SPAN|A|IMG|SVG|HEADER)$/.test(block.element.tagName)) return false;
        const children = [...block.element.children] as HTMLElement[];
        const hasText = [...block.element.childNodes].some(node =>
          node.nodeType === Node.TEXT_NODE && !!node.textContent?.trim());
        if (!children.length || hasText) return false;
        const replacements = children.map((element, childIndex) => ({
          element,
          keepWithNext: /^H[1-6]$/.test(element.tagName)
            || (!!element.querySelector("h1,h2,h3,h4,h5,h6")
              && !element.querySelector("p,ul,ol"))
            || element.hasAttribute("data-a4-keep-with-next")
            || (childIndex === children.length - 1 && block.keepWithNext),
        }));
        blocks.splice(index, 1, ...replacements);
        return true;
      };

      for (let index = 0; index < blocks.length;) {
        if (placed.length && blocks[index].element.hasAttribute("data-a4-break-before")) {
          page = createPage();
          placed = [];
        }
        let end = index + 1;
        while (end < blocks.length && blocks[end - 1].keepWithNext
          && !blocks[end].element.hasAttribute("data-a4-break-before")) {
          // 제목 뒤에 본문을 포함한 묶음이 붙었으면 다음 제목까지 연결하지 않습니다.
          // 회사 제목과 직책 소개를 함께 배치한 뒤 프로젝트는 다음 장에서 이어갈 수 있습니다.
          const previous = blocks[end - 1].element;
          if (end > index + 1
            && previous.hasAttribute("data-a4-atomic")
            && previous.querySelector("p")) break;
          end++;
        }
        const group = blocks.slice(index, end);
        renderBlocks(page, [...placed, ...group]);
        if (fits()) {
          placed.push(...group);
          index = end;
          continue;
        }

        // 남은 공간부터 채웁니다. 통째로 다음 장에 넘기기 전에 항목 단위로 분할합니다.
        if (expandBlock(end - 1)) continue;

        if (placed.length) {
          renderBlocks(page, placed);
          page = createPage();
          placed = [];
          continue;
        }

        // 제목과 다음 항목을 묶어도 한 장을 넘으면 더 작은 단위로 다시 배치합니다.
        if (group.length > 1) {
          blocks[index].keepWithNext = false;
          continue;
        }

        // 분할할 수 없는 큰 이미지·문단은 잘라 숨기지 않고 인쇄의 자연 분할을 사용합니다.
        page.style.height = "auto";
        placed.push(...group);
        index = end;
        if (index < blocks.length) {
          page = createPage();
          placed = [];
        }
      }

      source.style.display = previousDisplay;
      original.style.width = originalWidth;
      original.style.maxWidth = originalMaxWidth;
      original.style.padding = originalPadding;
      source.style.position = "absolute";
      source.style.top = "0";
      source.style.width = "100%";
      source.style.visibility = "hidden";
      source.style.pointerEvents = "none";
      source.classList.add("print:hidden");
      source.setAttribute("aria-hidden", "true");
      source.inert = true;
      original.removeAttribute("data-a4-page");
      original.setAttribute("data-a4-measure", "");
    };

    const schedule = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => paginate());
    };
    const observer = new ResizeObserver(schedule);
    const printMedia = window.matchMedia("print");
    const onPrintMediaChange = () => {
      if (printMedia.matches) paginate(true);
      else schedule();
    };
    const beforePrint = () => paginate(true);
    observer.observe(original);
    window.addEventListener("resize", schedule);
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", schedule);
    printMedia.addEventListener("change", onPrintMediaChange);
    source.addEventListener("load", schedule, true);
    document.fonts.addEventListener("loadingdone", schedule);
    void document.fonts.ready.then(schedule);
    schedule();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", schedule);
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", schedule);
      printMedia.removeEventListener("change", onPrintMediaChange);
      source.removeEventListener("load", schedule, true);
      document.fonts.removeEventListener("loadingdone", schedule);
    };
  }, [children]);

  return (
    <div data-a4-pagination className="relative min-w-0 w-full">
      <div ref={sourceRef}>
        <A4Page className="break-keep">{children}</A4Page>
      </div>
      <div ref={outputRef} data-a4-output className="grid min-w-0 grid-cols-1 justify-items-center gap-6 print:block" />
    </div>
  );
}
