import { getVideos } from '@/lib/api/http';
import { fetcher } from '@/lib/functions';
import useSwr from 'swr';

const useVideos = () => {
  const { data, error, mutate, isValidating } = useSwr('/videos', getVideos);

  return {
    data: data as any,
    mutate,
    loading: (!data && !error || isValidating) ? true : false, 
  }
}

export default useVideos