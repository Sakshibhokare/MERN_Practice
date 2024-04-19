import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './App.css'

function App() {

  let [fact, setFact] = useState('Loading...');

  const fetchFacts = ()=>{
    fetch('https://catfact.ninja/fact').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.fact);
      setFact( data.fact);
    })
    .catch((err)=>{
      alert('something went wrong')
    })
  }


  //Axios is a third party package which we can use to fetch our data
  const fetchFactsViaAxios=()=>{
    axios.get('https://catfact.ninja/fact').then((res)=>{
      setFact(res.data.fact);
    }).catch((err)=>{
      alert('something went wrong');
    })
  }
  
  
  return (
    <>
    {/* Fetch and Axios
    Fetch: returns a promise */}

    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{fact}</h1>
        <button className='button'>
          <div onClick={fetchFacts}>Show more</div>
        </button>
        <button>
        <div onClick={fetchFactsViaAxios}>Show moreeee</div>
        </button>
      </div>
      </div>     
    </>
  )
}

export default App
