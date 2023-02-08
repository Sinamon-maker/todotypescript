import React from 'react';

import { TableHead } from '../../globalTypes';

type Props = {
	headings: TableHead[];
};

export const TableHeading = ({ headings }: Props) => (
	<thead>
		<tr>
			{headings.map((heading, index) => (
				<th key={index} scope="col" className={`${heading.style}`}>
					{heading.text}
				</th>
			))}
		</tr>
	</thead>
);
