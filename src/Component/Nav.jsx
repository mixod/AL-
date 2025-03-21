import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex bg-gray-200 shadow-lg h-10 ">
      <ul className="flex max-w-6xl mx-auto justify-center items-center gap-2">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
