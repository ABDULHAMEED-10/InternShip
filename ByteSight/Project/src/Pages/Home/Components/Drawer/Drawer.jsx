import { useState } from "react"
import drawerData from "../../../../Data"
export const Drawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`h-screen ${open ? 'w-56' : 'w-20'} bg-gray-100 absolute`}>
      <div className="mt-4 ml-4  flex gap-3">
        <img src="/assets/logo.png" alt="logo" className="w-12 h-12" />
        <h3 className="text-LogoRed font-semibold font-sans mt-8 text-xl">NOVA</h3>
      </div>
      <div className="mt-8">
        <ul className="space-y-4">
          
          {drawerData.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-2 pl-8 pt-4 text-gray-700">
            <i className={item.icon}></i>
            {open && <li className="font-semibold">{item.title}</li>}
            </div>
          ))}
          

        </ul>
      </div>
      <button onClick={() => setOpen(!open)} className="absolute top-1/2 transform -translate-y-1/2 right-0 ">
        <div className={`${open ? '-rotate-90' : 'rotate-90'} font-extrabold text-2xl`}>
          <i className="fa-solid fa-angle-up text-gray-700"></i>
        </div>
      </button>
    </div>
  )
}


