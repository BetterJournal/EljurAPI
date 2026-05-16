import z from "zod";
import { Absent, Assessment, Homework, HomeworkFile } from "@/resources";
import { SubjectBase } from "@/utils";

const Mark = Assessment.extend({
	control_type: z.string().meta({ description: "Аббревиатура метода контроля.", examples: ["КР", "ПвР"] }),
	control_type_short: z.string().meta({ description: "Название метода контроля.", examples: ["Контрольная работа", "Проверочная работа"] })
}).or(Absent);

export const LessonItem = SubjectBase.extend({
	assessments: z.array(Mark).optional(),
	files: z.array(HomeworkFile),
	grp: z.string().optional().meta({ example: "Россия - мои горизонты 1а" }),
	grp_short: z.string().optional().meta({ example: "1а" }),
	homework: z.record(Homework.shape.id, Homework),
	is_control: z.boolean(),
	lesson_id: z.coerce.number<string>().meta({ description: "ID учебного предмета." }),
	num: z.coerce.number<string>().meta({ description: "№ урока в рассписании." }),
	payload_course_id: z.unknown(),
	payload_id: z.unknown(),
	payload_name: z.unknown(),
	payload_type: z.unknown(),
	resources: z.array(z.unknown()),
	room: z.string().meta({ description: "Кабинет в котором будет проводится занятие.", examples: ["42", "сп/з"] }),
	sort: z.number(),
	teacher: z.string(),
	topic: z.string().optional()
});

export type ILessonItem = z.input<typeof LessonItem>;

export const LessonItemRings = LessonItem.extend({
	endtime: z.string().meta({ description: "Конец урока.", example: "08:40:00" }),
	starttime: z.string().meta({ description: "Начало урока.", example: "08:00:00" })
});

export type ILessonItemRings = z.input<typeof LessonItemRings>;

export const LessonExtraItem = LessonItem.pick({
	grp: true,
	grp_short: true,
	homework: true,
	name: true,
	sort: true,
	teacher: true,
	topic: true
}).extend({
	homework: z.array(
		Homework.pick({
			id: true,
			individual: true,
			value: true
		})
	)
});

export type ILessonExtraItem = z.input<typeof LessonExtraItem>;

export const LessonExtraItemRings = LessonItemRings.pick({
	endtime: true,
	grp: true,
	grp_short: true,
	homework: true,
	name: true,
	sort: true,
	starttime: true,
	teacher: true,
	topic: true
});

export type ILessonExtraItemRings = z.input<typeof LessonExtraItemRings>;
