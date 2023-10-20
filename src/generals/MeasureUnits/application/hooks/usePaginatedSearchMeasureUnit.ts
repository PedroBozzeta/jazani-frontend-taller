import { type RequestPagination, type ResponsePagination } from '@/shared/domain';
import { DefinedUseQueryResult, type UseQueryResult, useQuery } from '@tanstack/react-query';
import { type MeasureUnitFilter, type MeasureUnitResponse } from '../../domain';
import { MeasureUnitRepository } from '../../infrastructure';
import { PAGINATED_SEARCH } from './QueryKeys';

const usePaginatedSearchMeasureUnit = (
	searchFilter: RequestPagination<MeasureUnitFilter>,
): UseQueryResult<ResponsePagination<MeasureUnitResponse>, Error> => {
	return useQuery({
		queryKey: [PAGINATED_SEARCH, searchFilter],
		queryFn: async () => await MeasureUnitRepository.paginatedSearch(searchFilter),
		retry: 0,
		refetchOnWindowFocus: false,
	});
};

export default usePaginatedSearchMeasureUnit;
