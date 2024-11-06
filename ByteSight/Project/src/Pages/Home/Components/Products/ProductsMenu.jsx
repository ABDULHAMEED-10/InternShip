import { ProductData } from "./ProductData"
export const ProductsMenu = () => {
  return (
      <div className="bg-gray-100 m-4 p-6 rounded-xl">
          {/*  */}
          <div className="flex gap-10 p-2">
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
          
        
          <div>
              <ProductData />
          </div>
    </div>
  )
}
