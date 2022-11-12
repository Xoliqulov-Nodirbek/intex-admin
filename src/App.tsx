
import React from 'react';
import SiteBar from './components/Sitebar/SiteBar';
import Header from "./components/Header/Header" 
import "./Assets/main.css"

function App() {

  return (
    <>
      <div className='flex'>
        <SiteBar/>
        <div className='w-full'>
          <Header/>
          {/* <h1></h1> */}
        </div>
      </div>

    </>
  )
}

export default App
