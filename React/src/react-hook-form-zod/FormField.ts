import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const emailErrorMsg =
  "Invalid email format. Please enter a valid Gmail address.";
const gmailErrorMsg = "Only Gmail addresses are allowed.";

export const schema = z.object({
  email: z.string().email(emailErrorMsg).regex(emailRegex, gmailErrorMsg),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .regex(/\d/, "Password must contain at least one digit.")
    .regex(/[A-Za-z]/, "Password must contain at least one letter."),
});

export type FormField = z.infer<typeof schema>;
