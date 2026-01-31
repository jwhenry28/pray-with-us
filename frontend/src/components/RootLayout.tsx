import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <main className="bg-pwu-primary min-h-screen pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
