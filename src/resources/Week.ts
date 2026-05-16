import z from "zod";

export const Week = z.object({
	end: z.string().meta({ description: "Дата окончания периода.", example: "20250107" }),
	start: z.string().meta({ description: "Дата начала периода.", example: "20250101" }),
	title: z.string().meta({ description: "Период недели.", example: "01 сентября — 07 сентября" })
});

export type IWeek = z.input<typeof Week>;
