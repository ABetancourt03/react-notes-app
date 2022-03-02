import React from 'react'

const NotesTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { id, title, body } = el

  return (
    <tr>
      <td>{title}</td>
      <td>{body}</td>
      <td>
        <button onClick={() => setDataToEdit(el)} className='btn-edit'>
          <i className='fa fa-pencil'></i>
        </button>
        <button onClick={() => deleteData(id)} className='btn-delete'>
          <i className='fa fa-trash'></i>
        </button>
      </td>
    </tr>
  )
}

export default NotesTableRow
