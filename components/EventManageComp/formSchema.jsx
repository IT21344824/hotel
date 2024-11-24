import { z } from "zod";

export const formSchema = z.object({
    Event_type: z.string().min(2, {
        message: "Event type must be selected.",
    }),
    date: z.string().min(1, {
        message: "Please select a date.",
    }),
    N_Of_attendees: z
        .string()
        .regex(/^\d+$/, {
            message: "Number of attendees must be a valid number.",
        })
        .min(1, {
            message: "Please enter the number of attendees.",
        }),
    Session: z.string().min(2, {
        message: "Please select a session (Day/Night).",
    }),
    starting_t: z.string().min(1, {
        message: "Please select a starting .",
    }),

    Music: z.string().min(1, {
        message: "Please select a Music .",
    }),
    Meal_Plan: z.string().min(1, {
        message: "Please select a Meal_Plan .",
    }),
    Task_description: z.string().min(1, {
        message: "Please select a Task_description .",
    }),
    Additional_Details: z.string().min(1, {
        message: "Please select a Additional_Details .",
    }),
    Table_Arrangements: z.string().min(1, {
        message: "Please select a Table_Arrangements.",
    }),
    File_Uploads: z.string().url().min(1, {
        message: "Please upload a file.",
    }),
});
