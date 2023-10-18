import { type UserSecurityResponse } from '@/auth/login/domain';

const STORAGE_OF_AUTHORIZATION = 'STORAGE_OF_AUTHORIZATION_APP';

export const saveAuthorization = (payload: UserSecurityResponse): void => {
	localStorage.setItem('STORAGE_OF_AUTHORIZATION', JSON.stringify(payload));
};
export const getAuthorization = (): UserSecurityResponse => {
	const data = localStorage.getItem('STORAGE_OF_AUTHORIZATION');
	if (data == null) throw new Error('Required login');
	return JSON.parse(data);
};

export const removeAuthorization = (): void => {
	localStorage.removeItem('STORAGE_OF_AUTHORIZATION');
};

export const existsAuthorization = (): boolean => {
	const data = localStorage.getItem('STORAGE_OF_AUTHORIZATION');

	if (data != null) return true;

	return false;
};

export const isValidAuthorization = (): boolean => {
	const data = localStorage.getItem('STORAGE_OF_AUTHORIZATION');

	if (data == null) return false;

	const user: UserSecurityResponse = JSON.parse(data);

	if (user.security?.expireOn === null) return false;

	const expireOn = user.security.expireOn;
	const currentDate = new Date();

	return expireOn > currentDate;
};
