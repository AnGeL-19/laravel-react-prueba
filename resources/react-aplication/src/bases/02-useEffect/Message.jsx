import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log('montar');

      const handleMoveMouse = () => {
        console.log(':)');
      }

      window.addEventListener('mousemove', handleMoveMouse);
    
      return () => {
        console.log('desmontar - clean');
        window.removeEventListener('mousemove', handleMoveMouse);
      }

    }, [])
    

  return (
    <div>Message</div>
  )
}
