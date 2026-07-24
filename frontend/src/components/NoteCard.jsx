import React from 'react'

const NoteCard = (props) => {
  return (
    <div className='p-3 border rounded-md flex flex-col gap-2 border-gray-300'>
      <h3 className='font-semibold'>{props.note.title}</h3>
      <p className='text-sm'>{props.note.description}</p>
      <div className=''>
        <div>
          <button classname>UPDATE</button>
          <button class>DELETE</button>
        </div>
        <h4 className='text-sm text-right'>{props.note.createdAt}</h4>
      </div>
    </div>
  )
}

export default NoteCard