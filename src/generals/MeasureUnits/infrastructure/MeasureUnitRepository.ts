import axios, { type AxiosResponse } from 'axios';
import { type MeasureUnitResponse } from '../domain';
// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YzA1YjExOS02OGFiLTQ1MDYtYjY3NS00YTIzODJhMTYzN2IiLCJpYXQiOiIxNy8xMC8yMDIzIDAxOjI2OjIwIiwibmJmIjoxNjk3NTA1OTgwLCJleHAiOjE2OTc1OTIzODB9.xc9EMP7751xrBVoj_z5aF87xG_KHJE4prC69XWeaZRg
export const findAll = async (): Promise<MeasureUnitResponse[]> => {
	// const response: MeasureUnitResponse[] = await fetch('https://localhost:7281/api/measureunit')
	// 	.then(async res => await res.json())
	// 	.then((res: MeasureUnitResponse[]) => res);

	// return response;

	const response: AxiosResponse<MeasureUnitResponse[]> = await axios.get<MeasureUnitResponse[]>(
		'https://localhost:7281/api/measureunit',
	);

	return response.data;
};
