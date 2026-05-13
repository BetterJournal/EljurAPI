import { UploadedFile } from "@/resources";
import z from "zod";

export const SendReply = z
	.object({
		replyto: z.string(),
		text: z.string(),
		files: z.array(UploadedFile)
	})
	.transform(data => {
		const SendData = new URLSearchParams();
		SendData.append("replyto", data.replyto);
		SendData.append("text", data.text);
		data.files.forEach(file => {
			SendData.append("fid[]", file.id);
			SendData.append("filename[]", file.name);
		});

		return SendData;
	});

export type ISendReply = Omit<z.input<typeof SendReply>, "files"> & { "fid[]"?: string; "filename[]"?: string };
