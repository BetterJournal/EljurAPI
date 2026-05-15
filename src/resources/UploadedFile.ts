import z from "zod";
import { StoredFile } from "./StoredFile";

export const UploadedFile = z.object({
	id: z.string(),
	name: StoredFile.shape.filename
});

export type IUploadedFile = z.input<typeof UploadedFile>;
