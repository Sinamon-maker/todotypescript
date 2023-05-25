import { create } from 'zustand';
import { SortParam, Task } from '../globalTypes';

export interface TaskChangeQuery {
	idTaskDel: number;
	taskEdit: Task | null;
	sorted: SortParam;
	setTaskDel: (id: number) => void;
	setTaskEdit: (task: Task | null) => void;
	setSorted: (str: SortParam) => void;
}

const useChangeTaskQueryStore = create<TaskChangeQuery>((set) => ({
	idTaskDel: 0,
	taskEdit: null,
	sorted: SortParam.all,
	setTaskDel: (id) => set(() => ({ idTaskDel: id })),
	setTaskEdit: (task) => set(() => ({ taskEdit: task })),
	setSorted: (str) => set(() => ({ sorted: str })),
}));

export default useChangeTaskQueryStore;
