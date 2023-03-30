interface Items<ObjectType> {
    list: ObjectType[];
}
export declare const TableBody: <ObjectType extends {
    text: string;
    status: boolean;
    created: number;
}>({ list }: Items<ObjectType>) => JSX.Element;
export {};
