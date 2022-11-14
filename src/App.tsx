import React from 'react';
import {Routes, Route} from "react-router-dom"
import SiteBar from './components/Sitebar/SiteBar';
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import Catergory from "./Pages/Category/Category"
import Atribut from "./Pages/Atribut/Atribut"
import Order from "./Pages/Order/Order"
import CallBack from "./Pages/CallBack/CallBack"
import Settings from "./Pages/Settings/Settings"
import "./Assets/main.css"

function App() {
  return (
    <>
      <div className='flex'>
        <SiteBar />
        <div className='w-full'>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category' element={<Catergory/>}/>
            <Route path='/atribut' element={<Atribut/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/callBack' element={<CallBack/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
