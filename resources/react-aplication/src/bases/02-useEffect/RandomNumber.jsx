import React, { useEffect, useState } from 'react'

const handleFetchRandomNumber = async () => {

    const url = "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    const response = await fetch(url);
    const data = await response.text();
    //throw new Error('500 inteval errorr')
    return Number(data)

}


export const RandomNumber = () => {

    

    const [number, setNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState()

    useEffect(() => {
      
     handleFetchRandomNumber()
     .then(setNumber)
     .catch( error => setIsError(error.message));

    }, [])

    useEffect(() => {
      if (number) setIsLoading(false);
    }, [number])

    useEffect(() => {
        if (isError) setIsLoading(false);
      }, [isError])
    

  return (
    <div>
        <h1>RandomNumber</h1>
        {
    
            isLoading
            ? <span>Loading ...</span>
            : 
            isError
            ? <span>{isError}</span>
            : <h2> Numero : {number}</h2>
        }
        
    </div>
  )

}
