import { useState } from "react"
import {drawerData} from "../../../Data"

export const Drawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${open ? 'w-56' : 'w-24'} bg-gray-100 `}>
      
      <div className="">
      <div className="h-20 w-full pl-8 mt-4 flex gap-2">
        <img src="/assets/logo.png" alt="logo" className="w-14 h-14" />
        <div className={`text-LogoRed font-bold font-sans flex items-end text-2xl  ${open ? 'flex' : 'hidden'}`}><>NOVA</></div>
      </div>
      <div className="pt-8">
        <ul className="flex flex-col gap-2">
          
          {drawerData.map((item) => (
            <div key={item.id} className="flex gap-6 items-center pl-8 text-gray-700 text-sm h-12 ">
            <div className="w-2/12"><i className={item.icon}></i></div>
            {open && <li className="font-semibold w-5/6">{item.title}</li>}
            </div>
          ))}
          
          

        </ul>
      </div>
      <button onClick={() => setOpen(!open)} className="  ">
        <div className={`${open ? '-rotate-90 left-52' : 'rotate-90 left-24 bg-gray-100'}  w-8 h-10 rounded-tr rounded-tl font-semibold text-2xl absolute top-28`}>
          <i className="fa-solid fa-angle-up text-gray-700"></i>
        </div>
      </button>   
      </div>
    </div>
  )
}


