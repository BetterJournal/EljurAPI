import { createDocument, type ZodOpenApiObject, type ZodOpenApiOperationObject, type ZodOpenApiResponseObject } from "zod-openapi";
import z from "zod";
import { AuthorizedRequestParams, ByStudentsArray, ByStudentsRecord, DefaultRequestParams, FailedResponse, SuccessResponse } from "./open-api";
import { DiaryDay, DiaryDayRings, FinalAssessmentsRecord, HomeworkRecord, MarksRecord, PeriodsRecord, PeriodsRecordWeeks } from "./diary";
import { UserProfileRecord, UserRules, UserVendors } from "./personal";
import { AdvertInfoRecord, AdvertsRecord, MessageInfoRecord, MessageReceiversRecord, MessagesRecord } from "./mail";

const FailedResponseObject: ZodOpenApiResponseObject = {
	description: "Поступили неверные данные от пользователя, запрос не успешен.",
	content: { "application/json": { schema: FailedResponse } }
};

const GetUsersVendors: ZodOpenApiOperationObject = {
	tags: ["Персональное"],
	summary: "Get UsersVendors",
	requestParams: {
		query: DefaultRequestParams.partial().extend({
			v_token: z.jwt({ alg: "RS256" }).meta({ description: "Токен, подписанный журналом, для системы журнала." })
		})
	},
	responses: {
		200: { content: { "application/json": { schema: z.object({ result: z.array(UserVendors) }) } } },
		400: { content: { "application/json": { schema: z.object({ error: z.string(), result: z.literal(false) }) } } }
	}
};

const GetRules: ZodOpenApiOperationObject = {
	tags: ["Персональное"],
	summary: "Get UserRules",
	requestParams: {
		query: AuthorizedRequestParams
	},
	responses: {
		200: { content: { "application/json": { schema: SuccessResponse(UserRules) } } },
		400: FailedResponseObject
	}
};

const GetProfileUserInfo: ZodOpenApiOperationObject = {
	tags: ["Персональное"],
	summary: "Get UserProfile",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			student: z.string().meta({ description: "ID пользователя, чей профиль вы хотите получить. Учтите, что вы должны иметь связь с данным пользователем.", example: "1000" })
		})
	},
	responses: {
		200: { content: { "application/json": { schema: SuccessResponse(UserProfileRecord) } } },
		400: FailedResponseObject
	}
};

