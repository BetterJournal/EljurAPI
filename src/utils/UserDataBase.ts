import z from "zod";

export const UserDataBase = z.object({
	name: z.coerce.number<string | number>(),
	title: z.string()
});

export type IUserDataBase = z.input<typeof UserDataBase>;
