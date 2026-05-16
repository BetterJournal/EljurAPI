import { DefaultRequestParams } from "./DefaultRequestParams";
import { UserVendors } from "@/personal";

export const AuthorizedRequestParams = DefaultRequestParams.extend({
	auth_token: UserVendors.shape.token
});
