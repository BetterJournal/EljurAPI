import { ZodType, ZodTypeDef } from "zod";
import { ZodOpenApiMetadata } from "zod-openapi";

declare module "zod" {
	export interface ZodType<out Output = unknown, out Input = unknown, out Internals extends core.$ZodTypeInternals<Output, Input> = core.$ZodTypeInternals<Output, Input>>
		extends core.$ZodType<Output, Input, Internals> {
		/**
		 * Добавляет метаданные OpenAPI (description, example, param и т.д.) прямо в схему Zod.
		 */
		meta<T extends ZodType<any, any, any>>(this: T, metadata: ZodOpenApiMetadata): T;
	}
}
