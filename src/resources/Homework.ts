import z from "zod";

export const Homework = z.object({
	id: z.number(),
	lesson: z.string().optional(),
	individual: z.boolean(),
	value: z.string()
});

export type IHomework = z.input<typeof Homework>;
