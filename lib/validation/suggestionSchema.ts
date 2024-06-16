import { z } from "zod"

export type SuggestionType = z.infer<typeof SuggestionSchema>

export const SuggestionSchema = z.object({
    text: z.string()
    .min(5, { message: "Minimum length of text is 5" })
    .max(100, { message: "Maximum length of text is 100" }),
    name: z.string().min(3, {message: "Minimum length of name is 3"}),
    email: z.string()
})