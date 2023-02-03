import React from 'react';

type Props = {
	children: React.ReactNode;
	style: string;
};

export const TableElementContainer = ({ style, children }: Props) => <td className={`${style}`}>{children}</td>;
