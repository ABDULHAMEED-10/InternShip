import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Layout } from "./Root/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
