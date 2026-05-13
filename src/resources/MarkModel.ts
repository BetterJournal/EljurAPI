import z from "zod";

const AssessmentBase = z.object({
	color_hex: z.unknown(),
	comment: z.string(),
	convert: z.number(),
	count: z.boolean(),
	countas: z.coerce.number<string>(),
	date: z.string(),
	lesson_id: z.coerce.number<string>(),
	nm: z.coerce.number<string>()
});

export const Assessment = AssessmentBase.extend({
	value: z.coerce.number<string>(),
	weight: z.number(),
	weight_float: z.number()
});

export const Absent = AssessmentBase.extend({
	convert: z.literal(0),
	count: z.literal(false),
	countas: z.literal(0),
	value: z.enum(["н", "оп"])
});

export const Mark = Assessment.or(Absent);

export type IAssessment = z.input<typeof Assessment>;
export type IAbsent = z.input<typeof Absent>;
export type IMark = z.input<typeof Mark>;
