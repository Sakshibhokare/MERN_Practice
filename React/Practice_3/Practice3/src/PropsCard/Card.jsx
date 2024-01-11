import React from "react";
import './Card.css';
import PropTypes from 'prop-types'


//props: in the  funtction we will add props or parameters so we can use it as a template 
// we can add the props values in our app.js file 
function Card(props){
  
    return(
        <div className="Card">
          <h1>{props.title}</h1>
          <p className="price">{props.price}</p>
          <p><button>Add to Cart</button></p>
        </div>
    )
}
Card.propTypes={
    title: propTypes.string,
    price: propTypes.number
}
//to define the type of a parameter will use a dependnace called prop-types
//so if we perform addition of numbers then we can do it by understanding the data type of the parameter 

export default Card 