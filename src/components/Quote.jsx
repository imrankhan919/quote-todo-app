import React, { useContext, useEffect } from 'react'
import { fetchData } from '../context/quoteContext/QuoteAction'
import QuoteContext from '../context/quoteContext/QuoteContext'

function Quote() {
 
  const {quoteData , dispatch} = useContext(QuoteContext)

  const getData = async() => {
    const data = await fetchData()
    dispatch({
    type : "GET_DATA",
    payload : data
    })
  }


  useEffect(()=>{
      setTimeout(()=>{
        getData()
      },3000)
  },[])


  return (
    <marquee className="mb-5">
   {
    <>
    <h1>{quoteData.content} : </h1> 
    <p>{quoteData.author}</p> 
    </>
   }
    </marquee>
  )
}

export default Quote
