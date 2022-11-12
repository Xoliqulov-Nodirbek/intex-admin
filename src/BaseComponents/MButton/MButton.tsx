import React from 'react'
import "./MButton.css"

export type ButtonProps = {
  BType: string
  children: React.ReactNode 
  type: 'button' | 'submit' | 'reset'
}


function MButton(props: ButtonProps) {
 
  return <button className={`btn ${props.BType} `} type={props.type}   >{props.children}</button>  

}

export default MButton
