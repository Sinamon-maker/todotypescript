import React from 'react';
import { Outlet } from 'react-router-dom';

function Main() {
	return (
		<div className="forth  w-full h-screen m-auto grow bg-gradient-to-tr from-blue-800  to-red-800  ">
			<Outlet />
		</div>
	);
}

export default Main;
