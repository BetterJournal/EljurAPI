import z from "zod";

export const SuccessResponse = <T extends z.ZodType>(entity: T) =>
	z.object({ response: z.object({ error: z.null(), result: entity, state: z.literal(200).meta({ description: "HTTP Код результат" }) }) });
