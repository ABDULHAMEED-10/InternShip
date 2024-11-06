import { productListData } from "../../../../Data";
let rows = 1;
export const ProductData = () => {
  return (
    <div className="">
    <table className="table-auto bg-gray-100 text-gray-800 w-full">
      <thead>
        <tr className="text-gray-200 h-14 text-sm bg-ListRed">
          {/* <div className="flex items-center justify-end mr-2 h-14 ">
            <div className="flex items-center gap-1">
            <th>Product</th>
            <i className="fa-solid fa-arrow-up opacity-90 text-xs font-extralight"></i>
            </div>
            <div className="ml-3">
            <i className="fa-solid fa-ellipsis-vertical opacity-90 text-xs font-extralight"></i>
            </div>
          </div> */}
          <th>Product</th>
          <th>Product ID</th>
          <th>Make</th>
          <th>Vendors</th>
          <th>Unit</th>
          <th>Unit Cost</th>
          <th>Selling Price</th>
          <th>Reorder Point</th>
          <th>Sub Category</th>
          <th>Product Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {productListData.map((product) => {
          return (
            <tr key={product.id} className="text-sm text-center h-10">
              <td>{product.Product}</td>
              <td>{product.ProductID}</td>
              <td>{product.Make}</td>
              <td>{product.Vendors}</td>
              <td>{product.Unit}</td>
              <td>{product.UnitCost}</td>
              <td>{product.SellingPrice}</td>
              <td>{product.ReorderPoint}</td>
              <td>{product.SubCategory}</td>
              <td>{product.ProductStatus}</td>
              <td>{product.Actions}</td>
            </tr>
          );
        })}
        
      </tbody>
      </table>
      <div className="bg-ListRed text-gray-200 h-12 text-sm font-sans flex items-center w-full justify-around">
          <div className="w-2/4">
            <p className="text-gray-100">{rows} row selected</p>
          </div>
          <div className="flex items-center gap-10 ">
            <div className="flex items-center gap-4 ">
              <p className="text-gray-300">Rows per page:</p>
              <select className="bg-ListRed text-gray-300 border-none outline-none">
                <option value="all">30</option>
                <option value="selected">50</option>
                <option value="none">100</option>
              </select>
            </div>
            <div className="flex gap-8 items-center">
              <p className="text-gray-300">1 to 2 of 2</p>
            <div className="flex items-center gap-2">
            <i className="fa-solid fa-chevron-left text-xs"></i>
            <i className="fa-solid fa-chevron-right text-xs"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
