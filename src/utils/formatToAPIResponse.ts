import z from "zod";

export const fromEljurAPI = <T extends z.ZodType>(entity: T) =>
	z.object({
		response: z
			.object({ error: z.string(), result: z.object(), state: z.number().meta({ description: "HTTP Код результат", example: "400" }) })
			.or(z.object({ error: z.null(), result: entity, state: z.literal(200).meta({ description: "HTTP Код результат" }) }))
	});

type EljurAPIResponse<T> =
	| {
			error: string;
			result: {};
			state: number;
	  }
	| {
			error: null;
			result: T;
			state: 200;
	  };

export type FromEljurAPI<T> = { response: EljurAPIResponse<T> };

export const byStudents = <T extends z.ZodType>(entity: T) =>
	z.object({ students: z.record(z.number(), entity).or(z.array(entity)).meta({ description: "Результат для пользователей, доступных с вашего аккаунта." }) });

export type ByStudents<T> = { students: Record<number, T> | T[] };
