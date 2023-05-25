import React from 'react';
import { Link } from 'react-router-dom';
import useChangeCatalogueStore from '../../../store/catalogueStore';
import { Data, ContextUser } from '../../../globalTypes';
import { AppButton } from '../../../Module/Button/Apbutton';

import { styleType } from '../../../styles/styles';

type Props = {
	docum: Data;
	logoName: ContextUser;
};

export const CatalogueItem = ({ docum, logoName }: Props) => {
	const setIdCatalogueDel = useChangeCatalogueStore((s) => s.setIdCatalogueDel);

	if (logoName && docum.userId === logoName.uid) {
		return (
			<div className="w-full grow p-4 rounded-lg border border-fill-weak flex gap-4 items-center text-skin-base hover:scale-105 hover:shadow-lg hover:transition-all transition-all">
				<Link className="w-full grow " to={`/catalogue/${logoName.uid}/${docum.id}`}>
					<div className="grow">{docum.title}</div>
				</Link>
				<div>{docum.tasks.length}</div>
				<AppButton
					style={styleType.icon}
					nameValue="deleteTask"
					title=""
					iconStyle="w-4 h-4 sm:w-6 sm:h-6"
					ariaLabel="deleteTask"
					onClick={() => setIdCatalogueDel(docum.id)}
					Icon="delete"
				/>
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
