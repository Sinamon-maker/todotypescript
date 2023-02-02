import React from "react";

import { TableHead } from "../../globalTypes";

type Props = {
  headings: TableHead[];
};

export const TableHeading = ({ headings }: Props) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => {
          return (
            <th key={heading.id} scope="col" className={`${heading.style}`}>
              {heading.text}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
