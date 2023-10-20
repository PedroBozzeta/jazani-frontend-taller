import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import { PrivateOutlet, PublicOutlet } from './CheckPageNavigation';
import Admin from '@/core/layouts/Admin';
import Home from '@/home';
import MeasureUnitSearch from '@/generals/MeasureUnits/views/searchs';

// Auth
import Auth from '@/core/layouts/Auth';
import Login from '@/auth/login/views';
const routes: RouteObject[] = [
	{
		path: '/',
		element: (
			<PrivateOutlet>
				<Admin />
			</PrivateOutlet>
		),
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
	{
		path: '/login',
		element: (
			<PublicOutlet>
				<Auth />
			</PublicOutlet>
		),
		children: [
			{
				index: true,
				element: <Login />,
			},
		],
	},
];

export default createBrowserRouter(routes);
