import React, { useContext, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';

export const MainPage = () => {
	const { isLoading, logoName } = useContext(UserContext);
	const navigate = useNavigate();
	console.log('Welcome', isLoading, logoName);
	useEffect(() => {
		if (logoName !== null) {
			navigate('/tasks/user');
		}
	}, [logoName, navigate]);
	if (isLoading) return <div>Loading...</div>;
	return (
		<>
			<div className="p-10 sm:p-20 text-2xl flex flex-wrap text-skin-base items-center">
				<h1 className="text-2xl ssm:text-4xl tracking-wide leading-normal">Welcome!</h1>
				<p className="pt-2 ml-2 flex flex-wrap">
					Please,
					<span className="mx-2 border-solid border-b-2 border-fill-weak hover:border-weak-strong hover:text-red-600">
						<Link to="/login">log&nbsp;in</Link>
					</span>
					or
					<span className="mx-2 border-solid border-b-2 border-fill-weak hover:border-weak-strong hover:text-red-600">
						<Link to="/register">register</Link>
					</span>
					to start.
				</p>
			</div>
			<div className="flex justify-center">
				<Outlet />
			</div>
		</>
	);
};
