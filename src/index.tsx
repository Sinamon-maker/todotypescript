import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Root } from './root';

import './index.scss';

// const container = document.getElementById('root') as HTMLElement;
const container = createRoot(document.getElementById('root') as HTMLElement);

container.render(
	<React.StrictMode>
		<RouterProvider router={Root} />
	</React.StrictMode>
);
