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
import { EVENT_API_ROUTES } from "@/config/RouteConfig";
import Link from "next/link"; // For navigation to event details/edit pages

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await fetch(EVENT_API_ROUTES.GET, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        console.log("events", data);
        setEvents(data); // Set the fetched events to the state
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Function to handle event deletion
  const handleDelete = async (id) => {
    console.log("id", id);
    const confirmDelete = confirm(
      "Are you sure you want to delete this event?",
    );

    if (confirmDelete) {
      try {
        const response = await fetch(`${EVENT_API_ROUTES.DELETE}/${id}`, {
          method: "DELETE",
        });

        // Check if the response status is 200 for successful deletion
        if (response.status === 200) {
          // Remove the deleted event from the state
          setEvents((prevEvents) =>
            prevEvents.filter((event) => event.id !== id),
          );

          alert("Event deleted successfully");
        } else {
          throw new Error("Failed to delete event");
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("Failed to delete event: " + error.message);
      }
    }
  };

  return (
    <div className=" border-t-4 border-red-700 ">
      <div className="mx-32 mt-16 rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
        <h2>Events List</h2>
        <hr className="h-1 rounded border-0 bg-gray-200 dark:bg-gray-700" />

        <Table>
          <TableCaption>A list of all upcoming events.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Event Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Attendees</TableHead>
              <TableHead>Session</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {event.Event_Details.Event_type}{" "}
                </TableCell>

                <TableCell>
                  {new Date(event.Event_Details.date).toLocaleDateString()}
                </TableCell>

                <TableCell>{event.Event_Details.N_Of_attendees}</TableCell>
                <TableCell>
                  <span
                    className={`mr-1 ${
                      event.Event_Details.Session === "Day"
                        ? "rounded-lg bg-yellow-400 p-1 text-white"
                        : "rounded-lg bg-green-400 p-1 text-white"
                    }`}
                  >
                    {event.Event_Details.Session}
                  </span>
                </TableCell>

                {/* Action buttons */}
                <TableCell className="space-x-2 text-right">
                  {/* View Details Button */}
                  <Link href={`/eventManagement/${event.id}`}>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </Link>

                  {/* Delete Event Button */}
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(event.id)}
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
      </div>
    </div>
  );
};

export default EventList;
