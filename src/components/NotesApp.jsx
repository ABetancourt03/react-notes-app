import React, { useState, useEffect } from 'react'

// Styles
import '../styles/Notes.css'

// Components
import NotesForm from './NotesForm'
import NotesTable from './NotesTable'
import DeleteNoteModal from './DeleteNoteModal'

const initialDb = []

const NotesApp = () => {
  const [db, setDb] = useState(initialDb)
  const [dataToEdit, setDataToEdit] = useState(null)

  const createData = data => {
    data.id = Date.now()
    setDb([...db, data])
  }

  const updateData = data => {
    let newData = db.map(el => (el.id === data.id ? data : el))
    setDb(newData)
  }

  const deleteData = id => {
    let title = db.find(el => el.id === id).title
    let isDelete = window.confirm(`¿Estás seguro de eliminar la nota con el titulo: "${title}"?`)

    if (isDelete) {
      let newData = db.filter(el => el.id !== id)
      setDb(newData)
    } else {
      return
    }
  }

  useEffect(() => {
    localStorage.getItem('db') && setDb(JSON.parse(localStorage.getItem('db')))
  }, [])

  useEffect(() => {
    localStorage.setItem('db', JSON.stringify(db))
  }, [db])

  return (
    <div className='notes-container'>
      <h2>Notes App</h2>
      <NotesForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <NotesTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
      {/* <DeleteNoteModal data={db} /> */}
    </div>
  )
}

export default NotesApp
