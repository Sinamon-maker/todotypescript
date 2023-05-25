import React from 'react';

import { Task } from '../../../../globalTypes';
import { styleType } from '../../../../styles/styles';
import { AppButton } from '../../../../Module/Button/Apbutton';

type Props = {
	task: Task;
	editClick: (e: React.MouseEvent<HTMLButtonElement>, val: Task) => void;

	delClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
	toggleDetailes: () => void;
};

export const ActionsTableElement = ({ task, delClick, editClick, toggleDetailes }: Props) => (
	<span className=" h-full flex justify-end ssm:flex-row gap-2 sm:gap-4 ssm:justify-end">
		{task.detailes && (
			<AppButton
				title=""
				style={styleType.icon}
				nameValue="expand"
				onClick={toggleDetailes}
				ariaLabel="editTask"
				iconStyle="w-2 h-2 sm:w-4 sm:h-4"
				Icon="expand"
			/>
		)}
		<AppButton
			title=""
			style={styleType.icon}
			nameValue="edit"
			onClick={(e) => editClick(e, task)}
			iconStyle="w-4 h-4 sm:w-6 sm:h-6"
			ariaLabel="editTask"
			Icon="edit"
		/>

		<AppButton
			title=""
			style={styleType.icon}
			nameValue="deleteTask"
			iconStyle="w-4 h-4 sm:w-6 sm:h-6"
			ariaLabel="deleteTask"
			onClick={(e) => delClick(e, task.created)}
			Icon="delete"
		/>
	</span>
);
