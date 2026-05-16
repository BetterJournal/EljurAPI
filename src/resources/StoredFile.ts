import z from "zod";

export const StoredFile = z.object({
	filename: z.string().meta({ description: "Название файла", example: "example.docx" }),
	link: z.httpUrl().meta({ description: "Ссылка для скачивания файла" })
});

export type IStoredFile = z.input<typeof StoredFile>;
