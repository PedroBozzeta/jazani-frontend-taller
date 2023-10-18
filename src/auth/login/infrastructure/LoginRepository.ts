import axios, { type AxiosResponse } from 'axios';
import { type LoginRequest, type UserSecurityResponse } from '@/auth/login/domain';

export const login = async (payload: LoginRequest): Promise<UserSecurityResponse> => {
	const response: AxiosResponse<UserSecurityResponse> = await axios.post<UserSecurityResponse>(
		'https://localhost:7281/api/auth/login',
		payload,
	);
	return response.data;
};
