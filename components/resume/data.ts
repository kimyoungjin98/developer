import type { ResumeActivitiesProps } from "./resume-activities";
import type { ResumeExperienceProps } from "./resume-experience";
import type { ResumeHeaderProps } from "./resume-header";
import type { ResumeEducationItem } from "./resume-education";

export type ResumePortfolioProject = {
  name: string;
  period: string;
  type: string;
  description: string;
  contribution: string;
  techStack: string[];
  roles: string[];
  teamSize?: number;
  contributionRate?: number;
  link?: string;
};

// 참고: ../info/data/info.ts, career.ts, portfolios.ts 및 content/portfolio/의 상세 기록
export const resumeHeader: ResumeHeaderProps = {
  name: "김영진",
  role: "풀스택 개발자",
  summary: `React, Angular, NestJS, TypeScript 기반의 5년차 풀스택 개발자로,
최근에는 AI 에이전트 주도 개발 시대에 발맞춰, 초반 설계를 어떻게 해야
일관성 있는 작업이 가능한지에 대해 고민하며 개발하고 있습니다.
또한 단순히 기능 구현에 그치지 않고,
개발자와 사용자 모두에게 편리한 UI/UX를 제공하기 위해 노력하고 있습니다.`,
  contacts: [
    { label: "Contact", value: "010-9456-0400", href: "tel:01094560400" },
    {
      label: "Email",
      value: "gyu250@naver.com",
      href: "mailto:gyu250@naver.com",
    },
    {
      label: "GitHub",
      value: "kimyoungjin98",
      href: "https://github.com/kimyoungjin98",
    },
    {
      label: "Blog",
      value: "https://blog.dudzpsdb.com",
      href: "https://blog.dudzpsdb.com",
    },
  ],
};

