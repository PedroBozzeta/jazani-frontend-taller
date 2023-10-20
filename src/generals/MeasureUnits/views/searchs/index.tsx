import { useState } from 'react';
import Table from 'react-bootstrap/Table';

import { type MeasureUnitFilter, type MeasureUnitResponse } from '../../domain';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { type FilterPage, type RequestPagination } from '@/shared/domain';
import usePaginatedSearchMeasureUnit from '../../application/hooks/usePaginatedSearchMeasureUnit';

import { TableSimple } from '@/core/components/table';
import { createColumnHelper } from '@tanstack/react-table';
import TablePaginated from '@/core/components/table/TablePaginated';

const index = (): JSX.Element => {
	const [measureUnitFilter, setMeasureUnitFilter] = useState<RequestPagination<MeasureUnitFilter>>({
		page: 1,
		perPage: 5,
	});

	// React Query
	const { data: measureUnitPaginated, isFetching } =
		usePaginatedSearchMeasureUnit(measureUnitFilter);

	// React Table
	const columnHelper = createColumnHelper<MeasureUnitResponse>();
	const columns = [
		columnHelper.accessor('id', {
			header: 'ID',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('name', {
			header: 'NAME',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('description', {
			header: 'DESCRIPCIÓN',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('symbol', {
			header: 'SÍMBOLO',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('registrationDate', {
			header: 'FECHA DE REGISTRO',
			cell: info => info.getValue(),
		}),
		columnHelper.accessor('state', {
			header: 'ESTADO',
			cell: ({ row }) => (
				<div className="text-center">
					<Badge pill bg={row.original.state ? 'success' : 'danger	'}>
						{row.original.state ? 'Activo' : 'Eliminado'}
					</Badge>
				</div>
			),
		}),
	];

	// Methods
	const goToPage = (payload: FilterPage): void => {
		setMeasureUnitFilter(prev => {
			return {
				...prev,
				page: payload.page,
				perPage: payload.perPage,
			};
		});
	};
	return (
		<>
			<Row className="pt-2">
				<Col sx={12}>
					<Card>
						<Card.Header>Listado de Unidades de Medida</Card.Header>
						<Card.Body>
							<TablePaginated<MeasureUnitResponse>
								columns={columns}
								data={measureUnitPaginated}
								goToPage={goToPage}
							></TablePaginated>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default index;
