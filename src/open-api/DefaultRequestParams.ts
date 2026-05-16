import z from "zod";

export const DefaultRequestParams = z.object({
	devkey: z.string().meta({ description: "Ключ разработчика (приложения). Обычно представляет собой MD5-хеш.", example: "c4ca4238a0b923820dcc509a6f75849b" }),
	vendor: z.string().meta({ description: "Поддомен образовательного учреждения (ОУ) в системе ЭлЖур.", example: "int" }),
	out_format: z.enum(["json", "xml"]).optional().default("json").meta({ description: `Формат вывода. Устаревший параметр, ибо работает не везде - обычно json.`, deprecated: true })
});
