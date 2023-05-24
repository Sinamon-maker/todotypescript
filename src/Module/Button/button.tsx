import React from 'react';
import { IconComponent, MapIcons } from '../../Icons/Icon';

type Props = {
	title: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	nameValue: string;
	disabled?: boolean;
	style: string;
	ariaLabel?: string;
	Icon?: keyof MapIcons;
	iconStyle?: string;
	onClick?: <T>(e: React.MouseEvent<HTMLButtonElement>, ...args: T[]) => void;
};

const defaultProps = {
	type: 'button',
	disabled: false,
	onClick: () => null,
	Icon: '',
	ariaLabel: '',
	iconStyle: '',
};

export const AppButton = ({ title, type, iconStyle, ariaLabel, nameValue, disabled, style, onClick, Icon }: Props) => {
	if (Icon) {
		return (
			<button className={`${style}`} aria-label={ariaLabel} type={type} name={nameValue} disabled={disabled} onClick={onClick}>
				<IconComponent style={iconStyle ? iconStyle : ''} Icon={Icon} />
			</button>
		);
	}
	return (
		<button className={`${style}`} aria-label={ariaLabel} type={type} name={nameValue} disabled={disabled} onClick={onClick}>
			{title}
		</button>
	);
};

AppButton.defaultProps = defaultProps;
