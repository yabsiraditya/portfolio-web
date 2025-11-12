import { useState } from 'react'
import { Route, Routes } from 'react-router'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App
