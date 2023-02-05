import React from 'react';

import { AppButton } from '../../../Module/Button/Button';
import ImageDone from '../../../Images/check.svg';
import Cansel from '../../../Images/cansel.svg';
import ImageDelete from '../../../Images/trash.svg';
import Send from '../../../Images/send.svg';

import { Task, Process } from '../../../globalTypes';

type Props = {
	task: Task;
	id: number;
	onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val: number, val2: string) => void;
	delClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
	onClickCanselEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onSaveEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ActionsTableElement = ({ task, id, onChangeStatus, delClick, onClickCanselEditTask, onSaveEditTask }: Props) => {
	const disableFinished = task.status === Process.done;

	if (task.created === id) {
		return (
			<span className="block w-full h-full flex justify-between sm:flex-row gap-2 sm:justify-between">
				<AppButton
					style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-fill-weak  hover:bg-fill-strong border-fill-weak hover:border-fill-strong text-sm border-4  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
					type="button"
					nameValue="canselEditTask"
					title=""
					ariaLabel="cancelEditTask"
					onClick={(e) => onClickCanselEditTask(e)}
					Icon={<Cansel className="w-4 h-4 sm:w-10 sm:h-10" />}
				/>
				<AppButton
					style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-fill-weak  hover:bg-fill-strong border-fill-weak hover:border-fill-strong text-sm border-4  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
					nameValue="=saveEditTask"
					title=""
					ariaLabel="saveEditedTask"
					onClick={(e) => onSaveEditTask(e)}
					Icon={<Send className="w-4 h-4 sm:w-10 sm:h-10" />}
				/>
			</span>
		);
	}

	return (
		<span className="block w-full h-full flex justify-between ssm:flex-row gap-2 ssm:justify-between">
			{task.status === 'done' ? (
				<AppButton
					style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-fill-weak  hover:bg-fill-strong  hover:border-fill-strong text-sm border-4  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
					nameValue="inProcess"
					onClick={(e) => onChangeStatus(e, task.created, task.status)}
					title=""
					ariaLabel="changeStatus"
					disabled={disableFinished}
					Icon={<ImageDone className="w-4 h-4 sm:w-10 sm:h-10" />}
				/>
			) : (
				<AppButton
					style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-fill-weak disabled:opacity-5  hover:bg-fill-strong border-fill-weak hover:border-fill-strong text-sm border-4  p-px sm:py-1 sm:px-2 rounded-full shadow-lg flex justify-center items-center "
					nameValue="inProcess"
					onClick={(e) => onChangeStatus(e, task.created, task.status)}
					title=""
					ariaLabel="changeStatus"
					disabled={disableFinished}
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
