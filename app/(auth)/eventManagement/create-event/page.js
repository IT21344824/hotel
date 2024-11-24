"use client";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import EventDetails from "@/components/EventManageComp/EventDetails";
import TaskTimeline from "@/components/EventManageComp/TaskTimeline";
import FileUploads from "@/components/EventManageComp/FileUploads";
import MealPlan from "@/components/EventManageComp/MealPlan";
import MusicArrangement from "@/components/EventManageComp/MusicArrangement";
import OtherEventDetails from "@/components/EventManageComp/OtherEventDetails";
import TableArrangements from "@/components/EventManageComp/TableArrangements";
import { formSchema } from "@/components/EventManageComp/formSchema";
import { EVENT_API_ROUTES } from "@/config/RouteConfig";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";

const EventCreate = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [date, setDate] = useState();
  const [startingTime, setStartingTime] = useState("05:00"); // Default for Day

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Event_type: "",
      date: "",
      N_Of_attendees: "",
      Session: "",
      starting_t: "",

      Music: "",
      Meal_Plan: "",
      Task_description: "",
      Additional_Details: "",
      Table_Arrangements: "",
      File_Uploads: "",
    },
  });

  const onSubmit = async (values) => {
    setLoading(true); // Set loading to true

    const SubmitData = {
      Event_Details: {
        Event_type: values.Event_type,
        date: format(date, "yyyy-MM-dd"), // Format date before sending
        N_Of_attendees: values.N_Of_attendees,
        Session: values.Session,
        startingTime: values.starting_t,
      },
      Music: values.Music,
      Meal_Plan: values.Meal_Plan,
      Task_description: values.Task_description,
      Additional_Details: values.Additional_Details,
      Table_Arrangements: values.Table_Arrangements,
      File_Uploads: values.File_Uploads,
    };

    // POST all Event Details to API
    try {
      const response = await fetch(EVENT_API_ROUTES.ADD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SubmitData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to submit data: ${errorData}`);
      }

      const data = await response.json();
      alert("Order placed successfully");
      console.log(SubmitData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }

    console.log(SubmitData);
  };

  return (
    <div className=" border-t-4 border-red-700  px-20">
      <div className="mt-5  flex w-full items-center justify-between border-b-4">
        <h1 className="  text-center">Add event</h1>
        <Button>
          <Link href="/eventManagement/get-event">List</Link>
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="mb-10 flex flex-col">
            <div className="flex gap-10">
              <div className="flex-1">
                {/* Event Details  */}
                <EventDetails
                  form={form}
                  date={date}
                  setDate={setDate}
                  startingTime={startingTime}
                  setStartingTime={setStartingTime}
                />
              </div>
              <div className="flex-1">
                {/* MealPlan */}
                <MealPlan form={form} />

                {/* MusicArrangement  */}
                <MusicArrangement form={form} />
              </div>
            </div>

            <div className="flex justify-between gap-10">
              {/* FileUploads  */}
              <FileUploads form={form} />

              {/* Task Timeline  */}
              <TaskTimeline form={form} />
            </div>

            <div className="flex gap-5">
              {/* OtherEventDetails  */}
              <OtherEventDetails form={form} />

              {/* TableArrangements  */}
              <TableArrangements form={form} />
            </div>
          </div>

          {/* <Button
              className="mt-5 w-full rounded-md bg-amber-400 px-6 py-3 text-white hover:bg-amber-500"
              type="submit"
            >
              Submit
            </Button> */}

          <SubmitButton
            type={"submit"}
            loading={loading} // Pass loading state to the button
            className="w-full rounded bg-gray-700 px-4 py-2  font-bold text-white hover:bg-gray-600"
          />
        </form>
      </Form>
    </div>
  );
};

export default EventCreate;
