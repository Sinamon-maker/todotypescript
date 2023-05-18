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
			<div className="w-full grow p-4 rounded-lg border border-fill-weak flex gap-4 items-center text-skin-base hover:scale-105 hover:shadow-lg hover:transition-all transition-all">
				<Link className="w-full grow " to={`/tasks/${docum.id}`}>
					<div className="grow">{docum.title}</div>
				</Link>
				<div>{docum.tasks.length}</div>
			</div>
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
