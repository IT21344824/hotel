"use client";
import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { STAFF_API_ROUTES } from "@/config/RouteConfig";
import Link from "next/link"; // For navigation to staff details/edit pages
import StaffUpdate from "@/components/staffComps/staffUpdate"; // Import the StaffUpdate component

const StaffList = () => {
    const [staffs, setEvents] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null); // State for selected staff
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility

    useEffect(() => {
        // Fetch staffs from the API
        const fetchEvents = async () => {
            try {
                const response = await fetch(STAFF_API_ROUTES.GET, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch staffs");
                }

                const data = await response.json();
                console.log("staffs", data);
                setEvents(data); // Set the fetched staffs to the state
            } catch (error) {
                console.error("Error fetching staffs:", error);
            }
        };

        fetchEvents();
    }, []);

    // Function to handle staff deletion
    const handleDelete = async (id) => {
        const confirmDelete = confirm("Are you sure you want to delete this staff?");
        if (confirmDelete) {
            try {
                const response = await fetch(`${STAFF_API_ROUTES.DELETE}/${id}`, {
                    method: "DELETE",
                });

                if (response.status === 200) {
                    setEvents((prevEvents) => prevEvents.filter((staff) => staff.id !== id));
                    alert("Staff deleted successfully");
                } else {
                    throw new Error("Failed to delete staff");
                }
            } catch (error) {
                console.error("Error deleting staff:", error);
                alert("Failed to delete staff: " + error.message);
            }
        }
    };

    const handleView = (id) => {
        setSelectedStaff(id); // Set the selected staff
        setIsDialogOpen(true); // Open the dialog
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setSelectedStaff(null);
    };

    return (

        <div className="mt-10 rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
            <h2>staffs List</h2>
            <hr className="h-1 rounded border-0 bg-gray-200 dark:bg-gray-700" />

            <Table>
                <TableCaption>A list of all upcoming staffs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead >Email</TableHead>

                        <TableHead>Job Title</TableHead>

                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {staffs.map((element, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">
                                {element.Name}{" "}
                            </TableCell>
                            <TableCell className="font-medium">
                                {element.Contact}{" "}
                            </TableCell>
                            <TableCell className="font-medium ">
                                {element.Email}{" "}
                            </TableCell>

                            <TableCell className="font-medium">
                                {element.JobTitle}{" "}
                            </TableCell>


                            {/* Action buttons */}
                            <TableCell className="space-x-2 text-right">
                                {/* View Details Button */}
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleView(element)}
                                >
                                    View
                                </Button>

                                {/* Delete staff Button */}
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleDelete(element.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

                <TableFooter>
                    {/* Add any additional footer content here */}
                </TableFooter>

            </Table>

            {/* Render the StaffUpdate dialog */}
            {isDialogOpen && selectedStaff && (
                <StaffUpdate staff={selectedStaff} onClose={handleCloseDialog} />
            )}
        </div>

    );
};

export default StaffList;
