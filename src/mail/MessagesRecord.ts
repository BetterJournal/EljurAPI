import z from "zod";
import { MessagePreview } from "@/resources";

export const MessagesRecord = z.object({
	messages: z.array(MessagePreview),
	count: z.number(),
	total: z.coerce.number<string>()
});

export type IMessagesRecord = z.input<typeof MessagesRecord>;
