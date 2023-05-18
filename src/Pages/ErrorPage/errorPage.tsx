import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
	const error = useRouteError() as { [key: string]: string };
	const routeError = isRouteErrorResponse(error);
	console.error(error);

	const erop = typeof error !== 'undefined' ? error : { statusText: 3, message: 'My message' };
	if (routeError) return <p>Invalid Page</p>;
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{erop.message}</i>
			</p>
		</div>
	);
};
