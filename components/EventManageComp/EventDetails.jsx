import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const EventDetails = ({
  form,
  date,
  setDate,
  startingTime,
  setStartingTime,
}) => {
  return (
    <div className="mt-10 w-full rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
      <h2 className="mb-4">Event Details</h2>

      {/* Event Type Field */}
      <FormField
        control={form.control}
        name="Event_type"
        render={({ field }) => (
          <FormItem className="flex items-center gap-3">
            <FormLabel className="w-[150px] text-left">Event type:</FormLabel>
            <FormControl className="flex-1">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an Event" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Events</SelectLabel>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="party">Party</SelectItem>
                    <SelectItem value="get together">Get Together</SelectItem>
                    <SelectItem value="conference">Conference</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Date Field */}
      <FormField
        control={form.control}
        name="date"
        render={({ field }) => (
          <FormItem className="flex items-center gap-3">
            <FormLabel className="w-[150px] text-left">Date:</FormLabel>
            <FormControl className="flex-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      field.onChange(
                        selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
                      );
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Number of attendees Field */}
      <FormField
        control={form.control}
        name="N_Of_attendees"
        render={({ field }) => (
          <FormItem className="flex items-center gap-3">
            <FormLabel className="w-[150px] text-left">
              Number of attendees:
            </FormLabel>
            <FormControl className="flex-1">
              <Input type="number" placeholder="260" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Session Field */}
      <FormField
        control={form.control}
        name="Session"
        render={({ field }) => (
          <FormItem className="flex items-center gap-3">
            <FormLabel className="w-[150px] text-left">Session :</FormLabel>
            <FormControl className="flex-1">
              <RadioGroup
                onValueChange={(value) => {
                  field.onChange(value);
                  setStartingTime(value === "Day" ? "05:00" : "18:00");
                }}
                defaultValue={field.value}
                className="flex space-x-3"
              >
                <FormItem className="flex items-center space-x-3">
                  <FormControl>
                    <RadioGroupItem value="Day" />
                  </FormControl>
                  <FormLabel className="font-normal">Day</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3">
                  <FormControl>
                    <RadioGroupItem value="Night" />
                  </FormControl>
                  <FormLabel className="font-normal">Night</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Starting time Field */}
      <FormField
        control={form.control}
        name="starting_t"
        render={({ field }) => (
          <FormItem className="flex items-center gap-3">
            <FormLabel className="w-[150px] text-left">
              Event starting time:
            </FormLabel>
            <FormControl className="flex-1">
              <Input
                type="time"
                value={startingTime}
                onChange={(e) => {
                  const selectedTime = e.target.value;
                  setStartingTime(selectedTime);
                  field.onChange(selectedTime); // Set the selected time to the form
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default EventDetails;
