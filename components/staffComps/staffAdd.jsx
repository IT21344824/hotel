"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/components/staffComps/formSchema";
import { STAFF_API_ROUTES } from "@/config/RouteConfig";
import SubmitButton from "@/components/SubmitButton";
import { z } from "zod";

const StaffAdd = () => {
    const [loading, setLoading] = useState(false); // Loading state
    const { data: session } = useSession(); // Get session data
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            Contact: "",
            Email: "",
            Company: "",
            JobTitle: "",
            Street: "",
            City: "",
            State: "",
            Country: "",
            Website: "",
        },
    });

    const onSubmit = async (values) => {
        console.log("Form State", form.formState); // Log the form state to see if it's valid or has errors

        if (!session || !session.user) {
            alert("You must be logged in to add staff.");
            return;
        }

        setLoading(true); // Set loading to true

        // Prepare data to submit to backend
        const staffData = {
            Name: values.Name,
            Contact: values.Contact,
            Email: values.Email,
            Company: values.Company,
            JobTitle: values.JobTitle,
            Street: values.Street,
            City: values.City,
            State: values.State,
            Country: values.Country,
            Website: values.Website,
        };

        try {
            // POST request to backend API
            const response = await fetch(STAFF_API_ROUTES.ADD, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session.user.token}`, // Pass token if needed for authorization
                },
                body: JSON.stringify(staffData),
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Failed to submit data: ${errorData}`);
            }

            const data = await response.json();
            alert("Staff member added successfully");
            console.log(data); // Log the response from the backend

            // Reset the form to its default values
            form.reset();
        } catch (error) {
            console.error("Error adding staff:", error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false); // Reset loading state regardless of success or failure
        }
    };

    // List of selected fields to display
    const staffFields = [
        'Name',
        'Contact',
        'Email',
        'Company',
        'JobTitle',
        'Street',
        'City',
        'State',
        'Country',
        'Website',
    ];

    return (
        <div>
            <div className="w-full h-full mt-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <div className="rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
                            <div className="items-center justify-between mt-2 flex">
                                <h2 className="mb-4">Add Staff Members</h2>
                                <Button
                                    type="submit"
                                    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                >
                                    Add Member
                                </Button>
                            </div>
                            <div className="w-full flex flex-wrap gap-x-10 items-center">
                                {staffFields.map((field) => (
                                    <FormField
                                        key={field}
                                        control={form.control}
                                        name={field} // Dynamically set the field name

                                        render={({ field: formField }) => (
                                            <FormItem className="flex items-center gap-3">
                                                <FormLabel className="w-[90px] text-left">
                                                    {field}
                                                </FormLabel>
                                                <div className="w-full">
                                                    <FormControl className="flex-1">
                                                        <Input
                                                            type="text"
                                                            placeholder={`Enter ${field}`}
                                                            {...formField} // Spread the formField object
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                ))}
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default StaffAdd;
