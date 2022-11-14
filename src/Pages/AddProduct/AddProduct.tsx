import {useState} from "react"
import Information from "./ProductPages/Infotmation/Infotmation"
import ProductImgs from "./ProductPages/ProductImages/Images"
import AtributPage from "./ProductPages/AtributPage/AtributPage"
import Line from "./../../BaseComponents/Line/Line"

export default function AddProduct() {
  const [info, setInfo] = useState(true)
  const [img, setImg] = useState(false)
  const [atr, setAtr] = useState(false)
  const openInfo = () => {
    setInfo(true)
    setImg(false)
    setAtr(false)
  }
  const openImg = () => {
    setImg(true)
    setInfo(false)
    setAtr(false)
  }
  const openAtribut = () => {
    setAtr(true)
    setImg(false)
    setInfo(false)
  }

  return (
    <div className="py-6 px-headerPaddingX">
      <div className="mb-6">
        <h2 className="font-bold text-2xl leading-8">Добавить продукт</h2>
      </div>
      <div className="bg-white p-6 rounded-xl">
        <ul className="flex items-center list-none space-x-4 w-addProductListWidth border-b-2">
          <li onClick={() => openInfo()} className={` font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}>
            Информация
            {info ? <Line/> : ""}
          </li>
          <li onClick={() => openImg()} className={`font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}>
            Изображение
            {img ? <Line/> : ""}
            </li>
          <li onClick={() => openAtribut()} className={`font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}>
            Атрибуты
            {atr ? <Line/> : ""}
            </li>
        </ul>
        {info ? <Information/> : ""}
        {img ? <ProductImgs/> : ""}
        {atr ? <AtributPage/> : ""} 
      </div>
    </div>
  )
}
