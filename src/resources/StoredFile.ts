import z from "zod";

export const StoredFile = z.object({
	filename: z.string(),
	link: z.httpUrl()
});

export type IStoredFile = z.input<typeof StoredFile>;
