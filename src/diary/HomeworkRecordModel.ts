import z from "zod";
import { SubjectBase, UserDataBase } from "@/utils";
import { Homework, HomeworkFile } from "@/resources";

export const SubjectHomework = SubjectBase.extend({
	files: z.array(HomeworkFile).optional(),
	homework: z.record(
		Homework.shape.id,
		Homework.pick({
			id: true,
			individual: true,
			value: true
		})
	)
});

export type ISubjectHomework = z.input<typeof SubjectHomework>;

export const HomeworkDay = z.object({
	items: z.record(SubjectHomework.shape.name, SubjectHomework),
	name: z.string(),
	title: z.string()
});

export type IHomeworkDay = z.input<typeof HomeworkDay>;

export const HomeworkRecord = UserDataBase.extend({
	days: z.record(HomeworkDay.shape.name, HomeworkDay)
});

export type IHomeworkRecord = z.input<typeof HomeworkRecord>;
