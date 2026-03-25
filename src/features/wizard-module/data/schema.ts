import { z } from "zod";


export const taxFilerDataSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string(),
    pan: z.string().max(10),
    dateOfBirth: z.string().date(),
    isVerified: z.boolean(),
});

export type TaxFilerData = z.infer<typeof taxFilerDataSchema>;



export const eriLoginSchema = z.object({
    code: z.number(),
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        result: z.object({
            messages: z.array(
                z.object({
                    code: z.string(),
                    type: z.string(),
                    desc: z.string(),
                    fieldName: z.string().nullable(),
                })
            ),
            entity: z.string(),
            transactionId: z.string(),
            pan: z.string(),
        }),
    }),
});

export type AuthResponse = z.infer<typeof eriLoginSchema>;

export const addClientSchema = z.object({
    pan: z.string().max(10).optional(),
    dateOfBirth: z.string().date(),
    authToken: z.string()
});

export type AddClientRequest = z.infer<typeof addClientSchema>;

export const validateAddClientSchema = z.object({
    Pan: z.string(),
    transactionId: z.string(),
    Otp: z.string(),
    validUpto: z.string().date(),
    authToken: z.string()
});

export type ValidateAddClientRequest = z.infer<typeof validateAddClientSchema>;

export const addClientResponseSchema = z.object({
    code: z.number(),
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        result: z.object({
            messages: z.array(
                z.object({
                    code: z.string(),
                    type: z.string(),
                    desc: z.string(),
                    fieldName: z.string().nullable(),
                })
            ),
            errors: z.array(z.any()),
            successFlag: z.boolean(),
            transactionId: z.string(),
            httpStatus: z.string(),
        }),
    }),
});

export type AddClientResponse = z.infer<typeof addClientResponseSchema>;



export const validateAddClientResponseSchema = z.object({
    code: z.number(),
    success: z.boolean(),
    message: z.string(),
    data: z.object({
        result: z.object({
            messages: z.array(
                z.object({
                    code: z.string(),
                    type: z.string(),
                    desc: z.string(),
                    fieldName: z.string().nullable(),
                })
            ),
            errors: z.array(
                z.object({
                    code: z.string(),
                    type: z.string(),
                    desc: z.string(),
                    fieldName: z.string().nullable(),
                })
            ),
            successFlag: z.boolean(),
            httpStatus: z.string(),
        }),
    }),
});

export type ValidateAddClientResponse = z.infer<typeof validateAddClientResponseSchema>;


const articleSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    slug: z.string(),
    linkText: z.string(),
    page: z.string(),
});

export type Article = z.infer<typeof articleSchema>;

export const articlesSchema = z.array(articleSchema);

export type Articles = z.infer<typeof articlesSchema>;