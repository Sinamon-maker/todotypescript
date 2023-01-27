import React from "react";

import { TableHead, TableHeadings } from "../../globalTypes";

type Props = {
  headings: TableHead[];
};

export const TableHeading = ({ headings }: Props) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => {
          return (
            <th
              key={Math.random() * 100}
              scope="col"
              className={`${heading.style}`}
            >
              {heading.text}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
