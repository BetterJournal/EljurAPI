import z from "zod";

export const ByStudentsRecord = <T extends z.ZodType>(entity: T) =>
	z.object({ students: z.record(z.number(), entity).meta({ description: "Результат для пользователей, доступных с вашего аккаунта." }) });

export const ByStudentsArray = <T extends z.ZodType>(entity: T) => z.object({ students: z.array(entity).meta({ description: "Результат для пользователей, доступных с вашего аккаунта." }) });
