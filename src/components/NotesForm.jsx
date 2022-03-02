import React, { useState, useEffect } from 'react'

const initailForm = {
  id: null,
  title: '',
  body: ''
}

const NotesForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm)

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit)
    } else {
      setForm(initailForm)
    }
  }, [dataToEdit])

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleReset = e => {
    setForm(initailForm)
    setDataToEdit(null)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!form.title || !form.body) {
      alert('Datos incompletos')
      return
    }

    if (form.id === null) {
      createData(form)
    } else {
      updateData(form)
    }

    handleReset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          onChange={handleChange}
          type='text'
          placeholder='Note Title'
          name='title'
          value={form.title}
        />
        <input
          autoComplete='off'
          onChange={handleChange}
          type='text'
          placeholder='Note Content'
          name='body'
          value={form.body}
        />
        <button>Add Note</button>
      </form>
    </div>
  )
}

export default NotesForm
