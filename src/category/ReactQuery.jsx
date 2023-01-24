import React from 'react'
import axios from "axios";
import { useQuery } from "react-query";

function ReactQuery() {
    const { data, isLoading, isError, error, isFetching } = useQuery(
        "categories",
        () => {
          return axios
            .get("https://northwind.vercel.app/api/categories")
            .then((res) => res.data);
        },
        {
            cacheTime: 10000,
        }
      );
    
    
      if (isLoading) return <h1>Loading ...</h1>;
    
      if (isError) return <h1>{error.message}</h1>;
      
  return (
    <>
      <div>
      {data?.map((category, index) => (
        <p key={index}>{category.name}</p>
      ))}
    </div>
    
    </>
  )
}

export default ReactQuery