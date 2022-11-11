import { useState } from 'react'
import Logo from "../../Assets/Images/NavbarImgs/Site-logo.svg"
import { NavLink, Router } from "react-router-dom"
import DropIcon from "../../Assets/Images/NavbarImgs/dropIcon.svg"
import { ProductIcon, CallIcon, OrderICon, ExitICon, SettingsIcon } from "../../Assets/Images/NavbarImgs/NavBarIcons"

export default function SiteBar() {
  const [innnerActice, setInnnerActice] = useState(false)
  const [categoryActive, setCategoryActive] = useState(false)
  const [atributActive, setAtributActive] = useState(false)
  function handActive() {
    setInnnerActice(true)
    setCategoryActive(false)
    setAtributActive(false)

  }
  function handCategory() {
    setCategoryActive(true)
    setInnnerActice(false)
    setAtributActive(false)

  }
  function handAtribut() {
    setAtributActive(true)
    setCategoryActive(false)
    setInnnerActice(false)
  }


  return (
    <div className='bg-white w-sitebarWidth h-screen'>
      <div className='pb-8  px-5'>
        <div className='py-8 border-b-2'>
          <img src={Logo} alt="Site Logo" width={180} height={17} />
        </div>
      </div>
      <div className=''>
        <NavLink className="py-4 flex relative items-center px-6 text-sm leading-lead font-medium text-navBarColor" to={'/'}>
          <ProductIcon />
          <span className='ml-navBarIcon'>Продукты</span>
          <img className='absolute right-6' src={DropIcon} alt="Drop IMg" width={10} height={9} />
        </NavLink>
        <ul>
          <li> 
            <NavLink onClick={handActive} className={`${innnerActice ? "anterActive" : ""} py-2.5 pl-14 block font-normal text-navBarColor text-sm`} to={'listProduct'}>Список продуктов</NavLink>
          </li>
          <li>
            <NavLink onClick={handCategory} className={`${categoryActive ? "anterActive" : ""} py-2.5 pl-14 block font-normal text-navBarColor text-sm`} to={'category'}>Категории</NavLink>
          </li>
          <li>
            <NavLink onClick={handAtribut} className={`${atributActive ? "anterActive" : ""} py-2.5 pl-14 block font-normal text-navBarColor text-sm  `} to={'atribut'}>Атрибуты</NavLink>
          </li>
        </ul>
        <NavLink className="py-4 flex items-center px-6 text-sm leading-lead font-medium text-navBarColor" to={'/order'}>
          <OrderICon />
          <span className='ml-navBarIcon'>Заказы</span>
        </NavLink>
        <NavLink className="py-4 flex items-center px-6 text-sm leading-lead font-medium text-navBarColor" to={'/callBack'}>
          <CallIcon />
          <span className='ml-navBarIcon'>Обратный связ</span>
        </NavLink>
        <NavLink className="py-4 flex items-center px-6 text-sm leading-lead font-medium text-navBarColor" to={'/settings'}>
          <SettingsIcon />
          <span className='ml-navBarIcon'>Настройки сайта</span>
        </NavLink>
        <NavLink className="py-4 flex items-center px-6 text-sm leading-lead font-medium text-navBarColor" to={'/exit'}>
          <ExitICon />
          <span className='ml-navBarIcon'>Выйти</span>
        </NavLink>
      </div>
    </div>
  )
}
