import z from "zod";

export const Homework = z.object({
	id: z.number().meta({ description: "ID домашней работы относительно дня" }),
	lesson: z.string().optional().meta({ description: "Название урока", example: "Алгебра" }),
	individual: z.boolean().meta({ description: "Задано ли индивидуально" }),
	value: z.string().meta({ description: "Содержимое домашней работы", example: "§1" })
});

export type IHomework = z.input<typeof Homework>;
