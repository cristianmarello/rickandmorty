import React from 'react'
import{ useState, useEffect } from "react";
import CardsContent from './CardsContent';

function Cards(){
    let [pageNumber, updatePageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;

    let api = 'https://rickandmortyapi.com/api/character/?page=${pageNumber}';

    useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })();
      }, [api]);


  return (
    <div>
      <CardsContent page="/" results={results} />
      
    </div>
  )
}
export default Cards;

