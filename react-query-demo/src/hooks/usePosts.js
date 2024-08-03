import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const bringPost = () => {

    // const id = queryData.queryKey[1];
    return axios.get(`http://localhost:5050/posts}`)};

export const usePostQuery = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => bringPost(),
    retry: 1,
    select: (data) => {
      return data.data;
    },  
  });
};





