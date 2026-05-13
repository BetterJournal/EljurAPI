import z from "zod";

export const fromEljurAPI = <T extends z.ZodType>(entity: T) =>
	z.object({
		response: z.object({ error: z.string(), result: z.object(), state: z.number() }).or(z.object({ error: z.null(), result: entity, state: z.literal(200) }))
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

export const byStudents = <T extends z.ZodType>(entity: T) => z.object({ students: z.record(z.number(), entity).or(z.array(entity)) });

export type ByStudents<T> = { students: Record<number, T> | T[] };
