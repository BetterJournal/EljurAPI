import z from "zod";

export const UserVendors = z.object({
	expires: z.string(),
	login: z.string(),
	token: z.string(),
	user_title: z.string(),
	vendor: z.string(),
	vendor_id: z.string(),
	vendor_title: z.string()
});

export type IUserVendors = z.input<typeof UserVendors>;
