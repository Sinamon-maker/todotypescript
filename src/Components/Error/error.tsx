import React from 'react';

type Props = {
	message: string;
};

export const Error = ({ message = '' }: Props) => <p className=" py-4 pt-2 px-2 text-red-400">{message}</p>;
