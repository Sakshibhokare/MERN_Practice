import React, { Component } from "react";
import propTypes  from "prop-types";
import './Card.css'

export default class Card2 extends Component{
    constructor(props){
        super(props);//parent class
        this.state={
            stockCount: this.props.stock 
        }
        this.decreamentStock=()=>{
            this.setState({
                stockCount:this.state.stockCount-1 
            }
            )
        }
    }
    render(){
        return(
            <>
            <div className="Card2">
                <h1>{this.props.title}</h1>
                <p className="price">${this.props.price}</p>
                <p>In stock: {this.state.stockCount}</p>
                <p><button onClick={this.decreamentStock}>Add to card</button></p>

            </div>
            </>
        )
    }
}

Card2.propTypes={
    title: propTypes.string,
    price: propTypes.number
}