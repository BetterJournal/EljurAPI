import z from "zod";

export const FailedResponse = z.object({
	response: z.object({
		error: z.string().meta({ example: "не удалось авторизовать разработчика" }),
		result: z.object(),
		state: z.number().meta({ description: "HTTP Код результат", example: "400" })
	})
});
