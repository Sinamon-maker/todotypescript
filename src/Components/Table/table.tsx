import React from "react";
import { TableHeading } from "../../Module/TableHeading/tableHeading";

import { TableBody } from "../TableBody/tableBody";
import { Task, TableHead, TableHeadings } from "../../globalTypes";

const headings: TableHead[] = [
  { text: "Product name", style: "px-6 py-3 bg-gray-50 dark:bg-gray-800" },
  { text: "Status", style: "w-8 sm: w-1/6  pl-2 sm:px-6 py-3" },
  {
    text: "Del",
    style: "w-1/4 sm:w-1/6 px-2 py-3 bg-gray-50 dark:bg-gray-800",
  },
];

export const Table = () => {
  return (
    <>
      <table className="table-fixed w-full sm:w-full min-w-fit  text-sm text-left text-blue-600 dark:text-gray-400 rounded shadow-lg">
        <TableHeading headings={headings} />
        <TableBody />
      </table>
    </>
  );
};
