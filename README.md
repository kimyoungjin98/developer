This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

이력서와 경력기술서 내용은 `components/resume/data.ts`에서 관리합니다.
표시할 문자열에 `**강조할 텍스트**`를 작성하면 화면과 인쇄에서 해당 부분이 굵게 표시됩니다.

```ts
description: "React로 **정산 관리 화면**을 개발했습니다.",
items: ["조회 시간을 **3초에서 1초로 단축**했습니다."],
```

`**...**` 강조만 지원하며, 닫히지 않은 표시는 원문 그대로 출력됩니다.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The development and production servers use port 6001: [http://localhost:6001](http://localhost:6001).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
