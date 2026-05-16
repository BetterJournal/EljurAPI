import z from "zod";
import { UserRules } from "./UserRules";

export const UserProfile = UserRules.pick({
	email: true,
	gender: true
}).extend({
	marksForYears: z
		.record(z.string().meta({ description: "Учебный год", example: "2000/2001" }), z.coerce.number().meta({ example: [0, 4, 4.67] }))
		.meta({ description: "Оценки за предыдущие учебные года" }),
	parallel: z.string().meta({ description: "Класс пользователя" }),
	schoolName: z.string().meta({ description: "Название образовательного учреждения." }),
	snils: z.string().meta({ description: "СНИЛС пользователя." }),
	teacher: z.string().meta({ description: "ФИО Классного руководителя." }),
	username: z.string().meta({ description: "ФИО пользователя." })
});

export type IUserProfile = z.input<typeof UserProfile>;

export const UserProfileRecord = z.object({
	profileUserInfo: UserProfile
});

export type IUserProfileRecord = z.input<typeof UserProfileRecord>;
