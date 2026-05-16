import z from "zod";

export const UserVendors = z.object({
	expires: z.string().meta({ description: "Дата окончания выданного токена, YYYY-MM-DD hh:mm:ss." }),
	login: z.string().meta({ description: "Логин пользователя. Для тех, у кого не работает логин и пароль - бесполезное поле." }),
	token: z.string().meta({ description: "auth_token работающий с API ЭлЖура." }),
	user_title: z.string().meta({ description: "Имя Фамилия пользователя." }),
	vendor: z.string(),
	vendor_id: z.string(),
	vendor_title: z.string().meta({ description: "Название образовательного учреждения." })
});

export type IUserVendors = z.input<typeof UserVendors>;
