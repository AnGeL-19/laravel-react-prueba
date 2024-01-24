import PropTypes from 'prop-types'
import { useState } from 'react'

export const Counter = ({start = 0}) => {
  
    const [count, setCount] = useState(start);
  
    // Estandares para las funciones
    // onIncrement 
    // handleIncrement 
    const handleIncrementByNumber = (increment) => {
        setCount( prev => prev + increment)
    }

    return (
    <>
        <h1>Use State</h1>
        <hr />

        <div className="">
            <h2>valor:</h2>
            <span>{count}</span>
        </div>

        <div className="">
            <button 
                className=''
                onClick={ ()=> setCount(count - 1)}
                >-</button>
            <button 
                className=''
                onClick={ ()=> setCount(start)}
            >Reset</button>
            <button 
                className=''
                onClick={ ()=> setCount( prev => prev + 1)}
            >+</button>
            <button 
                className=''
                onClick={ ()=> handleIncrementByNumber(10)}
            >+10</button>
        </div>
    </>
  )
}

Counter.protoType = {
    start: PropTypes.number
}
