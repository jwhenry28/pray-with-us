import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";
import SaintsGrid from "./SaintsGrid";
import SaintEditor from "./SaintEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "saints", element: <SaintsGrid /> },
      { path: "saints/:id", element: <SaintEditor /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
