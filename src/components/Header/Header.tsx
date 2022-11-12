import React from 'react'

export default function Header() {
  return (
    <div className='bg-white w-full py-headerPaddingTopBottom px-headerPaddingX border-b-2'>
        <input id='search-inp' className='w-headerInputWidth outline-none py-2.5 pl-headerInpPl bg-headerInpBg rounded-xl' type="text" placeholder='Поиск' />
        <div>
          
        </div>
    </div>
  )
}
