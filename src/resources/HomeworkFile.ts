import z from "zod";
import { Homework } from "./Homework";

export const HomeworkFile = z.object({
	filename: z.string(),
	link: z.httpUrl(),
	toid: Homework.shape.id
});

export type IHomeworkFile = z.input<typeof HomeworkFile>;
