import z from "zod";
import { DiaryDay, DiaryDayRings } from "./DiaryDayModel";
import { UserDataBase } from "@/utils";

export const DiaryRecord = UserDataBase.extend({
	days: z.record(z.string(), DiaryDay),
	parent_signed: z.boolean()
});

export type IDiaryRecord = z.input<typeof DiaryRecord>;

export const DiaryRecordRings = DiaryRecord.extend({
	days: z.record(z.string(), DiaryDayRings)
});

export type IDiaryRecordRings = z.input<typeof DiaryRecordRings>;
