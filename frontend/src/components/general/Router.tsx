import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";
import HomePage from "@/components/home/HomePage";
import SaintsGrid from "@/components/saints/SaintsGrid";
import SaintEditor from "@/components/edit/SaintEditor";
import ComingSoon from "@/components/shared/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage />, handle: { title: "Home" } },
      { path: "saints", element: <SaintsGrid />, handle: { title: "Saints" } },
      {
        path: "saints/:id",
        element: <SaintEditor />,
        handle: { title: "Edit" },
      },
      { path: "users", element: <ComingSoon />, handle: { title: "Users" } },
      {
        path: "settings",
        element: <ComingSoon />,
        handle: { title: "Settings" },
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
