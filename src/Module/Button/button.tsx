import React from 'react';

type Props = {
	title: string;
	type?: 'submit' | 'reset' | undefined;
	nameValue: string;
	disabled?: boolean;
	style: string;
	Icon?: React.ReactNode;
	onClick?: <T>(e: React.MouseEvent<HTMLButtonElement>, ...args: T[]) => void;
};

const defaultProps = {
	type: 'button',
	disabled: false,
	onClick: () => null,
	Icon: null,
};

export const AppButton = ({ title, type, nameValue, disabled, style, onClick, Icon }: Props) => {
	if (Icon) {
		return (
			<button className={`${style}`} type={type || 'button'} name={nameValue} disabled={disabled} onClick={onClick}>
				{Icon}
			</button>
		);
	}
	return (
		<button className={`${style}`} type={type || 'button'} name={nameValue} disabled={disabled} onClick={onClick}>
			{title}
		</button>
	);
};

AppButton.defaultProps = defaultProps;
