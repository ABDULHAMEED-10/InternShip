import { Drawer } from "./Components/Drawer/Drawer"
import { Head } from "./Components/Head";
import { ProductList } from "./Components/Products/ProductList";

export const Home = () => {
  return (
    <div className=" bg-gray-200 flex">
      
      <div className="flex-[1.2]">

      <Drawer />
      </div>
      <div className="flex-[2]">

        <Head />
      <ProductList  />
      </div>
          
    </div>
  )
}
