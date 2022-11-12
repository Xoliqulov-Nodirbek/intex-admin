import React from 'react'
import './FormInput.css'

export type InputProps = {
  name: string
  required: boolean
  type: string
  id: string
  placeholder: any
}

function FormInput(props: InputProps) {
  return (
    <>
      <input
        className="form_input"
        name={props.name}
        required={props.required}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </>
  )
}

export default FormInput
