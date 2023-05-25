import React from 'react';

type Props = {
	message: string;
};

export const ErrorMessage = ({ message }: Props) => <p className=" px-2 text-red-400">{message}</p>;
