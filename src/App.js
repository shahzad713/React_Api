import React from 'react'
import {Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './component/Home'
import About from "./component/About"
import Contact from "./component/Contact";
import AddUser from './component/pages/AddUser'
import ViewPage from './component/pages/ViewPage'
import UpDatePage from './component/pages/UpDatePage'
function App() {
    return (
        <div>
           <NavBar/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/adduser' element={<AddUser/>}/>
              <Route path='/view/:id' element={<ViewPage/>}/>
              <Route path='/updatepage/:id' element={<UpDatePage/>}/>




           </Routes>
        </div>
    )
}

export default App
