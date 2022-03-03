import React from 'react'

const DeleteNoteModal = ({ data }) => {
  let { title } = data.find(el => el.id === id).title

  return (
    <div className='modal'>
      <h3>Estas Seguro de eliminar la nota con el titulo {title}</h3>
    </div>
  )
}

export default DeleteNoteModal
