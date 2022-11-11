import React from 'react'
import './MLabel.css'

export type LabelProps = {
  type: string
  children: React.ReactNode
}

function MLabel(props: LabelProps) {
  return (
    <>
      <div className={`label ${props.type}`} >{props.children}</div>
    </>
  )
}

export default MLabel
