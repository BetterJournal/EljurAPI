import z from "zod";
import { Assessment } from "./MarkModel";
import { Period } from "./PeriodModel";

export const FinalAssessment = Assessment.pick({
	color_hex: true,
	comment: true,
	convert: true,
	value: true
}).extend({
	period: Period.shape.name
});

export type IFinalAssessment = z.input<typeof FinalAssessment>;
