import z from "zod";
import { StoredFile } from "./StoredFile";

export const UploadedFile = z.object({
	id: z.string().meta({ description: "ID файла" }),
	name: StoredFile.shape.filename
});

export type IUploadedFile = z.input<typeof UploadedFile>;
