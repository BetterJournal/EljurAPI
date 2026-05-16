import z from "zod";

export const GroupsRelation = z.object({
	balls: z.number(),
	hometeacher_firstname: z.string().meta({ description: "Имя классного руководителя." }),
	hometeacher_id: z.coerce.number<string>().meta({ description: "ID классного руководителя." }),
	hometeacher_lastname: z.string().meta({ description: "Фамилия классного руководителя." }),
	hometeacher_middlename: z.string().meta({ description: "Отчество классного руководителя." }),
	hometeacher_name: z.string().meta({ description: "ФИО классного руководителя." }),
	name: z.string().meta({ description: "Буква и номер класса." }),
	parallel: z.number(),
	rel: z.string().meta({ description: "Тип связи.", example: "homeclass" }),
	rules: z.array(z.string())
});

export type IGroupsRelation = z.input<typeof GroupsRelation>;

export const SchoolsRelation = z.object({
	inn: z.coerce.number<string>().meta({ description: "ИНН организации." }),
	kpp: z.string(),
	number: z.string().meta({ description: "vendor." }),
	title: z.string().meta({ description: "Название образовательного учреждения.", example: "МАОУ СОШ" }),
	title_full: z.string().meta({ description: "Полное название образовательного учреждения.", example: "муниципальное автономное общеобразовательное учреждение средняя общеобразовательная школа" })
});

export type ISchoolsRelation = z.input<typeof SchoolsRelation>;

export const StudentsRelation = z.object({
	city: z.string().meta({ description: "Город." }),
	class: z.string().meta({ description: "Класс пользователя." }),
	firstname: z.string().meta({ description: "Имя пользователя." }),
	gender: z.string().meta({ description: "Пол пользователя.", example: "male" }),
	lastname: z.string().meta({ description: "Фамилия пользователя." }),
	name: z.coerce.number<string>().meta({ description: "ID пользователя." }),
	parallel: z.number(),
	rel: z.string().meta({ description: "Тип связи с пользователем", example: "child" }),
	rules: z.array(z.string()),
	title: z.string().meta({ description: "Фамилия Имя пользователя." })
});

export type IStudentsRelation = z.input<typeof StudentsRelation>;

export const Relations = z.object({
	groups: z.record(GroupsRelation.shape.name, GroupsRelation),
	schools: z.array(SchoolsRelation),
	students: z.record(StudentsRelation.shape.name, StudentsRelation)
});

export type IRelations = z.input<typeof Relations>;
