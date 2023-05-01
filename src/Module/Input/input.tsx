import React from 'react';

type Props = {
	style: string;
	type?: string;
	nameValue?: string;
	value: string;
	placeholder?: string;
	ariaLabel?: string;
	id?: string;
	onChange: (e: React.ChangeEvent<EventTarget>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	inputRef: React.RefObject<HTMLInputElement>;
};

const defaultProps = {
	id: '',
	nameValue: '',
	ariaLabel: '',
	type: '',
	placeholder: '',
	onKeyDown: () => null,
	inputRef: undefined,
};

export const AppInput = ({ inputRef, style, type = 'text', id = '', nameValue = '', value, placeholder = '', onChange, ariaLabel = '', onKeyDown }: Props) => (
	<label htmlFor={id} className="w-full">
		<input
			ref={inputRef}
			className={`${style}`}
			type={type}
			name={nameValue}
			value={value}
			aria-label={ariaLabel}
			placeholder={placeholder}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	</label>
);

AppInput.defaultProps = defaultProps;
