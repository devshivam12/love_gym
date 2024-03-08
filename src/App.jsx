import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import NavBar from './components/NabBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width="400px" m="auto" sx={{ width: { xl: '1400px' } }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
