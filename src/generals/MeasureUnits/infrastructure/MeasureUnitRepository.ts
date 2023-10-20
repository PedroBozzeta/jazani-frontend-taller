import axios, { type AxiosResponse } from 'axios';
import { API_BASE_URL } from '@/core/constants/env';
import { type MeasureUnitFilter, type MeasureUnitResponse } from '../domain';
import type RequestPagination from '@/shared/domain/RequestPagination';
import { type ResponsePagination } from '@/shared/domain';
import { stringify } from 'qs';

// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YzA1YjExOS02OGFiLTQ1MDYtYjY3NS00YTIzODJhMTYzN2IiLCJpYXQiOiIxNy8xMC8yMDIzIDAxOjI2OjIwIiwibmJmIjoxNjk3NTA1OTgwLCJleHAiOjE2OTc1OTIzODB9.xc9EMP7751xrBVoj_z5aF87xG_KHJE4prC69XWeaZRg
export const findAll = async (): Promise<MeasureUnitResponse[]> => {
	// const response: MeasureUnitResponse[] = await fetch('https://localhost:7281/api/measureunit')
	// 	.then(async res => await res.json())
	// 	.then((res: MeasureUnitResponse[]) => res);

	// return response;

	const response: AxiosResponse<MeasureUnitResponse[]> = await axios.get<MeasureUnitResponse[]>(
		`${API_BASE_URL}/api/measureunit`,
	);

	return response.data;
};

export const paginatedSearch = async (
	payload: RequestPagination<MeasureUnitFilter>,
): Promise<ResponsePagination<MeasureUnitResponse>> => {
	const queryParams: string = stringify(payload, { allowDots: true });
	const response: AxiosResponse<ResponsePagination<MeasureUnitResponse>> = await axios.get<
		ResponsePagination<MeasureUnitResponse>
	>(`${API_BASE_URL}/api/measureunit/paginatedsearch?${queryParams}`);

	return response.data;
};
