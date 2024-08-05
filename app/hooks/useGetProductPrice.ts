import { useQueries } from '@tanstack/react-query';

import useGSAPStore from '@/app/stores/gsapStore';
import getPrices from '@/services/getPrices';
import { queryClient } from '../providers';

interface DataForm {
  countryCode: string;
  currency: string;
}

const useGetProductPrice = () => {
  const data = queryClient.getQueriesData({ queryKey: ['gsap'] });
  const { form } = useGSAPStore();

  const isQuery = Object.values(data).filter((item) => item[1] === form);
  const doFetch = form && isQuery;

  const dataForm = form && JSON.parse(form);
  const { countryCode, currency }: DataForm = dataForm ?? [];

  return useQueries({
    queries:
      dataForm?.keywords.map((kw: string) => ({
        queryKey: ['gsap', kw],
        queryFn: () => getPrices(countryCode, currency, kw),
        enabled: !!kw && !!doFetch && !isQuery.length,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
      })) ?? [],
  });
};

export default useGetProductPrice;
