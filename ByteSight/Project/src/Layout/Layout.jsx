import { Outlet } from "react-router-dom";
import { Drawer } from "../Layout/Drawer";
import { Head } from "../Layout/Head";
export const Layout = () => {
  return (
    <div className=" bg-gray-200 flex ">
      <div className="flex">
        <Drawer />
      </div>
      <div className="flex flex-col w-full">
        <Head />
        <Outlet />
      </div>
    </div>
  );
};
