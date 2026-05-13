import z from "zod";
import { Advert } from "@/resources";

export const AdvertInfoRecord = z.object({
	notice: Advert
});

export type IAdvertInfoRecord = z.input<typeof AdvertInfoRecord>;
