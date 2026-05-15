import z from "zod";
import { UserInfo } from "./UserInfo";
import { HomeworkFile } from "./HomeworkFile";

export const MessagePreview = z.object({
	date: z.string(),
	id: z.coerce.number(),
	short_text: z.string(),
	subject: z.string(),
	unread: z.boolean(),
	user_from: UserInfo.pick({
		firstname: true,
		lastname: true,
		middlename: true,
		name: true
	}),
	with_files: z.boolean(),
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
	text: z.string(),
	user_to: z.array(MessagePreview.shape.user_from),
	files: z.array(HomeworkFile.pick({ filename: true, link: true })).optional()
});

export type IMessage = z.input<typeof Message>;
