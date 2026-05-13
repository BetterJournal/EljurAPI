import z from "zod";

export const UploadedFile = z.object({
	id: z.string(),
	name: z.string()
});

export type IUploadedFile = z.input<typeof UploadedFile>;
