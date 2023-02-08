import { Process } from '../../globalTypes';
interface Items<ObjectType> {
    list: ObjectType[];
}
export declare const TableBody: <ObjectType extends {
    text: string;
    status: Process;
    created: number;
}>({ list }: Items<ObjectType>) => JSX.Element;
export {};
