import z from "zod";
import { AdvertPreview } from "@/resources";

export const AdvertsRecord = z.object({
	notices: z.array(AdvertPreview),
	count: z.number(),
	total: z.number(),
	total_unread: z.number()
});

export type IAdvertsRecord = z.input<typeof AdvertsRecord>;
