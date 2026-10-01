import type { ResumeActivitiesProps } from "./resume-activities";
import type { ResumeExperienceProps } from "./resume-experience";

export const resumeExperiences: ResumeExperienceProps[] = [
  {
    company: "업투유",
    period: "2026.06 ~ NOW",
    teams: [
      {
        name: "개발팀",
        description: "업투유 서비스 개발 및 운영",
        period: "2026.06 ~ NOW",
        projects: [],
      },
    ],
  },
];

export const resumeActivities: ResumeActivitiesProps = {
  description: "커뮤니티, 발표, 교육, 출판 등 다양한 경험을 소개합니다.",
  groups: [
    {
      title: "커뮤니티",
      items: [
        {
          title: "팀빌더",
          period: "2026.03 ~ NOW",
          description: "팀의 목표와 운영 과정에서 맡은 역할을 작성해 주세요.",
          bullets: [
            "참여자 온보딩과 지원 경험을 작성해 주세요.",
            "협업과 모임 운영 방식을 작성해 주세요.",
          ],
        },
      ],
    },
  ],
};
