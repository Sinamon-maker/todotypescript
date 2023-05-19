import React from 'react';

import ImageDone from '../../Images/check.svg';

import { Task } from '../../globalTypes';
import { AppButton } from '../Button/Button';
import { styleType } from '../../styles/styles';

type Props = {
	task: Task;
	onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
};

export const ChangeStatusbtn = ({ task, onChangeStatus }: Props) => {
	return (
		<>
			{task.status ? (
				<AppButton
					style={styleType.iconWithBorder}
					nameValue="inProcess"
					onClick={(e) => onChangeStatus(e, task.created)}
					title=""
					ariaLabel="changeStatus"
					Icon={<ImageDone className="w-4 h-4 sm:w-10 sm:h-10" />}
				/>
			) : (
				<AppButton style={styleType.iconWithBorder} nameValue="inProcess" onClick={(e) => onChangeStatus(e, task.created)} title="" ariaLabel="changeStatus" />
			)}
		</>
	);
};
