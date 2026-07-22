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
       
      <section>
        {
          notes.map((note, index) => {
            return (
              <NoteCard note={note} />
            )
          })
        }
      </section>
    </div>
  )
}

export default Home