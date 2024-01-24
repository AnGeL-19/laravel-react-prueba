import React, { useState } from 'react'

export const Form = () => {

    const [input, setInput] = useState('')

    const handleInputChanged = (e) => {
        setInput(e.target.value)
    }

  return (
    <>
        <h1>Formulario controlado</h1>
        <hr />

        <span>Buesqueda de pokemon: {input}</span>
        <form>
            <input type="text" 
                name="search" 
                placeholder='Search' 
                autocomplete="off"
                onChange={handleInputChanged}
                value={input}
            />
            
            <button>Buscar</button>
        </form>
    </>
  )
}
