"use client";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { formSchema } from "@/components/EventManageComp/formSchema";
import { EVENT_API_ROUTES } from "@/config/RouteConfig";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";
import StaffList from "@/components/staffComps/staffList";
import StaffAdd from "@/components/staffComps/staffAdd";

const StaffDetails = () => {
  return (
    <div>
      <div className=" border-t-4 border-red-700  px-10">
        <div className="mt-5  flex w-full items-center justify-between border-b-4">
          <h1 className="  text-center">Staff Members</h1>
        </div>

        <div className="flex gap-5">
          <div className="flex-1">
            <StaffAdd />
          </div>

          <div className="flex-1">
            {/* Staff Details  */}
            <StaffList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
