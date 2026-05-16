import z from "zod";

export const UserInfo = z.object({
	firstname: z.string().meta({ description: "Имя.", example: "Иван" }),
	info: z.string().meta({ description: "Профессия.", examples: ["секретарь", "библиотекарь", "Информатика"] }),
	lastname: z.string().meta({ description: "Фамилия.", example: "Иванов" }),
	middlename: z.string().meta({ description: "Отчество.", example: "Иванович" }),
	name: z.coerce.number<string>().meta({ description: "ID пользователя" }),
	search: z.string().meta({
		description: "Собирательная строка из: Фамилии, Имени, профессии, должности.",
		example: ["Иванов~Иван~секретарь~Администрация~", "Иванов~Иван~библиотекарь~Специалисты~", "Иванов~Иван~Информатика~Учителя~"]
	})
});

export type IUserInfo = z.input<typeof UserInfo>;
