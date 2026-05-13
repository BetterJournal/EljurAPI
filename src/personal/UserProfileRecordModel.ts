import z from "zod";
import { UserRules } from "./UserRules";

export const UserProfile = UserRules.pick({
	email: true,
	gender: true
}).extend({
	marksForYears: z.record(z.string(), z.coerce.number()),
	parallel: z.string(),
	schoolName: z.string(),
	snils: z.string(),
	teacher: z.string(),
	username: z.string()
});

export type IUserProfile = z.input<typeof UserProfile>;

export const UserProfileRecord = z.object({
	profileUserInfo: UserProfile
});

export type IUserProfileRecord = z.input<typeof UserProfileRecord>;
