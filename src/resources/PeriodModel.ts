import z from "zod";
import { Week } from "./Week";

export const Period = z.object({
	ambigious: z.unknown(),
	disabled: z.unknown(),
	end: z.string(),
	fullname: z.string(),
	name: z.string(),
	start: z.string()
});

export type IPeriod = z.input<typeof Period>;

export const PeriodWeeks = Period.extend({
	weeks: z.array(Week)
});

export type IPeriodWeeks = z.input<typeof PeriodWeeks>;
