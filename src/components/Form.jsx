import React, { useState } from 'react'

const initialForm = {
  user: '',
  email: '',
  password: ''
}

const Form = ({ formType }) => {
  const [form, setForm] = useState(initialForm)

  const handleRegister = async e => {
    e.preventDefault()
  }

  const handleLogin = e => {
    e.preventDefault()
  }

  if (formType === 'register') {
    return (
      <div className='form'>
        <form onSubmit={handleRegister} className='access-form'>
          <h3>Register to Notes App</h3>
          <input type='text' placeholder='Username' name='user' />
          <input type='text' placeholder='Email' name='email' />
          <input type='password' placeholder='Password' name='password' />
          <input type='submit' value='Register' />
        </form>
      </div>
    )
  }

  if (formType === 'login') {
    return (
      <div className='form'>
        <form onSubmit={handleLogin} className='access-form'>
          <h3>Login to Notes App</h3>
          <input type='text' placeholder='Username' name='user' />
          <input type='password' placeholder='Password' name='password' />
          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default Form
