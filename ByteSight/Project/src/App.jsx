import { Layout } from "./Layout/Layout";
import { Home } from "./Pages/Home/Home";
import { Warehouse } from "./Pages/Warehouse/Warehouse";
import { StockIn } from "./Pages/Stock In/StockIn";
import { StockOut } from "./Pages/Stock Out/StockOut";
import { StockUtilization } from "./Pages/Stock Utilization/StockUtilization";
import { Reports } from "./Pages/Reports/Reports";
import { SubBranches } from "./Pages/Sub Branches/SubBranches";
import { Employees } from "./Pages/Employees/Employees";
import { Customers } from "./Pages/Customers/Customers";
import { Vendors } from "./Pages/Vendors/Vendors";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/warehouse",
        element: <Warehouse />,
      },
      {
        path: "/stock-in",
        element: <StockIn />,
      },
      {
        path: "/stock-out",
        element: <StockOut />,
      },
      {
        path: "/stock-utilization",
        element: <StockUtilization />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/sub-branches",
        element: <SubBranches />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/vendors",
        element: <Vendors />,
      },
      
      
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
