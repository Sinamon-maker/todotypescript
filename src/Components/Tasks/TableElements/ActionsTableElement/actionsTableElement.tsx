import React from 'react';

import { AppButton } from '../../../../Module/Button/Button';

import ImageDelete from '../../../../Images/trash.svg';
import ImageEdit from '../../../../Images/edit.svg';
import Chevron from '../../../../Images/chevron.svg';

import { Task } from '../../../../globalTypes';

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
				style="w-6 h-6 sm:w-8 sm:h-8 block   hover:bg-fill-strong  hover:border-fill-strong text-sm   rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
				nameValue="edit"
				onClick={toggleDetailes}
				title=""
				ariaLabel="editTask"
				Icon={<Chevron className="w-4 h-4 sm:w-6 sm:h-6" />}
			/>
		)}
		<AppButton
			style="w-6 h-6 sm:w-8 sm:h-8 block   hover:bg-fill-strong  hover:border-fill-strong text-sm   rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
			nameValue="edit"
			onClick={(e) => editClick(e, task)}
			title=""
			ariaLabel="editTask"
			Icon={<ImageEdit className="w-4 h-4 sm:w-6 sm:h-6" />}
		/>

		<AppButton
			style="w-6 h-6 sm:w-8 sm:h-8 block   hover:bg-fill-strong  hover:border-fill-strong text-sm   rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
			nameValue="deleteTask"
			title=""
			ariaLabel="deleteTask"
			onClick={(e) => delClick(e, task.created)}
			Icon={<ImageDelete className="w-4 h-4 sm:w-10 sm:h-10" />}
		/>
	</span>
);
