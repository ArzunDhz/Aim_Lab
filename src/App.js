import React from 'react'

import InGame from './components/Ingame'

import PreGame from './components/PreGame'
import { BrowserRouter , Route , Routes } from 'react-router-dom'



const App = () => {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/ingame' element={<InGame/>}>  </Route>
      <Route path='/' element={<PreGame/>}>  </Route>
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App



