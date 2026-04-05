import { z } from "zod";

export const clientFormSchema = z.object({
    firstName: z.string().max(255).nullish(),

    middleName: z.string().max(255).nullish(),

    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .max(255),

    fatherName: z
        .string()
        .min(1, { message: "Father name is required" })
        .max(255),

    pan: z
        .string()
        .min(1, { message: "PAN is required" })
        .length(10, { message: "PAN must be 10 characters" }),

    dob: z.string().min(1, { message: "DOB is required" }),

    mobileNumber: z
        .string()
        .min(10, { message: "Mobile number is required" })
        .max(13),

    gender: z.enum(["M", "F", "O"], {
        message: "Gender is required",
    }),

    email: z
        .string()
        .email({ message: "Invalid email address" }),
});

export type ClientForm = z.infer<typeof clientFormSchema>;


export const clientSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    middleName: z.string().nullable().optional(),
    lastName: z.string(),
    dob: z.string(),
    isVerified: z.union([z.literal(0), z.literal(1)]),
    pan: z.string(),
    validUpto: z.string().date(),
    mobileNumber: z.string(),
    email: z.string().email(),
    gender: z.enum(["M", "F", "O"]),
    fatherName: z.string().nullable().optional(),
});


export type Client = z.infer<typeof clientSchema>;
export const clientListSchema = z.array(clientSchema);
export type ClientList = z.infer<typeof clientListSchema>


export const clientResponseSchema = z.object({
    data: z.object(clientSchema),
    status: z.boolean(),
    code: z.number(),
    message: z.string()
});


export type ClientResponse = z.infer<typeof clientResponseSchema>;


export const clientListResponseSchema = z.object({
    data: z.array(clientSchema),
    status: z.boolean(),
    code: z.number(),
    message: z.string()
});

export type ClientListResponse = z.infer<typeof clientListResponseSchema>;