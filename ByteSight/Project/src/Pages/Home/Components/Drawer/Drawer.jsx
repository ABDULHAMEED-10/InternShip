import { useState } from "react"
import {drawerData} from "../../../../Data"

export const Drawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${open ? 'w-56' : 'w-20'} bg-gray-100 `}>
      
      <div className="">
      <div className="pt-4 pl-4  flex gap-3">
        <img src="/assets/logo.png" alt="logo" className="w-12 h-12" />
        <h3 className={`text-LogoRed font-semibold font-sans mt-8 text-xl  ${open ? 'flex' : 'hidden'}`}>NOVA</h3>
      </div>
      <div className="pt-8">
        <ul className="space-y-3">
          
          {drawerData.map((item) => (
            <div key={item.id} className="flex items-center gap-4 pl-8 pt-5 text-gray-700">
            <i className={item.icon}></i>
            {open && <li className="font-semibold">{item.title}</li>}
            </div>
          ))}
          
          

        </ul>
      </div>
      <button onClick={() => setOpen(!open)} className="  ">
        <div className={`${open ? '-rotate-90' : 'rotate-90'} font-extrabold text-2xl absolute top-20 left-52`}>
          <i className="fa-solid fa-angle-up text-gray-700"></i>
        </div>
      </button>   
      </div>
    </div>
  )
}


