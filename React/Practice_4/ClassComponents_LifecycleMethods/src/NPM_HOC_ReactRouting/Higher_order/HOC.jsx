import React, { useState } from 'react'

const HOC = (OriginalComponent) => {
    function ModifiedComponent(){
      //orgnl comp pe will add something
       let [count, setCount]=useState(0);
       const increment=()=>{
        setCount(++count);
       }

       return <OriginalComponent count={count} increment={increment}></OriginalComponent>
    }
  return ModifiedComponent;
}

export default HOC
