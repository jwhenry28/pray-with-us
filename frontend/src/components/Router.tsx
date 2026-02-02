import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";
import SaintsGrid from "./SaintsGrid";
import SaintEditor from "./SaintEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "saints", element: <SaintsGrid />, handle: { title: "Home" } },
      {
        path: "saints/:id",
        element: <SaintEditor />,
        handle: { title: "Edit" },
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