const GetPeriods: ZodOpenApiOperationObject = {
	tags: ["Дневник"],
	summary: "Get Periods",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			show_disabled: z.boolean().optional(),
			weeks: z.boolean().optional().default(false).meta({ description: "Добавлять ли недели в периоды?" })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(
						ByStudentsArray(
							PeriodsRecord.meta({ description: "При weeks = false" })
								.or(PeriodsRecordWeeks.meta({ description: "При weeks = true" }))
								.meta({
									description: "В зависимости от weeks в query.",
									override: ({ jsonSchema }) => {
										jsonSchema.oneOf = jsonSchema.anyOf;
										delete jsonSchema.anyOf;
									}
								})
						)
					)
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetDiary: ZodOpenApiOperationObject = {
	tags: ["Дневник"],
	summary: "Get Diary",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			days: z.string().meta({ description: "Промежуток дней, может быть получен из start и end в GetPeriods", example: "20250901-20251230" }),
			rings: z.boolean().optional().default(false).meta({ description: "Добавлять ли звонки в уроки?" })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(
						ByStudentsRecord(
							DiaryDay.meta({ description: "При rings = false" })
								.or(DiaryDayRings.meta({ description: "При rings = true" }))
								.meta({
									description: "В зависимости от rings в query.",
									override: ({ jsonSchema }) => {
										jsonSchema.oneOf = jsonSchema.anyOf;
										delete jsonSchema.anyOf;
									}
								})
						)
					)
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetMarks: ZodOpenApiOperationObject = {
	tags: ["Дневник", "Оценки"],
	summary: "Get Marks",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			days: z.string().meta({ description: "Промежуток дней, может быть получен из start и end в GetPeriods", example: "20250901-20251230" })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(ByStudentsRecord(MarksRecord))
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetFinalAssessments: ZodOpenApiOperationObject = {
	tags: ["Дневник", "Оценки"],
	summary: "Get FinalAssessments",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			days: z.string().meta({ description: "Промежуток дней, может быть получен из start и end в GetPeriods", example: "20250901-20251230" })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(ByStudentsRecord(FinalAssessmentsRecord))
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetHomeworks: ZodOpenApiOperationObject = {
	tags: ["Дневник"],
	summary: "Get Homeworks",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			days: z.string().meta({ description: "Промежуток дней, может быть получен из start и end в GetPeriods", example: "20250901-20251230" })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(ByStudentsRecord(HomeworkRecord))
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetMessageReceivers: ZodOpenApiOperationObject = {
	tags: ["Сообщения"],
	summary: "Get MessageReceivers",
	requestParams: {
		query: AuthorizedRequestParams
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(MessageReceiversRecord)
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetMessages: ZodOpenApiOperationObject = {
	tags: ["Сообщения"],
	summary: "Get Messages",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			folder: z.enum(["inbox", "sent"]).optional().default("inbox").meta({ description: "Ваш ящик. Полученные или отправленные письма." }),
			unreadonly: z.boolean().optional().default(false),
			limit: z.number().optional().meta({ description: "Лимит писем на страницу (при отсутствии выдаёт все письма).", example: Number.MAX_SAFE_INTEGER }),
			page: z.number().min(1).optional().default(1).meta({ description: "Страница писем, начинается с 1." }),
			filter: z.string().optional().meta({ description: "Нет данных. *Не советую пользоваться данным фильтром, лучше уж сделать собственную фильтрацию." })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(MessagesRecord)
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetMessage: ZodOpenApiOperationObject = {
	tags: ["Сообщения"],
	summary: "Get MessageInfo",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			id: z.number().meta({ description: "ID сообщения." })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(MessageInfoRecord)
				}
			}
		},
		400: FailedResponseObject
	}
};

const PostMessage: ZodOpenApiOperationObject = {
	tags: ["Сообщения"],
	summary: "Post Message",
	requestBody: {
		content: {
			"application/x-www-form-urlencoded": {
				schema: z.object({
					subject: z.string().meta({ description: "Тема письма." }),
					text: z.string().meta({ description: "Содержание письма." }),
					users_to: z.string().meta({ description: "ID Получателей (несколько указываются через запятую).", example: "1000,100500" }),
					"fid[]": z.array(z.string().meta({ description: "ID файла." })),
					"filename[]": z.array(z.string().meta({ description: "Название файла." }))
				})
			}
		}
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(z.object({}))
				}
			}
		},
		400: FailedResponseObject
	}
};

const PostReplyMessage: ZodOpenApiOperationObject = {
	tags: ["Сообщения"],
	summary: "Post ReplyMessage",
	requestBody: {
		content: {
			"application/x-www-form-urlencoded": {
				schema: z.object({
					text: z.string().meta({ description: "Содержание ответного письма." }),
					reply_to: z.string().meta({ description: "ID Письма." }),
					"fid[]": z.array(z.string().meta({ description: "ID файла." })),
					"filename[]": z.array(z.string().meta({ description: "Название файла." }))
				})
			}
		}
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(z.object({}))
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetAdverts: ZodOpenApiOperationObject = {
	tags: ["Объявления"],
	summary: "Get Adverts",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			limit: z.number().optional().meta({ description: "Лимит объявлений на страницу (при отсутствии выдаёт все письма).", example: Number.MAX_SAFE_INTEGER }),
			page: z.number().min(1).optional().default(1).meta({ description: "Страница объявлений, начинается с 1." })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(AdvertsRecord)
				}
			}
		},
		400: FailedResponseObject
	}
};

const GetAdvert: ZodOpenApiOperationObject = {
	tags: ["Объявления"],
	summary: "Get Advert",
	requestParams: {
		query: AuthorizedRequestParams.extend({
			id: z.number().meta({ description: "ID объявлений." })
		})
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: SuccessResponse(AdvertInfoRecord)
				}
			}
		},
		400: FailedResponseObject
	}
};

export const ELJUR_OPENAPI_OBJECT: ZodOpenApiObject = {
	openapi: "3.1.0",
	info: {
		title: "ЭлЖур API",
		version: "1.4",
		description:
			"Неофициальная документация по работе API ЭлЖура.\n Создана с помощью библиотеки @betterjournal/eljur-api, при отсутствии её использования - типы могут немного отличаться (некоторые number могут быть string..)",
		license: { name: "WTFPL" }
	},
	tags: [{ name: "Персональное" }, { name: "Дневник" }, { name: "Оценки" }, { name: "Сообщения" }, { name: "Объявления" }],
	servers: [
		{ url: "https://api.eljur.ru/apiv3", description: "Официальный API ЭлЖура" },
		{ url: "https://api.eljur.ru/api", description: "Тоже официальный API ЭлЖура.." }
	],
	paths: {
		"/getusersvendors": {
			get: GetUsersVendors
		},
		"/getrules": {
			get: GetRules
		},
		"/getprofileuserinfo": {
			get: GetProfileUserInfo
		},
		"/getperiods": {
			get: GetPeriods
		},
		"/getdiary": {
			get: GetDiary
		},
		"/getmarks": {
			get: GetMarks
		},
		"/getfinalassessments": {
			get: GetFinalAssessments
		},
		"/gethomework": {
			get: GetHomeworks
		},
		"/getmessagereceivers": {
			get: GetMessageReceivers
		},
		"/getmessages": {
			get: GetMessages
		},
		"/getmessageinfo": {
			get: GetMessage
		},
		"/sendmessage": {
			post: PostMessage
		},
		"/sendreplymessage": {
			post: PostReplyMessage
		},
		"/getboardnotices": {
			get: GetAdverts
		},
		"/getboardnoticeinfo": {
			get: GetAdvert
		}
	}
};
