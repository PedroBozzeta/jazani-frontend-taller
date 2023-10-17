import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import Admin from '../layouts/Admin';
import Home from '../../home';
import MeasureUnitSearch from '../../generals/MeasureUnits/views/searchs';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Admin />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/measureUnits',
				element: <MeasureUnitSearch />,
			},
		],
	},
];

export default createBrowserRouter(routes);
