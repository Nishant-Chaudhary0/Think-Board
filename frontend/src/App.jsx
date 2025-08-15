import React from 'react'
import HomePage from './pages/HomePage'
import CreatedPage from './pages/CreatedPage'
import NoteDetailPage from './pages/NoteDetailPage'
import { Route } from 'react-router'
import { Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatedPage/>}/>
        <Route path="/notes/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
