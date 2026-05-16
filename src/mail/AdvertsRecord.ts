import z from "zod";
import { AdvertPreview } from "@/resources";

export const AdvertsRecord = z.object({
	notices: z.array(AdvertPreview).meta({ description: "Объявления" }),
	count: z.number().meta({ description: "Сколько объявлений представлено." }),
	total: z.number().meta({ description: "Всего объявлений." }),
	total_unread: z.number().meta({ description: "Всего непрочитанных объявлений." })
});

export type IAdvertsRecord = z.input<typeof AdvertsRecord>;
