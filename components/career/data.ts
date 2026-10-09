import type { ResumeExperienceProps } from "../resume/resume-experience";

// docs/경력기술.md 기준으로 작성한 경력기술서 전용 데이터입니다.
// 회사 재직 기간과 직책은 기존 이력서 정보를 기준으로 합니다.
// 팀의 description 배열에 회사별 업무 소개를 여러 항목으로 입력합니다.
// 프로젝트의 techStack 배열에 사용 기술을 추가합니다. 빈 배열은 표시하지 않습니다.
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
        ],
        projects: [
          {
            name: "정산,발주 시스템 유지보수 및 리팩터링",
            period: "2026.06",
            description: "기존 프로그램의 레거시 코드를 리팩토링하고 유지보수",
            contributionRate: 100,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Django 기반 백엔드 API 개발 및 기존 프로그램의 레거시 코드 리팩토링 및 유지보수",
                  "React 기반 Client UI 개선 및 기능 개선/추가",
                ],
              },
            ],
            techStack: ["Python", "Django", "React", "MySQL"],
          },
          {
            name: "크롬 익스텐션 기반 데이터 수집 서비스",
            period: "2026.08 ~ 2026.09",
            description: "크롬 익스텐션을 활용한 데이터 크롤링 서비스",
            contributionRate: 100,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "작업 프로세스 설계",
                  "서버 배포 및 수집 기기(노트북) 환경 구성",
                ],
              },
            ],
            techStack: ["javascript", "Nestjs", "PostgreSQL", "Prisma"],
          },
          {
            name: "사내 ERP 개발",
            period: "2026.07 ~ 2026.08",
            description:
              "정산관리,연차관리,영업 DB 관리 등 사내에서 필요한 기능을 모아놓은 ERP 시스템",
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
            contributionRate: 80,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Next.js 기반 주요 화면 구현 및 기능 개발",
                  "Coolify + Docker를 활용한 운영 환경 배포",
                ],
              },
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
        ],
        projects: [
          {
            name: "[AX 전환] 기획 문서 자동 생성 툴",
            period: "2026.03 ~ 2026.04",
            description:
              "LLM + Mastra Agent를 활용하여 기획 문서를 자동으로 생성하는 웹 서비스",
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
            ],
            techStack: ["Angular", "Nx", "Electron", "Mastra"],
          },
          {
            name: "[AX 전환] AI 기반 코드베이스 분석 툴",
            period: "2026.03 ~ 2026.04",
            description:
              "LLM + Mastra Agent를 활용하여 코드베이스를 분석하고, 분석 결과를 시각화하여 보여주는 데스크탑 앱",
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
            ],
            techStack: ["Angular", "Nx", "Electron", "Mastra"],
          },
          {
            name: "AI 기반 프로젝트·서비스 기획 관리 도구",
            period: "2026.02 ~ 2026.05",
            description:
              "프로젝트 진행 상황과 서비스 기획 문서를 작성하고 공유하는 내부 협업 툴",
            contributionRate: 30,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Angular 기반 앱 디자인 시스템 구축",
                  "화면 설계 및 구현",
                ],
              },
            ],
            techStack: ["Angular", "Prisma", "PostgreSQL", "Nx", "Nestjs"],
          },
          {
            name: "사진 미션 리워드 서비스",
            period: "2025.07 ~ 2025.09",
            description:
              "사진 촬영 미션을 완료하면 리워드를 받을 수 있는 서비스",
            contributionRate: 60,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "사진 촬영, 미션 제출, 리워드 확인 기능 개발",
                  "어드민 개발",
                ],
              },
            ],
            techStack: ["Angular", "Nestjs", "Prisma", "PostgreSQL", "Nx"],
          },
          {
            name: "언어치료 센터 플랫폼",
            period: "2024.12 ~ 2025.12",
            description: "언어치료 센터와 아동의 부모가 사용하는 웹/앱 서비스",
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
            ],
            techStack: ["Google Maps API"],
          },
          {
            name: "신체 기록 관리 서비스",
            period: "2024.07 ~ 2024.09",
            description:
              "사용자가 앱에서 신체 기록을 관리하고 관리자는 웹 어드민에서 데이터를 확인할 수 있는 건강관리 서비스",
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
            ],
            techStack: ["React Native"],
          },
          {
            name: "헬로 유니콘 웹/앱",
            period: "2024.04 ~ 2024.06",
            description: "창업자에게 여러 간편 서비스를 제공하는 플랫폼",
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
            contributionRate: 40,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "주요 화면 UI/UX 점검 및 개선",
                  "Postgresql DB 설계",
                  "Nestjs 기반 REST API 개발",
                ],
              },
            ],
            techStack: ["Nestjs", "PostgreSQL", "Angular", "Prisma", "Nx"],
          },
          {
            name: "여행 상품·콘텐츠 운영 플랫폼",
            period: "2023.10 ~ 2023.12",
            description:
              "여행 상품을 제공하고 운영자가 상품과 콘텐츠를 관리하는 웹 서비스",
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
            ],
            techStack: ["Nestjs", "PostgreSQL", "Angular", "Prisma", "Nx"],
          },
          {
            name: "아동 학습 미니게임 서비스",
            period: "2023.08 ~ 2023.09",
            description:
              "미니게임으로 아동이 더 재밌고 쉽게 언어 학습을 할 수 있게 도와주는 앱 서비스",
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
            ],
            techStack: ["Angular", "Figma", "Storybook", "npm"],
          },
          {
            name: "구글 Ads 기반 마케팅 업무 시스템",
            period: "2023.04 ~ 2023.05",
            description: "Google Ads 인증을 위해 개발한 내부 어드민 툴",
            contributionRate: 30,
            achievements: [
              {
                title: "담당 업무",
                items: [
                  "Angular 화면 구현(프론트엔드 개발)",
                  "앱 디자인 시스템 구축",
                ],
              },
            ],
            techStack: ["Angular"],
          },
          {
            name: "건설사 A/S 앱 및 관리자",
            period: "2023.01 ~ 2023.02",
            description:
              "건설사의 고객이 A/S를 접수하고 처리 현황을 확인하며, 관리자에서 해당 현황을 관리할 수 있는 서비스",
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
            ],
            techStack: ["Vue", "Nuxt", "Pinia"],
          },
          {
            name: "클라이언트 ↔ 프리랜서 매칭 플랫폼",
            period: "2022.04 ~ 2023.12",
            description:
              "클라이언트가 프리랜서를 찾아 계약하고 결제할 수 있는 웹/앱 서비스",
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
            ],
            techStack: ["Angular", "Nestjs", "TypeORM", "PostgreSQL", "Nx"],
          },
        ],
      },
    ],
  },
];
