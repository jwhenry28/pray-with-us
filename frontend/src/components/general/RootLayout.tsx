import { useState } from "react";
import { Outlet, useMatches } from "react-router-dom";

import NavigationBar from "./NavigationBar";

const RootLayout = () => {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const pageTitle = (currentMatch?.handle as { title?: string })?.title ?? "";

  const [navbarIsExpanded, setNavbarIsExpanded] = useState(true);

  const handleOnExpand = () => {
    setNavbarIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-pwu-primary">
      <header className="p-4 bg-pwu-secondary border-b border-black text-xl">
        <div className="flex flex-row">
          <p className="text-xl">Pray With Us</p>
          <div className="mx-4 my-1 w-px bg-black" />
          <p>{pageTitle}</p>
        </div>
      </header>
      <div className="flex flex-row pt-4 pl-4 ">
        <NavigationBar
          isExpanded={navbarIsExpanded}
          onExpand={handleOnExpand}
        />
        <main className="min-h-screen flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
