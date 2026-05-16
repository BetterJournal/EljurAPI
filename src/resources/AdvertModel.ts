import z from "zod";
import { Message, MessagePreview } from "./MessageModel";

export const AdvertPreview = MessagePreview.pick({
	date: true,
	id: true,
	short_text: true,
	subject: true,
	unread: true,
	user_from: true,
	with_files: true,
	with_resources: true
}).extend({
	date: z.iso.date().meta({ description: "Дата публикации объявления, YYYY-MM-DD" }),
	date_actual_before: z.iso.date().meta({ description: "Объявление актуально до, YYYY-MM-DD" }),
	user_from_string: z.string().meta({ description: "Фамилия и инициалы", example: "Иванов И. И." }),
	users_to: z.string().meta({ description: "Получатели", examples: ["Всей школе", "Родители&nbsp;<span>&middot;</span> Обучающиеся&nbsp;<span>&middot;</span> Учителя"] })
});

export type IAdvertPreview = z.input<typeof AdvertPreview>;

export const Advert = Message.pick({
	date: true,
	id: true,
	short_text: true,
	subject: true,
	text: true,
	user_from: true,
	files: true
}).extend({
	date: AdvertPreview.shape.date,
	date_actual_before: AdvertPreview.shape.date_actual_before,
	user_from_string: AdvertPreview.shape.user_from_string,
	users_to: AdvertPreview.shape.users_to
});

export type IAdvert = z.input<typeof Advert>;
