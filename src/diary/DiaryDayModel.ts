import z from "zod";
import { LessonExtraItem, LessonExtraItemRings, LessonItem, LessonItemRings } from "./DiaryItemModel";

export const DiaryDay = z.object({
	alert: z
		.string()
		.optional()
		.meta({ description: "Какая-либо пометка. Это может быть сегодняшний день, выходной или ещё что-то.", examples: ["today", "holiday"] }),
	holiday_name: z.string().optional().meta({ description: "Название выходного. Обычно, появляется при alert=holiday.", example: "9 мая" }),
	items: z.record(LessonItem.shape.num, LessonItem),
	items_extday: z.array(LessonExtraItem).optional().meta({ description: "Дополнительные уроки. Курсы, занятия, разговоры о важном..." }),
	name: z.string().meta({ description: "Дата YYYYMMDD" }),
	title: z.string().meta({ description: "День недели" })
});

export type IDiaryDay = z.input<typeof DiaryDay>;

export const DiaryDayRings = DiaryDay.extend({
	items: z.record(LessonItemRings.shape.num, LessonItemRings),
	items_extday: z.array(LessonExtraItemRings).optional().meta({ description: "Дополнительные уроки. Курсы, занятия, разговоры о важном..." })
});

export type IDiaryDayRings = z.input<typeof DiaryDayRings>;
