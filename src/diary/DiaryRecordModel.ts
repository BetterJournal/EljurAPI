import z from "zod";
import { DiaryDay, DiaryDayRings } from "./DiaryDayModel";
import { UserDataBase } from "@/utils";

export const DiaryRecord = UserDataBase.extend({
	days: z.record(DiaryDay.shape.name, DiaryDay),
	parent_signed: z.boolean()
});

export type IDiaryRecord = z.input<typeof DiaryRecord>;

export const DiaryRecordRings = DiaryRecord.extend({
	days: z.record(DiaryDayRings.shape.name, DiaryDayRings)
});

export type IDiaryRecordRings = z.input<typeof DiaryRecordRings>;
