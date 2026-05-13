import z from "zod";
import { Absent, Assessment, Homework, HomeworkFile } from "@/resources";

const Mark = Assessment.extend({
	control_type: z.string(),
	control_type_short: z.string()
}).or(Absent);

export const LessonItem = z.object({
	assessments: z.array(Mark).optional(),
	files: z.array(HomeworkFile),
	grp: z.string().optional(),
	grp_short: z.string().optional(),
	homework: z.record(z.number(), Homework),
	is_control: z.boolean(),
	lesson_id: z.coerce.number<string>(),
	name: z.string(),
	num: z.coerce.number<string>(),
	payload_course_id: z.unknown(),
	payload_id: z.unknown(),
	payload_name: z.unknown(),
	payload_type: z.unknown(),
	resources: z.array(z.unknown()),
	room: z.string(),
	sort: z.number(),
	teacher: z.string(),
	topic: z.string().optional()
});

export type ILessonItem = z.input<typeof LessonItem>;

export const LessonItemRings = LessonItem.extend({
	endtime: z.string(),
	starttime: z.string()
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
