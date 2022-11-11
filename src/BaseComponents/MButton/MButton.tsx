import React from 'react'
import "./MButton.css"

export type ButtonProps = {
  BType: string
  children: React.ReactNode 
  type: 'button' | 'submit' | 'reset'
  onClick: any
}


function MButton(props: ButtonProps) {
 
  return <button className={`btn ${props.BType} `} type={props.type} onClick={props.onClick}  >{props.children}</button>  

}

export default MButton
