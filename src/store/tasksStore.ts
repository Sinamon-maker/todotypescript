import { create } from 'zustand';
import { SortParam, Task } from '../globalTypes';

export interface TaskChangeQuery {
	idTaskDel: number;
	taskEdit: Task | null;
	idTaskComplete: number;
	sorted: SortParam;
	setTaskDel: (id: number) => void;
	setTaskEdit: (task: Task | null) => void;
	setTaskComplete: (id: number) => void;
	setSorted: (str: SortParam) => void;
}

const useChangeTaskQueryStore = create<TaskChangeQuery>((set) => ({
	idTaskDel: 0,
	taskEdit: null,
	idTaskComplete: 0,
	sorted: SortParam.all,
	setTaskDel: (id) => set(() => ({ idTaskDel: id })),
	setTaskEdit: (task) => set(() => ({ taskEdit: task })),
	setTaskComplete: (id) => set(() => ({ idTaskComplete: id })),
	setSorted: (str) => set(() => ({ sorted: str })),
}));

export default useChangeTaskQueryStore;
