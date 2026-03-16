import z from "zod";



export const clientRegistrationSchema = z.object({
    addrLine1Txt: z
        .string()
        .min(1, { message: "Flat/ Door/ Block No. is required" })
        .max(60, { message: "Maximum 60 characters allowed" }),

    addrLine2Txt: z
        .string()
        .min(1, { message: "Name of Premise/ Building/ Village is required" })
        .max(60),

    addrLine3Txt: z
        .string()
        .min(1, { message: "Area / Locality is required" })
        .max(60),

    addrLine4Txt: z
        .string()
        .min(1, { message: "District / City is required" })
        .max(60),

    addrLine5Txt: z
        .string()
        .min(1, { message: "Post office is required" })
        .max(60),

    residentialStatusCd: z.enum(["RES", "NRI"]),

    pinCd: z
        .string()
        .regex(/^[0-9]{6}$/, { message: "Pin code must be 6 digits" }),

    countryCd: z
        .string()
        .min(2, { message: "Country code is required" })
        .max(6),

    stateCd: z
        .string()
        .min(1, { message: "State is required" })
        .max(3),
});


export type ClientRegistrationForm = z.infer<typeof clientRegistrationSchema>