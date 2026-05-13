import z from "zod";

export const Week = z.object({
	end: z.string(),
	start: z.string(),
	title: z.string()
});

export type IWeek = z.input<typeof Week>;
