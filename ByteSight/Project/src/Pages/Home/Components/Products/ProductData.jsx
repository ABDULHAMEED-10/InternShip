import  {productListData}  from "../../../../Data";
export const ProductData = () => {
  return (
    <div>
          <table className="bg-gray-100 text-gray-800">
              <thead className="bg-ListRed text-gray-200">
                  <tr className="flex text-sm font-medium py-4">
                      <th className="w-28">Product</th>
                      <th className="w-28">Product ID</th>
                      <th className="w-28">Make</th>
                      <th className="w-28">Vendors</th>
                      <th className="w-28">Unit</th>
                      <th className="w-28">Unit-Cost</th>
                      <th className="w-28">Selling Price</th>
                      <th className="w-28">Reorder Point</th>
                      <th className="w-28">Sub Category</th>
                      <th className="w-28">Product Status</th>
                      <th className="w-28">Actions</th>
                  </tr>
              </thead>
              <tbody>
                    
       { productListData.map((product) => {
              return (
                <tr key={product.id} className="flex text-sm font-medium text-center mt-4">
                  
                      <td className="w-28">{product.Product}</td>
                      <td className="w-28">{product.ProductID}</td>
                      <td className="w-28">{product.Make}</td>
                      <td className="w-28">{product.Vendors}</td>
                      <td className="w-28">{product.Unit}</td>
                      <td className="w-28">{product.UnitCost}</td>
                      <td className="w-28">{product.SellingPrice}</td>
                      <td className="w-28">{product.ReorderPoint}</td>
                      <td className="w-28">{product.SubCategory}</td>
                      <td className="w-28">{product.ProductStatus}</td>
                      <td className="w-28">{product.Actions}</td>
                    
       </tr>
                
              );
       })}
       </tbody>
              
          </table>
          
    </div>
  );
};
