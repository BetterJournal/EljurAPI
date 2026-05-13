import z from "zod";
import { UserDataBase } from "@/utils";
import { Homework, HomeworkFile } from "@/resources";

export const SubjectHomework = z.object({
	files: z.array(HomeworkFile).optional(),
	homework: z.record(
		z.number(),
		Homework.pick({
			id: true,
			individual: true,
			value: true
		})
	),
	name: z.string()
});

export type ISubjectHomework = z.input<typeof SubjectHomework>;

export const HomeworkDay = z.object({
	items: z.record(z.string(), SubjectHomework),
	name: z.string(),
	title: z.string()
});

export type IHomeworkDay = z.input<typeof HomeworkDay>;

export const HomeworkRecord = UserDataBase.extend({
	days: z.record(z.string(), HomeworkDay)
});

export type IHomeworkRecord = z.input<typeof HomeworkRecord>;
