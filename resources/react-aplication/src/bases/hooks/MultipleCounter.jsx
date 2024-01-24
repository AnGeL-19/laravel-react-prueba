import React from 'react'
import { useState } from 'react'

export const MultipleCounter = () => {

    const [counters, setCounters] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const handleCounter = (counter) => {

        console.log(counter,'a');
        setCounters(prev => ({
            ...prev,
            [counter]:  prev[counter] + 1
        }))

    }

  return (
    <>
        <h1>MultipleCounter</h1>
        <hr />

        <h3>Counters</h3>

        <div>
            <h5>Counter 1: {counters.counter1}</h5>
            <h5>Counter 2: {counters.counter2}</h5>
            <h5>Counter 3: {counters.counter3}</h5>
        </div>

        <div>
            <button onClick={() => handleCounter('counter1')}>Counter 1</button>
            <button onClick={() => handleCounter('counter2')}>Counter 2:</button>
            <button onClick={() => handleCounter('counter3')}>Counter 3:</button>
        </div>
    </>
  )
}
