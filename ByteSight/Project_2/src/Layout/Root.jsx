import { Outlet } from "react-router-dom"
import { Header } from "../Layout/Header"
import { SideBar } from "../Layout/SideBar"

export const Root = () => {
  return (
      <div>
        <Header />
        <SideBar />
        <Outlet />
    </div>
  )
}
