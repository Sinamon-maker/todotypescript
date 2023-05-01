import React from 'react';
import { Link } from 'react-router-dom';

import { Data, ContextUser } from '../../../globalTypes';

type Props = {
	docum: Data;
	logoName: ContextUser;
};

export const CatalogueItem = ({ docum, logoName }: Props) => {
	if (logoName && docum.userId === logoName.uid) {
		return (
			<Link className="w-full grow hover:scale-105 hover:shadow-lg hover:transition-all transition-all" to={`/tasks/${docum.id}`}>
				<div className="w-full  p-4 rounded-lg border flex gap-4 items-center text-skin-base">
					<div className="grow">{docum.title}</div>
					<div>{docum.tasks.length}</div>
				</div>
			</Link>
		);
	}

	return (
		<div className="w-full grow ">
			<div className="w-full  p-4 rounded-lg border flex gap-4 items-center text-skin-base">
				<div className="grow">{docum.title}</div>
				<div>X</div>
			</div>
		</div>
	);
};
