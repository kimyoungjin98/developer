import { Children, type ReactNode } from "react";

/** 문자열의 **강조** 구문만 처리하고 기존 React 요소는 유지합니다. */
export function renderBoldText(children: ReactNode): ReactNode {
  return Children.map(children, child => {
    if (typeof child !== "string" || !child.includes("**")) return child;

    return child.split(/\*\*([^*]+)\*\*/g).map((part, index) =>
      index % 2 === 1
        ? <strong key={index} className="font-bold">{part}</strong>
        : part,
    );
  });
}
