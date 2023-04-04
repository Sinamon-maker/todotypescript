import React from 'react';

type Props = {
	style: string;

	onChangeText: (e: React.ChangeEvent<EventTarget>) => void;
	value: string;
	id?: string;
};
const defaultProps = {
	id: '',
};

export const AppTextarea = ({ style, onChangeText, value, id }: Props) => (
	<label className="w-full text-rose-600 italic" htmlFor={id}>
		Detailes (you can skip it)
		<textarea className={`${style}`} id={id} value={value} onChange={onChangeText} />
	</label>
);

AppTextarea.defaultProps = defaultProps;
