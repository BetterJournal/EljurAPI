import z from "zod";
import { Week } from "./Week";

export const Period = Week.pick({
	end: true,
	start: true
}).extend({
	ambigious: z.unknown(),
	disabled: z.unknown(),
	fullname: z.string(),
	name: z.string()
});

export type IPeriod = z.input<typeof Period>;

export const PeriodWeeks = Period.extend({
	weeks: z.array(Week)
});

export type IPeriodWeeks = z.input<typeof PeriodWeeks>;
