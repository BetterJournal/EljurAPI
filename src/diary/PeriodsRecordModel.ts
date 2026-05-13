import z from "zod";
import { UserDataBase } from "@/utils";
import { Period, PeriodWeeks } from "@/resources";

export const PeriodsRecord = UserDataBase.extend({
	periods: z.array(Period)
});

export type IPeriodsRecord = z.input<typeof PeriodsRecord>;

export const PeriodsRecordWeeks = UserDataBase.extend({
	periods: z.array(PeriodWeeks)
});

export type IPeriodsRecordWeeks = z.input<typeof PeriodsRecordWeeks>;
