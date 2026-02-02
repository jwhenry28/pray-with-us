import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";
import SaintsGrid from "../home/SaintsGrid";
import SaintEditor from "../edit/SaintEditor";

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
