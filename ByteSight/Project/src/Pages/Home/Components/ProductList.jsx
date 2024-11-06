import { ProductsMenu } from "./ProductsMenu"

export const ProductList = () => {
  return (
    <div>
      {/* Product list buttton */}
      <div className="flex justify-around items-center mt-8 text-sm">
        <div className="bg-gray-100 w-40 h-10 rounded flex justify-center items-center cursor-pointer">
          <span className="flex justify-center items-center gap-4">
            <select className="bg-gray-100 border-none outline-none">
              <option value="all">All Products</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
        </span>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex bg-gray-100 w-52 h-10 rounded justify-center items-center cursor-pointer">
            <span className="flex items-center justify-center gap-4">
            <i className="fa-solid fa-plus"></i>
            <p>
              Create Department
            </p>
           </span>
          </div>
          <div className="bg-gray-100 w-52 h-10  rounded flex justify-center items-center cursor-pointer">
            <span className="flex items-center gap-4 ">
            <i className="fa-solid fa-plus"></i>
            <p>
              Create Product
            </p>
           </span>
          </div>
        </div>
      </div>
      {/* Product list table */}
      <div className="flex p-10 ">
        <ProductsMenu />
      </div>
    </div>
  )
}
