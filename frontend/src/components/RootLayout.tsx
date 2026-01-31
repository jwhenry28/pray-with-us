import { Outlet } from "react-router-dom";

import NavBar from "./Navigation";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className="bg-pwu-primary min-h-screen pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
