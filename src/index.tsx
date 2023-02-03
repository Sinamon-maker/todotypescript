import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Root } from './root';
import './index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<RouterProvider router={Root} />
	</React.StrictMode>
);
