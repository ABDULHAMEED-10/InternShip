import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { SideBar } from "./SideBar"

export const Layout = () => {
  return (
      <div>
        <Header />
        <SideBar />
        <Outlet />
    </div>
  )
}
