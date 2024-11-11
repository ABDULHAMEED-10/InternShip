import { MdOutlineSearch } from "react-icons/md";
import { useState } from 'react';
export const Header = () => {
  const [notification, setNotification] = useState(true);
  return (
    <div className="flex items-center gap-10 pt-10">
      <div className="flex items-center w-4/5 bg-gray-100 rounded-xl p-4">
        <div className="flex gap-10 items-center">
        <div className="flex text-2xl ">
        <MdOutlineSearch />
          </div>
          <div className="text-base">
            <h3>Search here</h3>
          </div>
        </div>
      </div>
       
        <div className="flex items-center gap-3 bg-gray-100 p-3 w-1/5 rounded-xl justify-between">
        <div className="flex items-center">
        <img
            src="https://via.placeholder.com/150"
            alt="logo"
            className="w-8 h-8 rounded-full mx-auto"
          />
          <select className="bg-gray-100 text-xs ">
            <option>Abdul Hameed</option>
            <option>Sameer Doltana</option>
            <option>Abdul Hameeed</option>
          </select>
         </div>
          <div className="relative flex items-center border border-gray-300 p-0.5 text-gray-700 rounded-md">
          <i className="fa-solid fa-bell text-base"></i>
          {notification && <span className="absolute top-0 right-0 bg-red-500 rounded-full w-1 h-1"></span>}
          </div>
        </div>
        
    </div>
  )
}
