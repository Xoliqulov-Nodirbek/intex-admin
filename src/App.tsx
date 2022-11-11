import React, { useState } from 'react'
import './Assets/main.css'
import FormInput from './BaseComponents/FormInput/FormInput'
import MButton from './BaseComponents/MButton/MButton'
import MFilter from './BaseComponents/MFilter/MFilter'
import MLabel from './BaseComponents/MLabel/MLabel'

function App() {
  const [state, setState] = useState(false)
  console.log(state)

  return (
    <>
      <MLabel type="label_pending">novey</MLabel>
      <MButton BType="filter" type="submit" onClick={() => setState(true)}>
        Send
      </MButton>
      <MFilter>250 см</MFilter>

      {state === true ? (
        <MFilter>
          Мах
          <span className="bg-red-200" onClick={() => setState(false)}>
            &times;
          </span>
        </MFilter>
      ) : null}<br />

      <FormInput />
    </>
  )
}

export default App
