import z from "zod";

export const UserInfo = z.object({
	firstname: z.string(),
	info: z.string(),
	lastname: z.string(),
	middlename: z.string(),
	name: z.coerce.number<string>(),
	search: z.string()
});

export type IUserInfo = z.input<typeof UserInfo>;
