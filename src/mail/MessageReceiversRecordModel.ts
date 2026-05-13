import z from "zod";
import { UserInfo } from "@/resources";

export const ReceiversGroup = z.object({
	key: z.string(),
	name: z.string(),
	users: z.array(UserInfo)
});

export type IReceiversGroup = z.input<typeof ReceiversGroup>;

export const MessageReceiversRecord = z.object({
	groups: z.array(ReceiversGroup)
});

export type IMessageReceiversRecord = z.input<typeof MessageReceiversRecord>;
