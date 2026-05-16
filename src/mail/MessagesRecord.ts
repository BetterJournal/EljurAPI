import z from "zod";
import { MessagePreview } from "@/resources";

export const MessagesRecord = z.object({
	messages: z.array(MessagePreview).meta({ description: "Письма." }),
	count: z.number().meta({ description: "Сколько писем представлено." }),
	total: z.coerce.number<string>().meta({ description: "Всего писем." })
});

export type IMessagesRecord = z.input<typeof MessagesRecord>;
