import z from "zod";
import { LessonExtraItem, LessonExtraItemRings, LessonItem, LessonItemRings } from "./DiaryItemModel";

export const DiaryDay = z.object({
	alert: z.string().optional(),
	holiday_name: z.string().optional(),
	items: z.record(LessonItem.shape.num, LessonItem),
	items_extday: z.array(LessonExtraItem).optional(),
	name: z.string(),
	title: z.string()
});

export type IDiaryDay = z.input<typeof DiaryDay>;

export const DiaryDayRings = DiaryDay.extend({
	items: z.record(LessonItemRings.shape.num, LessonItemRings),
	items_extday: z.array(LessonExtraItemRings).optional()
});

export type IDiaryDayRings = z.input<typeof DiaryDayRings>;
