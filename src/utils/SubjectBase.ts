import z from "zod";

export const SubjectBase = z.object({
	name: z.string().meta({ description: "Название учебного предмета", example: "Алгебра" })
});

export type ISubjectBase = z.input<typeof SubjectBase>;
