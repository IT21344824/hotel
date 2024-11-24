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
import { formSchema } from "@/components/staffComps/formSchema";
import { STAFF_API_ROUTES } from "@/config/RouteConfig";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const StaffUpdate = ({ staff, onClose }) => {
    const [loading, setLoading] = useState(false);
    const { data: session } = useSession(); // Get session data
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: staff, // Pre-fill form with current staff data
    });

    const onSubmit = async (values) => {

        if (!session || !session.user) {
            alert("You must be logged in to update staff.");
            return;
        }

        setLoading(true);

        // set change data to object
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
            console.log("Form data", staffData);

            const response = await fetch(`${STAFF_API_ROUTES.UPDATE}/${staff.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session.user.token}`,
                },
                body: JSON.stringify(staffData),
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error("Error Data:", errorData); // Log the error response for debugging
                throw new Error(`Failed to submit data: ${errorData}`);
            }

            const data = await response.json();
            alert("Staff member updated successfully");
            console.log(data); // Log the response from the backend

            onClose(); // Close the dialog after successful update
        } catch (error) {
            console.error("Error updating staff:", error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // List of selected fields to display
    const selectedFields = [
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
            <Dialog open={true} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[1000px]">
                    <DialogHeader>
                        <DialogTitle>Edit Staff Member</DialogTitle>
                        <DialogDescription>
                            Make changes to your staff details here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                            <div className="grid grid-cols-4 items-center gap-4 px-2">
                                {selectedFields.map((field) => (
                                    <div key={field} className="flex flex-col">
                                        <Label htmlFor={field} className="text-left">
                                            {field}
                                        </Label>
                                        <FormField
                                            control={form.control}
                                            name={field}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            id={field}
                                                            {...field}
                                                            defaultValue={staff[field]} // Pre-fill value
                                                            className="col-span-3"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>

                            <DialogFooter>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Saving..." : "Save Changes"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default StaffUpdate;
