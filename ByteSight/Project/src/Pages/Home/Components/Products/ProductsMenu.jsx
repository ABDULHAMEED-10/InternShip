import { ProductData } from "./ProductData"
export const ProductsMenu = () => {
  return (
      <div className="bg-gray-100 rounded-xl w-full">
          {/*  */}
          <div className="flex gap-8 px-6 py-4 text-sm">
          <div className="flex items-center gap-2">
              <i className="fa-solid fa-bars "></i><p>
              Columns
          </p>
          </div>
          <div className="flex items-center gap-2">
          <i className="fa-solid fa-filter"></i>
                  <p>
              Filter
          </p>
          </div>
          <div className="flex items-center gap-2">
              <i className="fa-solid fa-bars"></i><p>
              Density
          </p>
          </div>
          <div className="flex items-center gap-2">
          <i className="fa-solid fa-download"></i>
                  <p>
              Export
          </p>
          </div>
          </div>
          {/*  */}
          
        
          <div className="">
              <ProductData />
          </div>
    </div>
  )
}
