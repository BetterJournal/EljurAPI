import z from "zod";

export const SubjectBase = z.object({
	name: z.string()
});

export type ISubjectBase = z.input<typeof SubjectBase>;
