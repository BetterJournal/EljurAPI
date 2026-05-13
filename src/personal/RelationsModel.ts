import z from "zod";

export const GroupsRelation = z.object({
	balls: z.number(),
	hometeacher_firstname: z.string(),
	hometeacher_id: z.coerce.number<string>(),
	hometeacher_lastname: z.string(),
	hometeacher_middlename: z.string(),
	hometeacher_name: z.string(),
	name: z.string(),
	parallel: z.number(),
	rel: z.string(),
	rules: z.array(z.string())
});

export type IGroupsRelation = z.input<typeof GroupsRelation>;

export const SchoolsRelation = z.object({
	inn: z.coerce.number<string>(),
	kpp: z.string(),
	number: z.string(),
	title: z.string(),
	title_full: z.string()
});

export type ISchoolsRelation = z.input<typeof SchoolsRelation>;

export const StudentsRelation = z.object({
	city: z.string(),
	class: z.string(),
	firstname: z.string(),
	gender: z.string(),
	lastname: z.string(),
	name: z.coerce.number<string>(),
	parallel: z.number(),
	rel: z.string(),
	rules: z.array(z.string()),
	title: z.string()
});

export type IStudentsRelation = z.input<typeof StudentsRelation>;

export const Relations = z.object({
	groups: z.record(z.string(), GroupsRelation),
	schools: z.array(SchoolsRelation),
	students: z.record(z.string(), StudentsRelation)
});

export type IRelations = z.input<typeof Relations>;
