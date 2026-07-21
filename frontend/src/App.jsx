import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateNote from './pages/CreateNote'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateNote />} />
      </Routes>
    </div>
  )
}

export default App