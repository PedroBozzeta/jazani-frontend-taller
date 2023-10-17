import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import Container from 'react-bootstrap/Container';

const Admin = (): JSX.Element => {
	return (
		<>
			<Menu />
			<Container>
				<Outlet />
			</Container>
		</>
	);
};

export default Admin;
