import { useState } from 'react';
import Table from 'react-bootstrap/Table';

import { type MeasureUnitFilter, type MeasureUnitResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { type RequestPagination } from '@/shared/domain';
import usePaginatedSearchMeasureUnit from '../../application/hooks/usePaginatedSearchMeasureUnit';

const index = (): JSX.Element => {
	const [measureUnitFilter, setMeasureUnitFilter] = useState<RequestPagination<MeasureUnitFilter>>({
		page: 0,
		perPage: 6,
	});

	// React Query
	const { data: measureUnitPaginated, isFetching } =
		usePaginatedSearchMeasureUnit(measureUnitFilter);

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
					{measureUnitPaginated?.data?.map(measureUnit => {
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
