import React, { useEffect } from 'react'
import HomeHeader from '../components/HomeHeader'
import { useNoteStore } from '../store/Note'
import NoteCard from '../components/NoteCard';


const Home = () => {

  const { fetchNotes, notes } = useNoteStore();

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (
    <div>
      <section>
        <HomeHeader />
      </section>

       
      <section className='p-4'>
        <div className='flex flex-col gap-4'>
          {
          notes.map((note, index) => {
            return (
              <NoteCard key={index} note={note} />
            )
          })
        }
        </div>
      </section>
    </div>
  )
}

export default Home