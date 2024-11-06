import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Root } from "./Layout/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
