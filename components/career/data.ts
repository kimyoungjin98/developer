import type { ResumeExperienceProps } from "../resume/resume-experience";

// docs/경력기술.md 기준으로 작성한 경력기술서 전용 데이터입니다.
// 회사 재직 기간과 직책은 기존 이력서 정보를 기준으로 합니다.
// 팀의 description 배열에 회사별 업무 소개를 여러 항목으로 입력합니다.
// 프로젝트의 techStack 배열에 사용 기술을 추가합니다. 빈 배열은 표시하지 않습니다.
// achievements의 문제·해결·성과 items 배열에 내용을 입력하세요. 빈 항목은 화면과 인쇄에서 숨깁니다.
// 기존 성과가 있는 프로젝트는 해당 성과의 items 배열에 추가할 수 있습니다.
// pageBreakBefore: true를 추가하면 해당 프로젝트부터 새 A4 페이지를 시작합니다.
// 지원 공고: 화해글로벌 프로덕트 엔지니어(프론트엔드)
// https://www.wanted.co.kr/wd/390388 (2026-10-09 확인)
// 필수 확인: React·TypeScript 실무 3년 이상, Next.js SSR·SEO, API 설계 협업, 제품 개발 오너십.
// 공고 제출 가이드: 서비스·스토어 URL과 기여 범위, 개선 수치, 성장 공유,
// 개인 프로젝트·블로그 URL, 도메인 이해, 팀 AX 경험 및 성과.
// 작성 질문은 안내이며 경험이 있다는 뜻이 아닙니다. 실제 경험이 있는 항목만 채우세요.
// 성과 수치는 전후 값·측정 조건·기간을 함께 쓰세요. 이벤트 로깅·A/B 테스트·
// Sentry·클라이언트 보안은 실제 경험이 있을 때만 추가하세요.
// 팀 AX는 AI 기능 개발과 구분해 팀 개발 방식의 변화·검증 장치·효과를 적으세요.
export const careerExperiences: ResumeExperienceProps[] = [
  {
    company: "업투유",
    period: "2026.06 ~ NOW",
    teams: [
      {
        name: "풀스택 개발자",
        period: "2026.06 ~ NOW",
        description: [
          "AWS 기반 사내 서버 구축",
          "기존 프로그램의 레커시 코드 리팩토링 및 유지보수",
          "사내 ERP 기획·설계·개발과 코드 품질 관리",
          "사내 홈페이지 디자인·개발과 운영 환경 배포",
          "팀원 온보딩과 기술 공유, 코드 리뷰, GitHub PR 검토 및 품질 관리",
          // 추가 작성: React·TypeScript 실무 기간과 프로젝트별 사용 범위(전체 경력과 구분).
          // 추가 작성: 동료와의 기술 공유·리뷰·온보딩, 팀 AX 시도와 본인의 기여.
        ],
        projects: [
          {
            name: "정산,발주 시스템 유지보수 및 리팩터링",
            period: "2026.06",
            description: "기존 프로그램의 레거시 코드를 리팩토링하고 유지보수",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 기존 Django·React 시스템을 어떤 방법으로 이해했으며 첫 기여까지 얼마나 걸렸나요?
            // 작성 질문: React 화면·상태 관리 개선과 리팩터링의 검증 방법, 변경 전후 수치를 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 100,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Django 기반 백엔드 API 개발 및 기존 프로그램의 레거시 코드 리팩토링 및 유지보수",
                  "React 기반 Client UI 개선 및 기능 개선/추가",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: ["Python", "Django", "React", "MySQL"],
          },
          {
            name: "크롬 익스텐션 기반 데이터 수집 서비스",
            period: "2026.08 ~ 2026.09",
            description: "크롬 익스텐션을 활용한 데이터 크롤링 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 수집 도메인의 제약, 오류 대응과 데이터 중복 방지를 어떻게 설계했나요?
            // 작성 질문: 운영 안정성이나 접근 제어를 검증한 방법이 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 100,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "작업 프로세스 설계",
                  "서버 배포 및 수집 기기(노트북) 환경 구성",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: ["javascript", "Nestjs", "PostgreSQL", "Prisma"],
          },
          {
            name: "사내 ERP 개발",
            period: "2026.07 ~ 2026.08",
            description:
              "정산관리,연차관리,영업 DB 관리 등 사내에서 필요한 기능을 모아놓은 ERP 시스템",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 사용자 업무를 어떻게 파악하고 기능을 제안했으며 배포까지 어떤 범위를 책임졌나요?
            // 작성 질문: AI 개발에 제공한 도메인 문서·규칙, 코드 리뷰·테스트 등의 검증 장치와 팀 효과를 적으세요.
            // 작성 질문: React·TypeScript 화면 설계와 API 계약 논의, 사용자 피드백 또는 지표 검증을 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 70,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Nestjs 기반 백엔드 API 개발 및 기획 및 아키텍처 설계",
                  "Github PR 검토 및 코드 품질 관리",
                  "GitBook을 활용한 ERP 프로그램 가이드 문서 작성",
                  "MCP 서버 구축 및 GPT/Claude 플러그인 개발",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
              { title: "제품 오너십 및 협업", items: [] },
              { title: "팀 AX 및 품질 검증", items: [] },
            ],
            techStack: [
              "Next.js",
              "Nestjs",
              "PostgreSQL",
              "Prisma",
              "TanStack Query",
              "TanStack Form",
              "Zustand",
              "Orval",
            ],
          },
          {
            name: "사내 홈페이지 리뉴얼",
            period: "2026.07 ~ 2026.07",
            description: "사내 홈페이지 개발",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 실제로 적용한 Next.js SSR·SEO 전략과 선택 이유를 적으세요.
            // 작성 질문: React·TypeScript 담당 범위, 배포 이후 확인한 성능·사용성 지표가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 80,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Next.js 기반 주요 화면 구현 및 기능 개발",
                  "Coolify + Docker를 활용한 운영 환경 배포",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
              { title: "SSR·SEO 설계", items: [] },
            ],
            techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          },
        ],
      },
    ],
  },
  {
    company: "레피소드 주식회사",
    period: "2022.03 ~ 2026.05",
    teams: [
      {
        name: "개발팀 팀장",
        period: "2022.03 ~ 2026.05",
        description: [
          "Angular, React, Vue.js, Nestjs를 사용하여 20건 이상의 웹·앱 서비스 개발",
          "AWS, NHN Cloud 기반 서버 구축과 배포 환경 구성",
          "Angular 기반 사내 디자인 시스템의 설계·개발 및 Npm 배포",
          "AX 전환 프로젝트 기획과 개발",
          "사내 개발 환경 개선 및 기술 공유 활동",
          // 추가 작성: React·TypeScript 실무 기간과 프로젝트별 사용 범위(전체 경력과 구분).
          // 추가 작성: 동료와의 기술 공유·리뷰·온보딩, 팀 AX 시도와 본인의 기여.
        ],
        projects: [
          {
            name: "[AX 전환] 기획 문서 자동 생성 툴",
            period: "2026.03 ~ 2026.04",
            description:
              "LLM + Mastra Agent를 활용하여 기획 문서를 자동으로 생성하는 웹 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 팀의 어떤 업무를 개선하려 했으며 에이전트에 도메인 지식을 어떻게 전달했나요?
            // 작성 질문: 생성 결과 검증 방법, 비용·품질·지연 측정과 중단 판단 기준을 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 100,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "AI Agent 주도 개발 및 Mastra Agent 연동",
                  "앱 아키텍처 설계 및 화면 설계",
                  "앱 구축 및 배포",
                ],
              },
              {
                title: "성과",
                items: [
                  "적은 비용으로 방대한 양의 기획 문서를 자동으로 생성할 수 있는 서비스를 구현했지만 한계점으로 인한 프로젝트 중단",
                ],
              },
              {
                title: "한계점",
                items: [
                  "세밀한 컨트롤을 하지 않으면 LLM이 생성한 기획 문서의 품질이 낮아지는 문제",
                  "LLM이 생성한 기획 문서의 품질을 높이기 위해서는 LLM에게 더 많은 컨텍스트를 제공해야 하는데, 이로 인해 비용이 증가하고 병목이 생기는 문제",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "팀 AX 및 검증·중단 판단", items: [] },
            ],
            techStack: ["Angular", "Nx", "Electron", "Mastra"],
          },
          {
            name: "[AX 전환] AI 기반 코드베이스 분석 툴",
            period: "2026.03 ~ 2026.04",
            description:
              "LLM + Mastra Agent를 활용하여 코드베이스를 분석하고, 분석 결과를 시각화하여 보여주는 데스크탑 앱",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 팀이 실제로 사용했는지, 분석 정확도·비용·시간을 어떻게 검증했는지 적으세요.
            // 작성 질문: 본인의 설계·검수 범위와 중단 판단, 이후 개발 프로세스에 반영한 점을 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 100,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "AI Agent 주도 개발 및 Mastra Agent 연동",
                  "앱 아키텍처 설계 및 화면 설계",
                  "앱 구축 및 배포",
                ],
              },
              {
                title: "성과",
                items: [
                  "Gemini Flash 모델을 활용하여 적은 비용으로 빠른 코드 분석이 가능하도록 구현했지만 Claude, Codex 등 모델들의 성능이 좋아지면서 유의미한 성과를 내지 못해 프로젝트를 중단",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "팀 AX 및 검증·중단 판단", items: [] },
            ],
            techStack: ["Angular", "Nx", "Electron", "Mastra"],
          },
          {
            name: "AI 기반 프로젝트·서비스 기획 관리 도구",
            period: "2026.02 ~ 2026.05",
            description:
              "프로젝트 진행 상황과 서비스 기획 문서를 작성하고 공유하는 내부 협업 툴",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 디자인 시스템이 UI 일관성과 AI 코드 생성 품질에 미친 영향을 어떻게 확인했나요?
            // 작성 질문: 기획자·디자이너와 사용자 문제를 정의하고 피드백을 반영한 과정을 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 30,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Angular 기반 앱 디자인 시스템 구축",
                  "화면 설계 및 구현",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
              { title: "제품 오너십 및 협업", items: [] },
            ],
            techStack: ["Angular", "Prisma", "PostgreSQL", "Nx", "Nestjs"],
          },
          {
            name: "사진 미션 리워드 서비스",
            period: "2025.07 ~ 2025.09",
            description:
              "사진 촬영 미션을 완료하면 리워드를 받을 수 있는 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "https://www.zikssion.com/login",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 본인이 책임진 설계·구현·API 연동·배포 범위를 적으세요.
            // 작성 질문: 사용자 문제와 협업 과정, 검증 가능한 개선 결과가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 60,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "사진 촬영, 미션 제출, 리워드 확인 기능 개발",
                  "어드민 개발",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: ["Angular", "Nestjs", "Prisma", "PostgreSQL", "Nx"],
          },
          {
            name: "언어치료 센터 플랫폼",
            period: "2024.12 ~ 2025.12",
            description: "언어치료 센터와 아동의 부모가 사용하는 웹/앱 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "https://malirang.com",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 치료·상담 도메인의 복잡한 요구사항을 어떻게 이해하고 화면·API·DB에 반영했나요?
            // 작성 질문: 사용자·기획자와 협의한 내용, 앱 출시·운영 범위와 개선 효과를 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 80,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "실무 문서 템플릿 10종 제작 및 LLM 기반 문서 자동 생성 기능 개발",
                  "안드로이드/IOS 앱 구축 및 스토어 배포",
                  "Nestjs 기반 REST API 개발",
                  "Angular 기반 웹/앱 구축 및 배포",
                  "PostgreSQL DB 설계",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
              { title: "도메인 이해 및 설계", items: [] },
            ],
            techStack: [
              "Prisma",
              "PostgreSQL",
              "Nestjs",
              "Angular",
              "Nx",
              "Capacitor",
            ],
          },
          {
            name: "베트남 여행 예약 플랫폼",
            period: "2024.10 ~ 2024.11",
            description:
              "베트남 여행 상품을 위치 기반으로 탐색하고 예약할 수 있는 사용자 웹과 어드민 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 본인이 책임진 설계·구현·API 연동·배포 범위를 적으세요.
            // 작성 질문: 사용자 문제와 협업 과정, 검증 가능한 개선 결과가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 50,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Google Maps API 기반 여행 상품 Search 컴포넌트 및 화면 구현",
                  "Angular 기반 어드민 화면 구현",
                  "Postgresql DB 설계",
                  "Nestjs 기반 REST API 개발",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: ["Google Maps API"],
          },
          {
            name: "신체 기록 관리 서비스",
            period: "2024.07 ~ 2024.09",
            description:
              "사용자가 앱에서 신체 기록을 관리하고 관리자는 웹 어드민에서 데이터를 확인할 수 있는 건강관리 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "https://play.google.com/store/apps/details?id=com.apayu.application&hl=ko&pli=1",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: React Native 앱의 설계·개발·스토어 출시 중 본인 책임 범위를 적으세요.
            // 작성 질문: 실제 경험이 있다면 버전 관리·출시 후 운영·성능 개선·오류 모니터링 사례를 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 60,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "React Native 기반 코드 베이스 구축",
                  "회원 관리 API 개발 및 어드민 화면 구현",
                  "일정 관리 API 개발 및 어드민 화면 구현",
                  "신체 기록 입력/조회",
                  "안드로이드/IOS 앱 구축 및 스토어 배포",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
              { title: "스토어 출시 및 운영", items: [] },
            ],
            techStack: ["React Native"],
          },
          {
            name: "헬로 유니콘 웹/앱",
            period: "2024.04 ~ 2024.06",
            description: "창업자에게 여러 간편 서비스를 제공하는 플랫폼",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "https://hellounicorn.site/",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 본인이 책임진 설계·구현·API 연동·배포 범위를 적으세요.
            // 작성 질문: 사용자 문제와 협업 과정, 검증 가능한 개선 결과가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 100,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "화면 구현",
                  "API 개발 및 DB 설계",
                  "앱 구축 및 스토어 배포",
                  "AWS 기반 인프라 구성 및 배포",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: [
              "AWS",
              "Angular",
              "Nestjs",
              "Prisma",
              "PostgreSQL",
              "Nx",
              "Capacitor",
            ],
          },
          {
            name: "광주스타트업플랫폼",
            period: "2023.12 ~ 2024.03",
            description:
              "광주 지역의 창업 지원 정보와 소식을 제공하는 공공 웹 사이트",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "https://gwangju-startup.kr/home",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 본인이 책임진 설계·구현·API 연동·배포 범위를 적으세요.
            // 작성 질문: 사용자 문제와 협업 과정, 검증 가능한 개선 결과가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 40,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Angular 기반 주요 화면 개발 및 기능 구현",
                  "Postgresql DB 설계",
                  "Nestjs 기반 REST API 개발",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: ["Nestjs", "PostgreSQL", "Angular", "Prisma", "Nx"],
          },
          {
            name: "여행 상품·콘텐츠 운영 플랫폼",
            period: "2023.10 ~ 2023.12",
            description:
              "여행 상품을 제공하고 운영자가 상품과 콘텐츠를 관리하는 웹 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 본인이 책임진 설계·구현·API 연동·배포 범위를 적으세요.
            // 작성 질문: 사용자 문제와 협업 과정, 검증 가능한 개선 결과가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 50,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "공지사항, 1:1 문의 등 게시판 API 개발 및 화면 구현",
                  "상품 관리 및 상품 카테고리 관리 API 개발 및 화면 구현",
                  "PostgresqlDB 설계",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: ["Nestjs", "PostgreSQL", "Angular", "Prisma", "Nx"],
          },
          {
            name: "아동 학습 미니게임 서비스",
            period: "2023.08 ~ 2023.09",
            description:
              "미니게임으로 아동이 더 재밌고 쉽게 언어 학습을 할 수 있게 도와주는 앱 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 본인이 책임진 설계·구현·API 연동·배포 범위를 적으세요.
            // 작성 질문: 사용자 문제와 협업 과정, 검증 가능한 개선 결과가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 30,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "PostgresqlDB 설계",
                  "Ionic Capacitor를 활용한 모바일 앱 구축",
                  "Phaser3 + Angular 기반 미니게임 4종 개발",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: [
              "Nx",
              "Angular",
              "Prisma",
              "PostgreSQL",
              "Nestjs",
              "Phaser3",
              "Capacitor",
            ],
          },
          {
            name: "Angular 기반 사내 디자인 시스템",
            period: "2023.06 ~ 2026.05",
            description:
              "사내 프로젝트에서 공용으로 사용하는 Angular 기반 UI 컴포넌트 패키지",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 공통 컴포넌트의 설계 기준, 버전 관리와 변경 영향 검증 방법을 적으세요.
            // 작성 질문: 가이드·리뷰·기술 공유로 동료의 사용과 성장을 지원한 경험과 확인 가능한 결과를 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 90,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "컴포넌트 아키텍처 설계",
                  "Figma 디자인 구성",
                  "Npm 라이브러리 구축 및 배포",
                  "컴포넌트 개발 및 유지보수",
                  "Storybook을 활용한 가이드 문서 작성",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
              { title: "운영 및 성장 공유", items: [] },
            ],
            techStack: ["Angular", "Figma", "Storybook", "npm"],
          },
          {
            name: "구글 Ads 기반 마케팅 업무 시스템",
            period: "2023.04 ~ 2023.05",
            description: "Google Ads 인증을 위해 개발한 내부 어드민 툴",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 본인이 책임진 설계·구현·API 연동·배포 범위를 적으세요.
            // 작성 질문: 사용자 문제와 협업 과정, 검증 가능한 개선 결과가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 30,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Angular 화면 구현(프론트엔드 개발)",
                  "앱 디자인 시스템 구축",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: ["Angular"],
          },
          {
            name: "건설사 A/S 앱 및 관리자",
            period: "2023.01 ~ 2023.02",
            description:
              "건설사의 고객이 A/S를 접수하고 처리 현황을 확인하며, 관리자에서 해당 현황을 관리할 수 있는 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "https://play.google.com/store/apps/details?id=com.samil.application&hl=ko",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 성능 문제 발견 과정, 원인과 해결 방법, 측정 조건을 포함한 전후 수치를 적으세요.
            // 작성 질문: 앱 출시·유지보수와 사용자 경험 개선에서 본인이 책임진 범위를 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 60,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Nuxt3 기반 어드민 개발 및 유지보수",
                  "Ionic 기반 모바일 앱 개발 및 배포",
                  "Postgresql DB 설계",
                  "성능 개선 및 유지보수",
                  "레거시 코드 리팩토링",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
              { title: "성능 측정 및 운영", items: [] },
            ],
            techStack: [
              "Vue",
              "Nuxt3",
              "Nestjs",
              "PostgreSQL",
              "Prisma",
              "Capacitor",
              "Ionic",
            ],
          },
          {
            name: "광고 통합 관리 시스템",
            period: "2022.09 ~ 2022.11",
            description:
              "여러 플랫폼의 광고 데이터를 한 화면에서 조회하는 관리 툴",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 본인이 책임진 설계·구현·API 연동·배포 범위를 적으세요.
            // 작성 질문: 사용자 문제와 협업 과정, 검증 가능한 개선 결과가 있다면 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 30,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Vue3 기반 화면 구현",
                  "컴포넌트 시스템 구축",
                  "외부 라이브러리(Ag-grid, ApexCharts)를 활용한 복잡한 화면 구현",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
            ],
            techStack: ["Vue", "Nuxt", "Pinia"],
          },
          {
            name: "클라이언트 ↔ 프리랜서 매칭 플랫폼",
            period: "2022.04 ~ 2023.12",
            description:
              "클라이언트가 프리랜서를 찾아 계약하고 결제할 수 있는 웹/앱 서비스",
            // 서비스 URL을 입력하면 서비스 이동 버튼이 표시됩니다.
            link: "",
            // 필요한 URL만 입력하세요. 빈 주소는 버튼을 표시하지 않습니다.
            links: [
              { label: "App Store", href: "" },
              { label: "Google Play", href: "" },
              { label: "GitHub", href: "" },
            ],
            // 작성 질문: 계약·결제·세금계산서 도메인의 제약과 API 설계 판단을 적으세요.
            // 작성 질문: 실제 경험이 있다면 인증·토큰 저장·개인정보 보호와 예외 처리 검증 방법을 적으세요.
            // 필요하면 아래 항목의 주석을 해제하고 입력하세요.
            // teamSize: 0, // 함께 개발한 인원 수
            // roles: [], // 직접 담당한 역할
            // contribution: "", // 기여도 산정 범위와 본인 담당 범위
            contributionRate: 70,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Angular 및 Nestjs 기반 프론트/백엔드 개발",
                  "Postgresql DB 설계",
                  "모두싸인 API 연동으로 전자 계약 자동화",
                  "바로빌 API 연동으로 세금계산서 자동 발행",
                  "결제 모듈(아임포트) 연동",
                ],
              },
              { title: "문제", items: [] },
              { title: "해결", items: [] },
              { title: "성과", items: [] },
              { title: "도메인 이해 및 설계", items: [] },
            ],
            techStack: ["Angular", "Nestjs", "TypeORM", "PostgreSQL", "Nx"],
          },
        ],
      },
    ],
  },
];
