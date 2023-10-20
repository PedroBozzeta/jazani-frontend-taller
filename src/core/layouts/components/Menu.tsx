import { useState, type FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { LocalStorageSession } from '@/core/sessions';
const Menu: FC = () => {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');

	useEffect(() => {
		const isAuth = LocalStorageSession.isValidAuthorization();
		if (isAuth) {
			const user = LocalStorageSession.getAuthorization();
			setUserName(`${user.name} ${user.lastName}`);
		}
	}, []);

	const closeSession = (): void => {
		LocalStorageSession.removeAuthorization();
		navigate('/login');
	};
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<NavDropdown title="General" id="basic-nav-dropdown">
							<Link className="dropdown-item" to="measureUnits">
								Unidades de medida
							</Link>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className="ms-auto">
						<NavDropdown title={`👤 ${userName}`} id="setting-nav-dropdown">
							<NavDropdown.Item href="#">Configurar</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item
								href="#"
								onClick={() => {
									closeSession();
								}}
							>
								Cerrar Sesión
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Menu;
