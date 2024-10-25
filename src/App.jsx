import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/Home'
import RoomPage from './pages/room/Room'
function App() {
 
  return (
    <>
      <div className='bg-gray-900'>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path='/room/:roomId' element={<RoomPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
