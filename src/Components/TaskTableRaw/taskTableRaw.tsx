import React, { useState, useContext } from 'react';

import { TaskContext } from '../../Context/TaskContext';
import { TextTableElement } from '../TaskTableElements/TextTableElement/textTableElement';
import { TableElementContainer } from '../../Module/TableElementContainer/TableElementContainer';
import { ActionsTableElement } from '../TaskTableElements/ActionsTableElement/actionsTableElement';

import { Task, Process } from '../../globalTypes';

interface Props<ObjectType> {
	item: ObjectType;
	index: number;
}

export const TaskTableRaw = <ObjectType extends { text: string; status: Process; created: number }>({ item, index }: Props<ObjectType>) => {
	const { changeTask, changeStatus, onSettingDeleteId } = useContext(TaskContext);

	const [idEdotTask, setIdEditTask] = useState(0);
	const [valueTask, setValueTask] = useState('');

	const refWrap = React.useRef<HTMLTableRowElement>(null);

	const canselEditTask = () => {
		setValueTask('');
		setIdEditTask(0);
	};

	React.useEffect(() => {
		const handleClick = (ev: MouseEvent) => {
			if (refWrap !== undefined) {
				const el = refWrap?.current;

				if (!el || el.contains((ev?.target as Node) || null)) {
					return;
				}
				canselEditTask();
			}
		};

		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [refWrap]);

	const onChangeStatus = (e: React.MouseEvent<HTMLButtonElement>, id: number, stat: string) => {
		changeStatus(id, stat);
	};

	const onChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLTextAreaElement) {
			const newValue = e.target.value;
			setValueTask(newValue);
		}
	};

	const handleClickChangeTask = (e: React.MouseEvent<HTMLButtonElement>, task: Task) => {
		if (task.status !== 'done') setIdEditTask(task.created);
		setValueTask(task.text);
	};

	const onClickCanselEditTask = (e: React.MouseEvent<HTMLElement>) => {
		canselEditTask();
	};

	const onSaveEditTask = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log('I try to save task');
		changeTask(idEdotTask, valueTask);
		setIdEditTask(0);
		setValueTask('');
	};

	const cancelEditBeforeDelete = () => {
		if (idEdotTask !== 0) {
			setIdEditTask(0);
			setValueTask('');
		}
	};

	const delClick = (e: React.MouseEvent<HTMLButtonElement>, val: number) => {
		cancelEditBeforeDelete();
		onSettingDeleteId(val);
	};

	return (
		<tr ref={refWrap} key={item.created} className=" border-b border-gray-700 relative">
			<TableElementContainer style="w-6 sm: w-1/12  pl-2 sm:px-6 py-3 text-gray-400 text-center">{index + 1}</TableElementContainer>

			<TableElementContainer style="whitespace-normal pl-6 pr-2 pt-1 pb-0.5  sm:pt-4 sm:pr-2 md:pl-10 font-medium text-left  bg-fill-main rounded">
				<TextTableElement task={item} valueTask={valueTask} onChange={onChange} handleClickChangeTask={handleClickChangeTask} id={idEdotTask} />
			</TableElementContainer>

			<TableElementContainer style="w-1/4 sm:2/4 md:w-1/4 px-2 py-2  sm:py-4 sm:px-6  text-center bg-fill-main">
				<ActionsTableElement
					task={item}
					id={idEdotTask}
					onChangeStatus={onChangeStatus}
					onSaveEditTask={onSaveEditTask}
					delClick={delClick}
					onClickCanselEditTask={onClickCanselEditTask}
				/>
			</TableElementContainer>
		</tr>
	);
};
