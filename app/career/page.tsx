import type { Metadata } from "next";
import { CareerDocument } from "@/components/career/career-document";
import { careerExperiences } from "@/components/career/data";
import { A4Layout } from "@/components/layout/a4-layout";
import { AutoA4Pages } from "@/components/layout/auto-a4-pages";
import { DocumentToolbar } from "@/components/layout/document-toolbar";
import { resumeHeader } from "@/components/resume/data";

export const metadata: Metadata = {
  title: `${resumeHeader.name} 경력기술서`,
  description: `${resumeHeader.name} ${resumeHeader.role}의 프로젝트별 담당 업무 및 주요 성과`,
};

export default function CareerPage() {
  return (
    <A4Layout toolbar={<DocumentToolbar current="career" />}>
      <AutoA4Pages documentLabel="경력기술서">
        <CareerDocument header={resumeHeader} experiences={careerExperiences} />
      </AutoA4Pages>
    </A4Layout>
  );
}
