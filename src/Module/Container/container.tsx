import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export const Container = ({ children }: Props) => <div className="w-full sm:w-9 lg:w-3/4 px-1    mx-auto ">{children}</div>;
