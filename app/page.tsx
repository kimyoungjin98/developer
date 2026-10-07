import { A4Layout } from "@/components/layout/a4-layout";
import { AutoA4Pages } from "@/components/layout/auto-a4-pages";
import { DocumentToolbar } from "@/components/layout/document-toolbar";
import {
  resumeActivities,
  resumeEducation,
  resumeExperiences,
  resumeHeader,
} from "@/components/resume/data";
import { ResumeActivities } from "@/components/resume/resume-activities";
import { ResumeEducation } from "@/components/resume/resume-education";
import { ResumeExperience } from "@/components/resume/resume-experience";
import { ResumeHeader } from "@/components/resume/resume-header";

export default function Home() {
  return (
    <A4Layout
      toolbar={<DocumentToolbar current="resume" />}
    >
      <AutoA4Pages>
        <ResumeHeader {...resumeHeader} />

        <div className="mt-12 space-y-14">
          {resumeExperiences.map((experience, index) => (
            <ResumeExperience key={index} {...experience} />
          ))}
          <ResumeActivities {...resumeActivities} />
          <ResumeEducation items={resumeEducation} />
        </div>
      </AutoA4Pages>
    </A4Layout>
  );
}
