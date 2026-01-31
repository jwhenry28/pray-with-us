import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-pwu-primary">
      <nav className="flex flex-row justify-between bg-pwu-secondary border-b border-r border-black max-w-[25%] p-2 px-8">
        <NavLink to="/saints">Home</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
