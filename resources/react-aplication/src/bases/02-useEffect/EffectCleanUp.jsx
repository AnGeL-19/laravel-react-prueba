import React, { useState } from 'react'
import { Message } from './Message'

export const EffectCleanUp = () => {

    const [showComponent, setShowComponent] = useState(false)

    const handleChangeFlag = () => {
        setShowComponent( prev => !prev )
    }

  return (
    <div>
        <h1>EffectCleanUp</h1>
        <hr />

        <h3>
            Componente: {''}
            {
                !showComponent
                ? 'Componente desmontado'
                : 'Componente montado'
            }
        </h3>

        { showComponent && <Message/> }

        <button
            onClick={handleChangeFlag}
        >
            {
                !showComponent
                ? 'Montar'
                : 'Desmontar'
            }
        </button>
    </div>
  )
}
