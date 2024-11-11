import { sideBarData } from "../Utils/Data";
import { Link } from "react-router-dom"
export const SideBar = () => {
   return (
    <div className='w-60 h-full bg-gray-100'>
      <div className="">
      <div className="flex justify-center pt-5">
        <img src="/assets/image 5.png" alt="logo" className="w-40 h-14" />
      </div>
      <div className="pt-16 px-4">
        <ul className="flex flex-col gap-8">
          {sideBarData.map((item) => (
            <Link to={item.link } key={item.id} className="hover:bg-cutom-blue hover:text-gray-100 rounded px-5 flex gap-3 items-center text-gray-700 h-12 font-serif text-lg font-normal leading-normal transition">
            <div className="w-2/12">{item.icon}</div>
            {open && <li className="w-5/6">{item.title}</li>}
            </Link>
          ))}
          
          

        </ul>
      </div>
       
      </div>
    </div>
  )
}


