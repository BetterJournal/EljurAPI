import z from "zod";
import { Week } from "./Week";

export const Period = Week.pick({
	end: true,
	start: true
}).extend({
	ambigious: z.unknown(),
	disabled: z.unknown(),
	fullname: z.string().meta({ description: "Название периода.", examples: ["I полугодие", "I четверть"] }),
	name: z.string().meta({ description: "Обозначение периода.", example: "I" })
});

export type IPeriod = z.input<typeof Period>;

export const PeriodWeeks = Period.extend({
	weeks: z.array(Week).meta({ description: "Недели данного периода." })
});

export type IPeriodWeeks = z.input<typeof PeriodWeeks>;
