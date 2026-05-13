import z from "zod";

export const HomeworkFile = z.object({
	filename: z.string(),
	link: z.httpUrl(),
	toid: z.number()
});

export type IHomeworkFile = z.input<typeof HomeworkFile>;
