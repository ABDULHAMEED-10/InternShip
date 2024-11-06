import { Drawer } from "./Components/Drawer"
import { Head } from "./Components/Head";
import { ProductList } from "./Components/Products/ProductList";

export const Home = () => {
  return (
    <div className=" bg-gray-200 flex ">
      
      <div className="flex">

      <Drawer />
      </div>
      <div className="flex flex-col w-full">

        <Head />
      <ProductList  />
      </div>
          
    </div>
  )
}
