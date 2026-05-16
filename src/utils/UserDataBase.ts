import z from "zod";

export const UserDataBase = z.object({
	name: z.coerce.number<string | number>().meta({ description: "ID пользователя.", example: "1000" }),
	title: z.string().meta({ description: "Фамилия и имя пользователя.", example: "Иванов Иван" })
});

export type IUserDataBase = z.input<typeof UserDataBase>;
