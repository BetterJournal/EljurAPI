import z from "zod";
import { Message } from "@/resources";

export const MessageInfoRecord = z.object({
	message: Message
});

export type IMessageInfoRecord = z.infer<typeof MessageInfoRecord>;
