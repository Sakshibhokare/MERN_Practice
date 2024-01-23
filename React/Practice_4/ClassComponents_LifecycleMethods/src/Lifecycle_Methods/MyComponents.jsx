import React from "react";

class MyComponents extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };

        console.log('Constructor called')
    }

    componentDidMount(){
        console.log('ComponentDidMount called');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate called')
        return nextState.count!==this.state.count;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate called')
    }

    // this will only get called when we unmount something 
    componentWillUnmount(){
        console.log('componentWillMount called ')
    }

    incrementCount=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }));
    };

    render(){
        console.log('render called');
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.incrementCount}>IncrementCount</button>
            </div>
        )
    }
}

export default MyComponents;