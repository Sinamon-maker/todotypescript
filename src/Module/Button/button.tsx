import React from 'react';

type Props = {
	title: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	nameValue: string;
	disabled?: boolean;
	style: string;
	ariaLabel: string;
	Icon?: React.ReactNode;
	onClick?: <T>(e: React.MouseEvent<HTMLButtonElement>, ...args: T[]) => void;
};

const defaultProps = {
	type: 'button',
	disabled: false,
	onClick: () => null,
	Icon: null,
	ariaLabel: '',
};

export const AppButton = ({ title, type, ariaLabel, nameValue, disabled, style, onClick, Icon }: Props) => {
	if (Icon) {
		return (
			<button className={`${style}`} aria-label={ariaLabel} type={type} name={nameValue} disabled={disabled} onClick={onClick}>
				{Icon}
			</button>
		);
	}
	return (
		<button className={`${style}`} type={type} name={nameValue} disabled={disabled} onClick={onClick}>
			{title}
		</button>
	);
};

AppButton.defaultProps = defaultProps;
