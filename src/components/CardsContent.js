import React from 'react'
import { Link } from 'react-router-dom';
const CardsContent = ({ page, results }) => {
    let display;

    if (results) {
        display = results.map(x=>  {
            let {id, name, image} =x
            return(
                <Link
                    style={{ textDecoration: "none" }}
                     to={`${page}${id}`}
                     key={id}
                     
                >
                <div key={id}>
                |   <img src={image}></img>
                    <div>{name}</div>
                </div>
                </Link>
            )
        });
    } else {

    display = "No Characters Found :/";
  }

  return <>{display}</>;
};
export default CardsContent;