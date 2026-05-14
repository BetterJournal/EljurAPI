import { defineConfig } from "tsup";

const defaultConfig = {
	dts: {
		compilerOptions: {
			ignoreDeprecations: "6.0" // при объявлении paths появляется тригерный baseUrl.
		}
	},
	sourcemap: true,
	minify: true,
	clean: true,
	splitting: false,
	treeshake: true,
	tsconfig: "./tsconfig.json",
	external: ["zod"]
};

export default defineConfig([
	{
		entry: ["src/index.ts"],
		format: ["cjs"],
		outDir: "dist/cjs",
		...defaultConfig
	},
	{
		entry: ["src/index.ts"],
		format: ["esm"],
		outDir: "dist/esm",
		...defaultConfig
	}
]);
