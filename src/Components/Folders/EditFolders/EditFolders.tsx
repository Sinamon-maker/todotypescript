import React from 'react';
import { AppButton } from '../../../Module/Button/Apbutton';
import { styleType } from '../../../styles/styles';

export const EditFolders = () => {
	return (
		<span className="flex ">
			<AppButton title="" style={styleType.icon} nameValue="edit" onClick={(e) => console.log(e.target)} iconStyle="w-4 h-4" ariaLabel="editTask" Icon="edit" />

			<AppButton
				title=""
				style={styleType.icon}
				nameValue="deleteTask"
				iconStyle="w-4 h-4"
				ariaLabel="deleteTask"
				onClick={(e) => console.log(e.target)}
				Icon="delete"
			/>
		</span>
	);
};
