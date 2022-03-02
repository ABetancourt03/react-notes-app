import React from 'react'
import NotesTableRow from './NotesTableRow'

const NotesTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map(el => (
            <NotesTableRow
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))
        ) : (
          <tr>
            <td colSpan='3'>Sin datos</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default NotesTable
