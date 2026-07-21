import React from 'react'
import CreateHeader from '../components/CreateHeader'

const CreateNote = () => {
  return (
    <div>
      <section>
        <CreateHeader />
      </section>
      

      <section>
        <form action="" className='p-4 flex flex-col gap-6' >
          <div className='p-2 border-b border-gray-300 '>
            <input className='text-2xl w-full outline-0 font-semibold' type="text" placeholder='Note title...' />
          </div>
        

          <div>
            <input className='outline-0 w-full ' type="text" placeholder='Start writing...' />
          </div>
        </form>
      </section>
    </div>
  )
}

export default CreateNote