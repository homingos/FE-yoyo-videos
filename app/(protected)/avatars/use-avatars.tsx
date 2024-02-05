import { getAvatars } from '@/lib/api/http';
import useSwr from 'swr';

const useAvatars = () => {
  const { data, mutate, isLoading, error } = useSwr('/avatars', getAvatars);

  return {
    data: data as any,
    mutate,
    loading: isLoading, 
    error,
  }
}

export default useAvatars