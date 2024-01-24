import React, { useState } from 'react'

export const MultipleInputForm = () => {

    const [valuesInputs, setValuesInputs] = useState({
        email: '',
        password: 'a',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(valuesInputs);
    }

    const handleChange = (e) => {
        setValuesInputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

  return (
    <>
       <h1>Multiple Input Form</h1>
      <hr />

      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label>Email address</label>
          <input
            className='form-control'
            placeholder='Enter email'
            name='email'
            type='email'
            value={valuesInputs.email}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name='password'
            onChange={handleChange}
            value={valuesInputs.password}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form> 
    </>
  )
}
