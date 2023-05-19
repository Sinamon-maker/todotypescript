import React from 'react';

import { AppButton } from '../../../../Module/Button/Button';

import ImageDelete from '../../../../Images/trash.svg';
import ImageEdit from '../../../../Images/edit.svg';
import Chevron from '../../../../Images/chevron.svg';

import { Task } from '../../../../globalTypes';
import { styleType } from '../../../../styles/styles';

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
				style={styleType.icon}
				nameValue="expand"
				onClick={toggleDetailes}
				title=""
				ariaLabel="editTask"
				Icon={<Chevron className="w-4 h-4 sm:w-6 sm:h-6" />}
			/>
		)}
		<AppButton
			style={styleType.icon}
			nameValue="edit"
			onClick={(e) => editClick(e, task)}
			title=""
			ariaLabel="editTask"
			Icon={<ImageEdit className="w-4 h-4 sm:w-6 sm:h-6" />}
		/>

		<AppButton
			style={styleType.icon}
			nameValue="deleteTask"
			title=""
			ariaLabel="deleteTask"
			onClick={(e) => delClick(e, task.created)}
			Icon={<ImageDelete className="w-4 h-4 sm:w-10 sm:h-10" />}
		/>
	</span>
);
