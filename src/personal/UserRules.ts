import z from "zod";
import { Relations } from "./RelationsModel";

export const UserRules = z.object({
	age: z.number().meta({ description: "Реальный возраст пользователя." }),
	allowedAds: z.array(z.string()),
	allowedSections: z.array(z.string()),
	city: z.string().meta({ description: "Город." }),
	email: z.string().meta({ description: "Почта пользователя." }),
	email_confirmed: z.boolean().meta({ description: "Подтверждена ли почта." }),
	firstname: z.string().meta({ description: "Имя пользователя.", example: "Иван" }),
	gender: z.string().meta({ description: "Пол пользователя.", example: "male" }),
	guid: z.string(),
	id: z.coerce.number<string>().meta({ description: "ID пользователя." }),
	id_hash: z.string().meta({ description: "Вроде должен быть MD5 хэш ID, но хэши не совпадают." }),
	lastname: z.string().meta({ description: "Фамилия пользователя.", example: "Иванов" }),
	messageSignature: z.string().meta({ description: "Подпись в письме пользователя." }),
	middlename: z.string().meta({ description: "Отчество пользователя", example: "Иванович" }),
	name: z.coerce.number<string>().meta({ description: "ID пользователя." }),
	original_guid: z.string(),
	region: z.string().meta({ description: "Название региона", example: "Московская область" }),
	regionCode: z.coerce.number<string>(),
	relations: Relations.meta({ description: "Закреплённые за пользователем связи" }),
	roles: z.array(z.string()).meta({ description: "Назначенные роли", examples: ["student", "parent", "helper"] }),
	rt_licey_school_end_date: z.boolean(),
	supportDescription: z.string(),
	supportEmail: z.string(),
	supportEmailSchool: z.string(),
	supportHelpdesk: z.httpUrl().meta({ description: "Ссылка на страницу обращения в службу поддержки. Уже заполнена данными через query." }),
	supportHelpdeskSchoolEmployee: z.string(),
	supportPhone: z.string().meta({ description: "Номер телефона поддержки" }),
	title: z.string().meta({ description: "ФИО", example: "Иванов Иван Иванович" }),
	uploadFileUrl: z.httpUrl().meta({
		description:
			"Адрес для POST запросов к хранилищу, содержит в себе валидный токен (обычно на 4 часа) и домен (он же vendor как указано в других). Отправлять надо 'multipart/form-data' с 'userfile'."
	}),
	vendor: z.string(),
	vendor_id: z.number(),
	vuid: z.string().meta({ example: "(vendor_id)#(id)" })
});

export type IUserRules = z.input<typeof UserRules>;
