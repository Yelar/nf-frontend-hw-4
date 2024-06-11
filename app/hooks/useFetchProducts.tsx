'use client'
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../lib/axiosInstance';
const fetchProducts = async () => {
  const response = await axiosInstance.get('/products');
  return response.data;
};

const useFetchProducts = () => {
  return useQuery({
    queryKey: ['fetchData'],
    queryFn: fetchProducts
  });
};


export default useFetchProducts;
