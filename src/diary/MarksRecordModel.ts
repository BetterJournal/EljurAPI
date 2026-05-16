import z from "zod";
import { Absent, Assessment } from "@/resources";
import { SubjectBase, UserDataBase } from "@/utils";

const Mark = Assessment.extend({
	lesson_comment: z.unknown(),
	max_mark: z.unknown(),
	mtype: z.object({
		id: z.number(),
		short: z.string(),
		type: z.string()
	})
}).or(
	Absent.extend({
		lesson_comment: z.unknown(),
		max_mark: z.unknown()
	})
);

export const SubjectMarks = SubjectBase.extend({
	average: z.coerce.number<string>(),
	averageConvert: z.number(),
	color_hex: z.unknown(),
	lesson_id: z.coerce.number<string>(),
	marks: z.array(Mark)
});

export type ISubjectMarks = z.input<typeof SubjectMarks>;

export const MarksRecord = UserDataBase.extend({
	lessons: z.array(SubjectMarks)
});

export type IMarksRecord = z.input<typeof MarksRecord>;
