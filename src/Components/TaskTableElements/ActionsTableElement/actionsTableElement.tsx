import React from 'react';

import { AppButton } from '../../../Module/Button/Button';
import ImageDone from '../../../Images/check.svg';
import Cansel from '../../../Images/cansel.svg';
import ImageDelete from '../../../Images/trash.svg';
import ImageEdit from '../../../Images/edit.svg';

import { Task } from '../../../globalTypes';

type Props = {
	task: Task;
	editClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
	onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
	delClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
};

export const ActionsTableElement = ({ task, onChangeStatus, delClick, editClick }: Props) => {
	return (
		<span className="block w-full h-full flex justify-end ssm:flex-row gap-4 ssm:justify-end">
			<AppButton
				style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-fill-weak  hover:bg-fill-strong  hover:border-fill-strong text-sm border-4  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
				nameValue="edit"
				onClick={(e) => editClick(e, task.created)}
				title=""
				ariaLabel="editTask"
				Icon={<ImageEdit className="w-4 h-4 sm:w-6 sm:h-6" />}
			/>

			{task.status ? (
				<AppButton
					style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-fill-weak  hover:bg-fill-strong  hover:border-fill-strong text-sm border-4  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
					nameValue="inProcess"
					onClick={(e) => onChangeStatus(e, task.created)}
					title=""
					ariaLabel="changeStatus"
					Icon={<ImageDone className="w-4 h-4 sm:w-10 sm:h-10" />}
				/>
			) : (
				<AppButton
					style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-fill-weak disabled:opacity-5  hover:bg-fill-strong border-fill-weak hover:border-fill-strong text-sm border-4  p-px sm:py-1 sm:px-2 rounded-full shadow-lg flex justify-center items-center "
					nameValue="inProcess"
					onClick={(e) => onChangeStatus(e, task.created)}
					title=""
					ariaLabel="changeStatus"
				/>
			)}
			<AppButton
				style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-fill-weak  hover:bg-fill-strong border-fill-strong hover:border-fill-strong text-sm border-4  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
				nameValue="deleteTask"
				title=""
				ariaLabel="deleteTask"
				onClick={(e) => delClick(e, task.created)}
				Icon={<ImageDelete className="w-4 h-4 sm:w-10 sm:h-10" />}
			/>
		</span>
	);
};
