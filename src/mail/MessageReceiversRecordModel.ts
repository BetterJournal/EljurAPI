import z from "zod";
import { UserInfo } from "@/resources";

export const ReceiversGroup = z.object({
	key: z.string().meta({ description: "Ключ группы. Обычно.. это название на транслите.", example: "specialist" }),
	name: z.string().meta({ description: "Название группы.", example: "Специалисты" }),
	users: z.array(UserInfo).meta({ description: "Пользователи, связанные с этой группой." })
});

export type IReceiversGroup = z.input<typeof ReceiversGroup>;

export const MessageReceiversRecord = z.object({
	groups: z.array(ReceiversGroup).meta({ description: "Группы получателей" })
});

export type IMessageReceiversRecord = z.input<typeof MessageReceiversRecord>;
