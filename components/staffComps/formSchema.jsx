import { z } from "zod";

export const formSchema = z.object({
    Name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    Contact: z.string().min(2, {
        message: "Contact must be at least 2 characters.",
    }),
    Email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    Company: z.string().min(2, {
        message: "Company must be at least 2 characters.",
    }),
    JobTitle: z.string().min(2, {
        message: "JobTitle must be at least 2 characters.",
    }),
    Street: z.string().min(2, {
        message: "Street must be at least 2 characters.",
    }),
    City: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }),
    State: z.string().min(2, {
        message: "State must be at least 2 characters.",
    }),
    Country: z.string().min(2, {
        message: "Country must be at least 2 characters.",
    }),
    Website: z.string().min(2, {
        message: "Website must be at least 2 characters.",
    }),
});
