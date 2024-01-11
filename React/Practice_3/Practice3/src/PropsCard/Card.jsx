import React from "react";
import './Card.css';
import propTypes from 'prop-types'
import { useState } from "react";


//props: in the  funtction we will add props or parameters so we can use it as a template 
// we can add the props values in our app.js file 
function Card({title, price, stock}){
    //reset the stock value
    let prevStock=stock;

    //decrese the stock value
    let [stockCount, setStockCount]=useState(stock);


  function decrementStock(){
    setStockCount(--stockCount);
    console.log(stockCount)
  }

  function resetStock(){
    setStockCount(prevStock)
  }


    return(
        <div className="Card">
          <h1>{title}</h1>
          <p className="price">{price}</p>
          <p className="stock">stock {stockCount}</p>
          <p><button onClick={decrementStock}>Add to Cart</button></p>
          {/* <p onClick={resetStock}>Reset the stock</p> */}
        </div>
    )
}

//to define the type of a parameter will use a dependnace called prop-types
//so if we perform addition of numbers then we can do it by understanding the data type of the parameter 
// warning will come we have not followed the datatype 
Card.propTypes={
    title: propTypes.string,
    price: propTypes.number
}

// default props 
Card.defaultProps={
    title:'Cloths'
}

//required props 
// Card.requiredProps={
//     title
// }



export default Card 