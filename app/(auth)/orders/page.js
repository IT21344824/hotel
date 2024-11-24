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
import { ORDERS_API_ROUTES } from "@/config/RouteConfig";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the API
    const fetchOrders = async () => {
      try {
        const response = await fetch(ORDERS_API_ROUTES.GET, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data); // Set the fetched orders to the state
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="mx-24 mt-20">
      <div className="mx-32 rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
        <h2> Orders List </h2>
        <hr className="h-1 rounded border-0 bg-gray-200 dark:bg-gray-700" />
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead className="min-w-28">Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Items</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                {/* Assuming "order._id" or a unique field as Invoice */}
                <TableCell className="font-medium">INV{index + 1}</TableCell>
                {/* Since there's no explicit payment status, using transportMethod */}
                <TableCell className="min-w-28">
                  <span
                    className={`mr-1 ${
                      order.transportMethod === "Take_Away"
                        ? "rounded-lg bg-yellow-400 p-1 text-white"
                        : "rounded-lg bg-green-400 p-1 text-white"
                    }`}
                  >
                    {order.transportMethod}
                  </span>
                </TableCell>
                <TableCell>{order.transportMethod}</TableCell>
                <TableCell className="flex w-full overflow-hidden text-ellipsis whitespace-nowrap md:w-[400px] lg:w-[550px] ">
                  {order.cartItems?.map((item, index) => (
                    <div key={index}>
                      {item.quantity} - {item.name}
                      {index < order.cartItems.length - 1 && " ,"}
                    </div>
                  ))}
                </TableCell>
                <TableCell className="text-right">${order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            {/* Add any additional footer content, like total sum of all orders */}
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default OrdersPage;
