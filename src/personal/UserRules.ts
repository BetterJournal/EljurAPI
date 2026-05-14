import z from "zod";
import { Relations } from "./RelationsModel";

export const UserRules = z.object({
	age: z.number(),
	allowedAds: z.array(z.string()),
	allowedSections: z.array(z.string()),
	city: z.string(),
	email: z.string(),
	email_confirmed: z.boolean(),
	firstname: z.string(),
	gender: z.string(),
	guid: z.string(),
	id: z.coerce.number<string>(),
	id_hash: z.string(),
	lastname: z.string(),
	messageSignature: z.string(),
	middlename: z.string(),
	name: z.coerce.number<string>(),
	original_guid: z.string(),
	region: z.string(),
	regionCode: z.coerce.number<string>(),
	relations: Relations,
	roles: z.array(z.string()),
	rt_licey_school_end_date: z.boolean(),
	supportDescription: z.string(),
	supportEmail: z.string(),
	supportEmailSchool: z.string(),
	supportHelpdesk: z.httpUrl(),
	supportHelpdeskSchoolEmployee: z.string(),
	supportPhone: z.string(),
	title: z.string(),
	uploadFileUrl: z.httpUrl(),
	vendor: z.string(),
	vendor_id: z.number(),
	vuid: z.string()
});

export type IUserRules = z.input<typeof UserRules>;
