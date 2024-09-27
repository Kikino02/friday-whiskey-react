import { NavLink } from "react-router-dom";

export default function MobileNav({ handleLinkClick }) {
  return (
    <div className="absolute left-0 right-0 top-full bg-darkGreyButton p-9 md:hidden z-10 rounded-3xl border border-white/40 font-julee">
      <div className="flex flex-col items-center text-3xl">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-primaryRed py-2" : "hover:text-gray-300 py-2"
          }
          onClick={handleLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primaryRed py-2" : "hover:text-gray-300 py-2"
          }
          onClick={handleLinkClick}
        >
          About
        </NavLink>
        <NavLink
          to="/concerts"
          className={({ isActive }) =>
            isActive ? "text-primaryRed py-2" : "hover:text-gray-300 py-2"
          }
          onClick={handleLinkClick}
        >
          Concerts
        </NavLink>
        <NavLink
          to="/photos"
          className={({ isActive }) =>
            isActive ? "text-primaryRed py-2" : "hover:text-gray-300 py-2"
          }
          onClick={handleLinkClick}
        >
          Media
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primaryRed py-2" : "hover:text-gray-300 py-2"
          }
          onClick={handleLinkClick}
        >
          Contact us
        </NavLink>
      </div>
    </div>
  );
}
