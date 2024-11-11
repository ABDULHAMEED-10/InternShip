import { Outlet } from "react-router-dom"
import { Header } from "../Layout/Header"
import { SideBar } from "./SideBar"
export const Root = () => {
  return (
    <div className=" bg-gray-200 flex ">
    <div className="bg-white">
      <SideBar />
    </div>
    <div className="flex flex-col w-full px-14">
      <Header />
      <Outlet />
    </div>
  </div>

  )
}
