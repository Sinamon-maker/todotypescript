import React from 'react';
import { Link } from 'react-router-dom';
import useChangeCatalogueStore from '../../../store/catalogueStore';
import { Data, ContextUser } from '../../../globalTypes';
import { AppButton } from '../../../Module/Button/Button';
import ImageDelete from '../../../Images/trash.svg';
import { styleType } from '../../../styles/styles';
import { FiTrash2 } from 'react-icons/fi';

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
					ariaLabel="deleteTask"
					onClick={(e) => setIdCatalogueDel(docum.id)}
					Icon={<FiTrash2 className="w-4 h-4 sm:w-10 sm:h-10" />}
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
