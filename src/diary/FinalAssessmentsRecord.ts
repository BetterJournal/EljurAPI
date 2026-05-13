import z from "zod";
import { SubjectBase, UserDataBase } from "@/utils";
import { FinalAssessment } from "@/resources";

export const SubjectFinalAssessments = SubjectBase.extend({
	assessments: z.array(FinalAssessment)
});

export type ISubjectFinalAssessments = z.input<typeof SubjectFinalAssessments>;

export const FinalAssessmentsRecord = UserDataBase.extend({
	items: z.array(z.object(FinalAssessment))
});

export type IFinalAssessmentsRecord = z.input<typeof FinalAssessmentsRecord>;
