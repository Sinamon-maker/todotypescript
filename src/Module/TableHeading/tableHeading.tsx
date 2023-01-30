import React from "react";

import { TableHead } from "../../globalTypes";

type Props = {
  headings: TableHead[];
};

export const TableHeading = ({ headings }: Props) => {
  return (
    <thead>
      <tr>
        {headings.map((heading, index) => {
          return (
            <th
              key={index + 56788987}
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
