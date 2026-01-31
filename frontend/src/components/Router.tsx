import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";
import SaintsGrid from "./SaintsGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <SaintsGrid /> }],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
