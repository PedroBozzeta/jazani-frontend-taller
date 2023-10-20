import type FilterPage from './FilterPage';

export default interface RequestPagination<T> extends FilterPage {
	page: number;
	perPage: number;
	filter?: T;
}
