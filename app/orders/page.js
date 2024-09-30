import React from "react";
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

const page = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "On The Way",
      itemsDetails: [
        { name: "Chicken Burger", count: 2 },
        { name: "Chicken Hamburger", count: 2 },
        { name: "Chicken Burger", count: 2 },
        { name: "Chicken Hamburger", count: 2 },
        { name: "Chicken Burger", count: 2 },
        { name: "Chicken Hamburger", count: 2 },
        { name: "Chicken Burger", count: 2 },
        { name: "Chicken Hamburger", count: 2 },
        { name: "Chicken Burger", count: 2 },
        { name: "Chicken Hamburger", count: 2 },
      ],
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "On The Way",
      itemsDetails: [
        { name: "Beef Sandwich", count: 3 },
        { name: "Cheese Fries", count: 1 },
      ],
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Delivered",
      itemsDetails: [
        { name: "Veggie Pizza", count: 2 },
        { name: "Garlic Bread", count: 4 },
      ],
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Delivered",
      itemsDetails: [
        { name: "Grilled Chicken", count: 1 },
        { name: "French Fries", count: 2 },
        { name: "Coke", count: 2 },
      ],
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Delivered",
      itemsDetails: [
        { name: "Pepperoni Pizza", count: 2 },
        { name: "Chicken Wings", count: 3 },
      ],
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Delivered",
      itemsDetails: [
        { name: "Spaghetti", count: 1 },
        { name: "Garlic Bread", count: 2 },
        { name: "Salad", count: 1 },
      ],
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Delivered",
      itemsDetails: [
        { name: "BBQ Ribs", count: 2 },
        { name: "Mashed Potatoes", count: 1 },
      ],
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div className="mx-24 mt-20">
      <div className="mx-32 rounded-md px-3 py-4 shadow-[3.0px_3.0px_8.0px_rgba(0,0,0,0.38)]">
        {" "}
        <h2> Orders List </h2>
        <hr class=" h-1  rounded border-0 bg-gray-200 dark:bg-gray-700" />
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
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell className="min-w-28">
                  <span
                    className={`mr-1 ${
                      invoice.paymentStatus === "On The Way"
                        ? "rounded-lg bg-yellow-400 p-1 text-white"
                        : "rounded-lg bg-green-400 p-1 text-white"
                    }`}
                  >
                    {invoice.paymentStatus}
                  </span>
                </TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="flex w-full overflow-hidden text-ellipsis whitespace-nowrap md:w-[400px] lg:w-[550px] ">
                  {invoice.itemsDetails?.map((item, index) => (
                    <div key={index}>
                      {item.count} - {item.name}
                      {index < invoice.itemsDetails.length - 1 && " ,"}
                    </div>
                  ))}
                </TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            {/* <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow> */}
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default page;
