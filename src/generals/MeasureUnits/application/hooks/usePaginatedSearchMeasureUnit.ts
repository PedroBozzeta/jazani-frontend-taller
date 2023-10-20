import { type RequestPagination, type ResponsePagination } from '@/shared/domain';
import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query';
import { type MeasureUnitFilter, type MeasureUnitResponse } from '../../domain';
import { MeasureUnitRepository } from '../../infrastructure';
import { PAGINATED_SEARCH } from './QueryKeys';

const usePaginatedSearchMeasureUnit = (
	searchFilter: RequestPagination<MeasureUnitFilter>,
): DefinedUseQueryResult<ResponsePagination<MeasureUnitResponse>, Error> => {
	return useQuery({
		queryKey: [PAGINATED_SEARCH, searchFilter],
		queryFn: async () => await MeasureUnitRepository.paginatedSearch(searchFilter),
		retry: 0,
		refetchOnWindowFocus: false,
		initialData: {
			from: 0,
			to: 0,
			perPage: 0,
			currentPage: 0,
			lastPage: 0,
			total: 0,
			data: [],
		},
	});
};

export default usePaginatedSearchMeasureUnit;
