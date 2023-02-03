import React from 'react';

type Props = {
	style: string;
	rows?: number;
	onChange: (e: React.ChangeEvent<EventTarget>) => void;
	value: string;
	id?: string;
};
const defaultProps = {
	id: '',
	rows: '',
};

export const AppTextarea = ({ style, rows = 2, onChange, value, id = '' }: Props) => (
	<label htmlFor={id}>
		<textarea className={`${style}`} rows={rows} id={id} value={value} onChange={onChange} />
	</label>
);

AppTextarea.defaultProps = defaultProps;
