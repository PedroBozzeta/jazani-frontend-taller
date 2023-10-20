import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { type LoginRequest, type UserSecurityResponse } from '@/auth/login/domain';
import useLogin from '@/auth/login/application/hooks/useLogin';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LocalStorageSession } from '@/core/sessions';
import { useNavigate } from 'react-router';
const index = (): JSX.Element => {
	const navigate = useNavigate();
	const formik = useFormik<LoginRequest>({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Ingrese un email válido').required('Email es requerido'),
			password: Yup.string().required('Password es requerido'),
		}),
		onSubmit: (values: LoginRequest) => {
			console.log('value:', values);
			void loginAuth(values);
		},
	});

	// React Query

	const { mutateAsync, isSuccess, isError } = useLogin();

	// Methods
	const loginAuth = async (payload: LoginRequest): Promise<void> => {
		const response: UserSecurityResponse = await mutateAsync(payload);
		console.log('login:', response);
		LocalStorageSession.saveAuthorization(response);
		navigate('/');
	};
	return (
		<Row className="justify-content-center align-items-center vh-100">
			<Col xs={12} sm={8} md={7} lg={6} xl={5} xxl={4}>
				<Card>
					<Card.Header>Login</Card.Header>
					<Card.Body>
						<Form className="d-grid gap-3" onSubmit={formik.handleSubmit}>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
								{(formik.touched.email ?? false) && formik.errors.email != null && (
									<small className="text-danger">{formik.errors.email}</small>
								)}
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									name="password"
									value={formik.values.password}
									onChange={formik.handleChange}
								/>
								{(formik.touched.password ?? false) && formik.errors.password != null && (
									<small className="text-danger">{formik.errors.password}</small>
								)}
							</Form.Group>

							<hr />
							<Button type="submit" variant="primary">
								Ingresar
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};

export default index;
