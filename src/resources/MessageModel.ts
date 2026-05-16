import z from "zod";
import { UserInfo } from "./UserInfo";
import { HomeworkFile } from "./HomeworkFile";

export const MessagePreview = z.object({
	date: z.string().meta({ description: "Дата сообщения (YYYY-MM-DD HH:MM:SS).", example: "2026-01-01 00:00:00" }),
	id: z.coerce.number().meta({ description: "ID письма." }),
	short_text: z.string().meta({ description: "Начальный отрывок письма (или всё письмо, если оно маленькое)." }),
	subject: z.string().meta({ description: "Тема письма" }),
	unread: z.boolean().meta({ description: "Прочитанно ли письмо" }),
	user_from: UserInfo.pick({
		firstname: true,
		lastname: true,
		middlename: true,
		name: true
	}).meta({ description: "Отправитель" }),
	with_files: z.boolean().meta({ description: "Приложены ли файлы к письму" }),
	with_resources: z.boolean()
});

export type IMessagePreview = z.input<typeof MessagePreview>;

export const Message = MessagePreview.pick({
	date: true,
	id: true,
	short_text: true,
	subject: true,
	user_from: true
}).extend({
	text: z.string().meta({ description: "Содержимое письма" }),
	user_to: z
		.array(
			UserInfo.pick({
				firstname: true,
				lastname: true,
				middlename: true,
				name: true
			})
		)
		.meta({ description: "Получатели" }),
	files: z.array(HomeworkFile.pick({ filename: true, link: true })).optional()
});

export type IMessage = z.input<typeof Message>;
