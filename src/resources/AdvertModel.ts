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
	date: z.iso.date(),
	date_actual_before: z.iso.date(),
	user_from_string: z.string(),
	users_to: z.string()
});

export type IAdvertPreview = z.input<typeof AdvertPreview>;

export const Advert = Message.pick({
	date: true,
	id: true,
	short_text: true,
	subject: true,
	text: true,
	user_from: true
}).extend({
	date: AdvertPreview.shape.date,
	date_actual_before: AdvertPreview.shape.date_actual_before,
	user_from_string: AdvertPreview.shape.user_from_string,
	users_to: AdvertPreview.shape.users_to
});

export type IAdvert = z.input<typeof Advert>;
