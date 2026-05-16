import z from "zod";

const AssessmentBase = z.object({
	color_hex: z.unknown().meta({ description: "В теории должно отображать цвет отметки, например уважительный/больничный пропуск" }),
	comment: z.string().meta({ description: "Комментарий к отметке", example: "Нет работы" }),
	convert: z.number().meta({ description: "Арифметическая оценки, считаемая журналом. При 4 -> 4, при 3/5 -> 4", examples: ["4", "4.5"] }),
	count: z.boolean(),
	countas: z.coerce.number<string>().meta({ description: "Нет данных, вроде отображает тоже самое. Может просто округляет convert или что-то такое." }),
	date: z.iso.date().meta({ description: "Дата получения отметки, YYYY-MM-DD." }),
	lesson_id: z.coerce.number<string>().meta({ description: "ID предмета" }),
	nm: z.coerce.number<string>().meta({ description: "Индекс отметки за тот день" })
});

export const Assessment = AssessmentBase.extend({
	value: z.string().meta({ description: "Полученная оценка.", examples: ["4", "3/5"] }),
	weight: z.number().meta({ description: "Вес оценки (умножение количества).", examples: [1, 2] }),
	weight_float: z.number().meta({ description: "Нет данных, вроде тоже что и weight. Как вообще может быть дробный вес отметки??" })
});

export const Absent = AssessmentBase.extend({
	convert: z.literal(0),
	count: z.literal(false),
	countas: z.literal(0),
	value: z.enum(["н", "оп", "Н", "ОП"]).meta({ description: "Опоздание/Прогул", examples: ["Н", "ОП"] })
});

export const Mark = Assessment.or(Absent);

export type IAssessment = z.input<typeof Assessment>;
export type IAbsent = z.input<typeof Absent>;
export type IMark = z.input<typeof Mark>;
