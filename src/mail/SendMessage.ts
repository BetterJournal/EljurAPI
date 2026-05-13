import { UploadedFile } from "@/resources";
import z from "zod";

export const SendMessage = z
	.object({
		subject: z.string(),
		text: z.string(),
		users_to: z.string(),
		files: z.array(UploadedFile)
	})
	.transform(data => {
		const SendData = new URLSearchParams();
		SendData.append("subject", data.subject);
		SendData.append("text", data.text);
		SendData.append("users_to", data.users_to);
		data.files.forEach(file => {
			SendData.append("fid[]", file.id);
			SendData.append("filename[]", file.name);
		});

		return SendData;
	});

export type ISendMessage = Omit<z.input<typeof SendMessage>, "files"> & { "fid[]"?: string; "filename[]"?: string };
