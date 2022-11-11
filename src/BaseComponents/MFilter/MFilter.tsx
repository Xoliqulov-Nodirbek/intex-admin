import React from 'react'

export type filterBut = {
    children: React.ReactNode
}

function MFilter(props: filterBut)  {
   
    return (
        <span className='py-1 px-2 bg-[#9CDAFF] rounded-md text-xs text-[#24283A] leading-4' >{props.children}</span>
    )
}

export default MFilter