export const resumeExperiences: ResumeExperienceProps[] = [
  {
    company: "업투유",
    period: "2026.06 ~ NOW",
    teams: [
      {
        name: "개발팀",
        description:
          "풀스택 개발자로 마케팅 관련 웹 서비스를 설계하고 개발·배포·운영하고 있습니다.",
        period: "2026.06 ~ NOW",
        projects: [
          {
            name: "사내 ERP 개발",
            description:
              "요구 사항 정의 / 화면 설계 / 기능 개발을 담당했습니다.",
            techStack: [
              "Next.js",
              "NestJS",
              "PostgreSQL",
              "Prisma",
              "TanStack Query",
              "TanStack Form",
              "Zustand",
              "Orval",
            ],
            achievements: [
              {
                title: "확장성을 고려한 아키텍처 설계",
                items: [
                  "자사 뿐만 아니라 다른 기업에서도 사용할 수 있음을 고려하여 확장성 있는 데이터 모델을 설계했습니다.",
                  "Next.js와 NestJS에서 공통으로 사용할 수 있는 유틸리티와 타입을 정의하고, 프론트엔드와 백엔드에서 재사용했습니다.",
                  "AI 에이전트 또는 개발자가 쉽게 작업할 수 있도록 공통 컴포넌트와 유틸리티를 개발했습니다.",
                ],
              },
              {
                title: "공통 처리 구조와 외부 서비스 연동",
                items: [
                  "OpenAPI 명세와 Orval로 API 호출 코드를 자동 생성하고 TanStack Query로 호출 상태를 관리했습니다.",
                  "NestJS 데코레이터·인터셉터·핸들러로 알림·로그 이벤트 선언과 실행 처리를 분리했습니다.",
                ],
              },
              {
                title: "외부 API 연동",
                items: [
                  "Barobill 전자세금계산서 API를 연동하여 세금계산서 발행/역발행과 조회 기능을 구현했습니다.",
                ],
              },
              {
                title: "MCP 서버 구축",
                items: [
                  "MCP 서버를 구축하여 사용자가 ChatGPT 또는 CLAUDE와 대화하며 업무를 처리할 수 있는 기능을 구현하여 사용성을 높였습니다.",
                ],
              },
            ],
          },
          {
            name: "사내 서버 구축",
            description: "사내 서버를 구축하고 배포·운영을 담당했습니다.",
            techStack: ["AWS", "Docker", "Coolify", "GitHub Actions"],
            achievements: [
              {
                title: "서버 구축",
                items: [
                  "AWS EC2 인스턴스와 Load Balancer를 설정였습니다.",
                  "Docker와 Coolify를 사용하여 서비스를 컨테이너화하고 배포했습니다.",
                  "보안 그룹을 설정하여 외부 접근을 제한하고, SSH 키를 사용하여 안전하게 서버에 접속하도록 구성했습니다.",
                  "탄력적 IP를 설정하여 서버 주소를 고정하였습니다.",
                ],
              },
              {
                title: "공격 방지",
                items: [
                  "fail2ban을 설치하여 SSH 공격을 방지하고, UFW를 사용하여 불필요한 포트를 차단했습니다.",
                ],
              },
            ],
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
        name: "선임 개발자",
        description:
          "프로덕트를 개발 및 팀원들이 프로젝트를 원활하게 진행할 수 있도록 지원했습니다.",
        period: "2025.05 ~ 2026.05",
        projects: [
          {
            name: "사진 미션 리워드 서비스",
            description:
              "사용자가 사진 촬영 미션을 완료하면 리워드를 받을 수 있는 서비스를 개발했습니다.",
            techStack: ["Nx", "Angular", "Nest.js", "PostgreSQL", "Prisma"],
          },
        ],
      },
      {
        name: "개발팀 팀장",
        description:
          "팀원들을 관리하고 프로젝트를 총괄하며, 개발과 설계, 배포와 유지보수까지 담당했습니다.",
        period: "2023.10 ~ 2025.04",
        projects: [
          {
            name: "Angular 기반 사내 디자인 시스템",
            description:
              "여러 프로젝트에서 반복되던 컴포넌트 개발과 UI 불일치를 줄이기 위해 첫 버전의 디자인·개발을 총괄했습니다.",
            techStack: ["Angular", "Figma", "Storybook", "npm"],
            achievements: [
              {
                title: "기획 및 디자인",
                items: [
                  "타사의 UI 또는 디자인 시스템을 참고하여, 프로젝트에서 반복되는 UI를 정리하고 공통 컴포넌트와 디자인 규칙을 정의했습니다.",
                  "Figma를 사용하여 디자인 시안을 만들고, Storybook으로 컴포넌트를 문서화했습니다.",
                ],
              },
              {
                title: "개발 및 배포",
                items: [
                  "Angular 라이브러리로 공통 컴포넌트를 개발하고, Storybook으로 문서화했습니다.",
                  "npm 패키지로 배포하여 여러 프로젝트에서 재사용할 수 있도록 했습니다.",
                ],
              },
            ],
          },
          {
            name: "건설사 A/S 앱·관리자 개발",
            description:
              "A/S 접수·처리 현황을 제공하는 앱을 개발하고, 이후 관리자 화면의 공통 UI와 조회 성능을 개선했습니다.",
            techStack: [
              "Vue",
              "Nuxt UI",
              "NestJS",
              "PostgreSQL",
              "Prisma",
              "Capacitor",
              "Ionic",
            ],
            achievements: [
              {
                title: "공통 UI 개발",
                items: [
                  "Vue와 Nuxt UI를 사용하여 공통 UI 컴포넌트를 개발하고, 앱과 관리자 화면에서 재사용했습니다.",
                ],
              },
              {
                title: "조회 성능 개선",
                items: [
                  "중복 조회 요청과 서버의 불필요한 처리를 줄이고 초기 조회 API를 5개에서 2개로 통합했습니다.",
                  "목록 10개를 표시하는 첫 페이지 데이터 로드 시간을 약 3~5초에서 약 2초로 단축했습니다.",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "개발팀 팀원",
        period: "2022.03 ~ 2026.05",
        description:
          "SI 프로젝트에서 요구사항 정리부터 화면·데이터 설계, 웹·모바일·API 개발, 배포와 유지보수까지 담당했습니다.",
        projects: [
          {
            name: "웹·모바일 서비스 개발",
            description:
              "언어치료, 프리랜서 매칭, 여행·창업 정보 등 다양한 도메인의 사용자 웹·앱과 운영 관리자, 공통 REST API를 개발했습니다.",
            techStack: [
              "TypeScript",
              "Angular",
              "React",
              "React Native",
              "NestJS",
              "PostgreSQL",
              "Prisma",
              "Nx",
              "Capacitor",
            ],
            achievements: [
              {
                title: "서비스 구현과 운영",
                items: [
                  "언어치료 플랫폼의 치료 데이터 구조와 API, 웹·모바일 기능을 설계하고 개발했습니다.",
                  "프리랜서 매칭 플랫폼의 회원 탐색·계약·결제 기능과 전자계약·세금계산서·소셜 로그인 API를 연동했습니다.",
                  "iOS·Android 앱의 스토어 출시·업데이트와 Linux·AWS EC2·S3·Load Balancer·CloudFront 기반 배포 환경을 운영했습니다.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const resumeActivities: ResumeActivitiesProps = {
  description: "커뮤니티 활동과 직접 기획·개발한 프로젝트입니다.",
  groups: [
    {
      title: "커뮤니티",
      items: [
        {
          title: "팀빌더",
          period: "2026.03 ~ NOW",
          description:
            "개발자 2명과 기획자 1명이 함께 프로젝트를 기획하고 개발하는 소규모 커뮤니티입니다.",
          bullets: [
            "AI 에이전트 주도 개발과 설계에 대한 경험을 공유하고 있습니다.",
            "해커톤 참여와 프로젝트를 기획하고 개발하며, 개발자와 기획자 간 협업 경험을 쌓고 있습니다.",
          ],
        },
      ],
    },
    {
      title: "사이드 프로젝트",
      items: [
        {
          title: "[앱인토스] 소비기한 알림 서비스 프레시킵 ",
          period: "2026.09",
          description:
            "식품의 소비기한을 등록하고 알림을 받는 토스 미니 앱을 1인 기획·디자인·개발했습니다.",
          bullets: [
            "React·NestJS·PostgreSQL·Prisma 기반으로 프론트엔드, 백엔드와 데이터베이스를 구현했습니다.",
            "TDS 기반 UI를 설계하고, 토스 미니 앱으로 배포했습니다.",
            "Codex Agent를 활용해 코드의 95% 이상을 자동 생성하고, 생성된 코드와 주요 로직을 검수했습니다.",
          ],
        },
      ],
    },
  ],
};

export const resumeEducation: ResumeEducationItem[] = [
  {
    name: "한국방송통신대학교",
    major: "컴퓨터과학과",
    period: "2023.03 ~ 2026.08",
    description: "컴퓨터과학과 학사 졸업",
  },
];

export const resumePortfolios: ResumePortfolioProject[] = [
  {
    name: "AI 기반 프로젝트·서비스 기획 관리 도구",
    period: "2026.02 —",
    type: "웹",
    description:
      "프로젝트 진행 상황과 서비스 기획 문서를 작성하고 공유하는 내부 협업 도구입니다.",
    contribution:
      "프로젝트와 기획 문서를 업무 단위로 묶는 구조를 정하고 UI와 데이터 모델을 설계했습니다. 코드의 95% 이상은 AI 에이전트로 작성했으며, 결과가 작업마다 달라지는 문제를 줄이기 위해 개발 규칙과 디자인 기준을 문서로 만들고 생성된 코드와 주요 로직을 검수했습니다.",
    techStack: ["Angular", "Prisma", "PostgreSQL", "Nx", "Nest.js"],
    roles: ["프론트엔드 개발", "백엔드 개발", "데이터베이스 설계", "UI 디자인"],
    teamSize: 2,
    contributionRate: 50,
  },
  {
    name: "사진 미션 리워드 서비스",
    period: "2025.07 — 2025.09",
    type: "웹·앱·관리자",
    description:
      "사용자가 사진 촬영 미션을 완료하면 리워드를 받을 수 있는 서비스입니다. 관리자는 미션과 참여 내역을 확인합니다.",
    contribution:
      "모바일 앱에서 사진 촬영, 미션 제출, 리워드 확인 기능을 개발했습니다. 미션 조건과 참여 결과를 관리하는 웹 관리자와 리워드 처리 API도 맡았습니다.",
    techStack: [
      "Nx",
      "Angular",
      "Nest.js",
      "PostgreSQL",
      "Prisma",
      "Capacitor",
    ],
    roles: [
      "프론트엔드 개발",
      "백엔드 개발",
      "데이터베이스 설계",
      "모바일 앱 개발",
    ],
    teamSize: 2,
    contributionRate: 80,
    link: "https://zikssion.com/login",
  },
  {
    name: "말이랑 — 언어치료 플랫폼",
    period: "2024.12 — 2025.12",
    type: "웹·iOS·Android",
    description:
      "언어치료 관련 기능을 웹과 iOS·Android 앱으로 제공하고, 관리자가 치료 데이터와 회원 정보를 관리하는 서비스입니다.",
    contribution:
      "웹과 iOS·Android 앱의 사용자 기능을 개발했습니다. 치료 데이터를 공통으로 사용할 수 있도록 데이터베이스와 API를 설계하고 운영 관리자 기능을 구현했습니다.",
    techStack: [
      "Prisma",
      "PostgreSQL",
      "Nest.js",
      "Angular",
      "Nx",
      "Capacitor",
    ],
    roles: [
      "프론트엔드 개발",
      "백엔드 개발",
      "데이터베이스 설계",
      "모바일 앱 개발",
    ],
    teamSize: 3,
    contributionRate: 70,
    link: "https://malirang.com/",
  },
  {
    name: "Google Maps 기반 베트남 여행 예약 플랫폼",
    period: "2024.10 — 2024.11",
    type: "웹",
    description:
      "베트남 여행 상품을 위치 기반으로 탐색하고 예약할 수 있는 사용자 웹과 운영 관리자 시스템입니다.",
    contribution:
      "Google Maps API를 연동해 지도에서 장소와 여행 상품을 찾는 화면을 만들었습니다. 예약 기능과 상품·예약 관리자, 관련 백엔드 API를 개발했습니다.",
    techStack: ["Prisma", "PostgreSQL", "Nest.js", "Angular", "Nx"],
    roles: [
      "프론트엔드 개발",
      "백엔드 개발",
      "데이터베이스 설계",
      "외부 API 연동",
    ],
    teamSize: 2,
    contributionRate: 60,
  },
  {
    name: "바디체크 — 신체 기록 관리 서비스",
    period: "2024.07 — 2024.09",
    type: "웹·iOS·Android",
    description:
      "사용자가 모바일에서 신체 기록을 관리하고, 운영자가 웹 관리자에서 회원과 서비스 데이터를 확인하는 건강관리 서비스입니다.",
    contribution:
      "사용자가 신체 기록을 입력하고 조회하는 웹·모바일 화면과 회원 관리 기능, 백엔드 API를 개발했습니다. 소셜 로그인을 연동하고 iOS·Android 앱 빌드와 스토어 출시를 담당했습니다.",
    techStack: ["Nest.js", "PostgreSQL", "Prisma", "React", "React Native"],
    roles: [
      "프론트엔드 개발",
      "백엔드 개발",
      "데이터베이스 설계",
      "외부 API 연동",
      "모바일 앱 개발",
      "앱 빌드·스토어 출시",
    ],
    teamSize: 2,
    contributionRate: 70,
    link: "https://play.google.com/store/apps/details?id=com.apayu.application&hl=ko",
  },
  {
    name: "헬로 유니콘 웹/앱",
    period: "2024.04 — 2024.06",
    type: "웹·iOS·Android",
    description:
      "사용자용 웹과 iOS·Android 앱, 운영 관리자까지 함께 개발한 프로젝트입니다.",
    contribution:
      "사용자 화면과 관리자, 백엔드 API, 소셜 로그인을 개발하고 모바일 앱을 배포했습니다. AWS S3·EC2·Load Balancer·CloudFront로 파일 전송과 서버 운영 환경을 구성했습니다.",
    techStack: [
      "Nx",
      "Prisma",
      "Angular",
      "PostgreSQL",
      "Nest.js",
      "Capacitor",
      "Ionic",
      "AWS",
    ],
    roles: [
      "프론트엔드 개발",
      "백엔드 개발",
      "데이터베이스 설계",
      "외부 API 연동",
      "모바일 앱 개발 및 배포",
      "인프라 구성·배포",
    ],
    teamSize: 1,
    contributionRate: 100,
    link: "https://hellounicorn.site/",
  },
  {
    name: "광주스타트업플랫폼",
    period: "2023.12 — 2024.03",
    type: "웹",
    description:
      "광주 지역의 창업 지원 정보와 소식을 제공하는 공공 웹사이트입니다.",
    contribution:
      "창업 지원 정보와 소식을 조회하는 사용자 화면을 만들었습니다. 게시물 등록·수정·노출 관리 기능과 콘텐츠 조회 API를 개발했습니다.",
    techStack: ["Nest.js", "PostgreSQL", "Angular", "Prisma", "Nx"],
    roles: ["프론트엔드 개발", "백엔드 개발", "데이터베이스 설계"],
    teamSize: 3,
    contributionRate: 40,
    link: "https://gwangju-startup.kr/",
  },
  {
    name: "여행 상품·콘텐츠 운영 플랫폼",
    period: "2023.10 — 2023.12",
    type: "웹",
    description:
      "사용자에게 여행 상품 정보를 제공하고 운영자가 상품과 게시 콘텐츠를 관리하는 웹 서비스입니다.",
    contribution:
      "여행 상품 목록과 상세 화면을 만들고 상품·게시물 등록 및 노출을 관리하는 관리자 기능을 개발했습니다. 관련 데이터베이스와 API 설계도 담당했습니다.",
    techStack: ["Nx", "Angular", "Prisma", "PostgreSQL", "Nest.js"],
    roles: ["프론트엔드 개발", "백엔드 개발", "데이터베이스 설계"],
    teamSize: 3,
    contributionRate: 40,
  },
  {
    name: "아동 학습 미니게임 서비스",
    period: "2023.08 — 2023.09",
    type: "웹·앱",
    description:
      "아동이 미니게임으로 학습하고 보호자와 관리자가 학습 결과를 확인하는 웹·모바일 서비스입니다.",
    contribution:
      "모바일 앱 구조와 주요 화면을 개발했습니다. Phaser 3로 미니게임 4종을 만들고 게임 결과를 저장하고 조회하는 백엔드 기능을 구현했습니다.",
    techStack: [
      "Nx",
      "Angular",
      "Prisma",
      "PostgreSQL",
      "Nest.js",
      "Phaser",
      "Capacitor",
    ],
    roles: [
      "프론트엔드 개발",
      "백엔드 개발",
      "데이터베이스 설계",
      "모바일 앱 개발 및 배포",
    ],
    teamSize: 2,
    contributionRate: 60,
  },
  {
    name: "구글 Ads 기반 마케팅 업무 시스템",
    period: "2023.04 — 2023.05",
    type: "웹",
    description: "Google Ads 인증을 위해 개발한 내부 관리자 웹 시스템입니다.",
    contribution:
      "Angular 프로젝트의 기본 구조를 잡고 표, 검색 조건, 입력 화면 등 관리자에서 반복해서 사용하는 공통 컴포넌트를 만들었습니다.",
    techStack: ["Angular"],
    roles: ["프론트엔드 개발", "디자인 시스템 구축"],
    teamSize: 2,
    contributionRate: 40,
  },
  {
    name: "광고 통합 관리 시스템",
    period: "2022.09 — 2022.11",
    type: "웹",
    description:
      "Google·Meta·Naver의 광고 데이터를 한 화면에서 조회하는 내부 관리 서비스입니다.",
    contribution:
      "프로젝트 요구사항에 맞춰 사내에서 처음으로 Vue·Nuxt를 도입하고 프론트엔드 기본 구조를 만들었습니다. Pinia로 상태를 관리하고 여러 화면에서 사용하는 공통 컴포넌트를 개발했습니다.",
    techStack: ["Vue", "Nuxt"],
    roles: ["프론트엔드 개발", "디자인 시스템 구축"],
    teamSize: 2,
    contributionRate: 30,
  },
];
