'use client'
import {useState} from 'react'
import React from 'react';
import useFetchProducts from './hooks/useFetchProducts';
import CardHolder from './components/cardHolder';
import useReact, { QueryClientProvider, QueryClient } from '@tanstack/react-query'


const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main/>
    </QueryClientProvider>
  )
}

const Main = () => {
  const { isPending, error, data } = useFetchProducts();
  

  // console.log("lol", error);
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;
  
  return <CardHolder products={data} />;
};

export default Home;
