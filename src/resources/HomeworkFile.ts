import z from "zod";
import { Homework } from "./Homework";
import { StoredFile } from "./StoredFile";

export const HomeworkFile = StoredFile.extend({
	toid: Homework.shape.id
});

export type IHomeworkFile = z.input<typeof HomeworkFile>;
