import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import { MeasureUnitRepository } from '../../infrastructure';
import { type MeasureUnitResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const index = (): JSX.Element => {
	const [measureUnits, setMeasureUnits] = useState<MeasureUnitResponse[]>([]);

	useEffect(() => {
		void loadMeasureUnits();
	}, []);
	const loadMeasureUnits = async (): Promise<void> => {
		const response = await MeasureUnitRepository.findAll();
		setMeasureUnits(response);
		console.log('response ', response);
	};
	return (
		<>
			<Row className="pt-2">
				<Col sx={12}>
					<Card>
						<Card.Header>Listado de Unidades de Medida</Card.Header>
						<Card.Body></Card.Body>
					</Card>
				</Col>
			</Row>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Descripción</th>
						<th>Símbolo</th>
						<th>Estado</th>
					</tr>
				</thead>
				<tbody>
					{measureUnits.length > 0 &&
						measureUnits.map(measureUnit => {
							return (
								<tr key={measureUnit.id}>
									<td>{measureUnit.id}</td>
									<td>{measureUnit.name}</td>
									<td>{measureUnit.description}</td>
									<td>{measureUnit.symbol}</td>
									<td>
										<Badge pill bg={measureUnit.state ? 'success' : 'danger'}>
											{measureUnit.state ? 'Activo' : 'Inactivo'}
										</Badge>
									</td>
								</tr>
							);
						})}
				</tbody>
			</Table>
		</>
	);
};

export default index;
