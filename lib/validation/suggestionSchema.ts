import { z } from "zod"

export type SuggestionType = z.infer<typeof SuggestionSchema>

export const SuggestionSchema = z.object({
    text: z.string()
    .min(5, { message: "Minimum length of text is 5" })
    .max(100, { message: "Maximum length of text is 100" }),
    name: z.string({
        required_error: "Name is required!"
    }).min(2, {message: "Name is required!"}),
    email: z.string({
        required_error: "Email is required!"
    }).email().refine(email => email.length <= 255, { message: "Email is too long" }),
})