import z from "zod";
import { Assessment } from "./MarkModel";

export const FinalAssessment = Assessment.pick({
	color_hex: true,
	comment: true,
	convert: true,
	value: true
}).extend({
	period: z.string()
});

export type IFinalAssessment = z.input<typeof FinalAssessment>;
