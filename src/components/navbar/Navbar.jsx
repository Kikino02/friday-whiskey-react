import { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import Icon from "../common/Icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggler() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav className="relative mt-8 text-white flex items-center justify-around px-8 py-5 max-w-[1750px] w-[90%] bg-darkGreyButton rounded-3xl border border-white/40 mx-auto">
      <img
        src="/photos/logo/logo_mix.png"
        alt="FW logo"
        className="w-[43px] h-[42px]"
      />

      <div className="hidden md:flex gap-5 lg:gap-10 lg:text-lg font-julee">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-primaryRed" : "hover:text-gray-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primaryRed" : "hover:text-gray-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/concerts"
          className={({ isActive }) =>
            isActive ? "text-primaryRed" : "hover:text-gray-300"
          }
        >
          Concerts
        </NavLink>
        <NavLink
          to="/photos"
          className={({ isActive }) =>
            isActive ? "text-primaryRed" : "hover:text-gray-300"
          }
        >
          Media
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primaryRed" : "hover:text-gray-300"
          }
        >
          Contact us
        </NavLink>
      </div>

      <div className="flex gap-3 lg:gap-5 text-lightGrey text-lg md:text-base lg:text-2xl">
        <a
          href="https://www.instagram.com/fridaywhiskey_official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fab iconName="instagram" />
        </a>
        <a
          href="https://www.youtube.com/@fridaywhiskey9651"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fab iconName="youtube" />
        </a>
        <a
          href="https://www.facebook.com/fridaywhiskey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fab iconName="facebook-f" />
        </a>
        <a
          href="https://open.spotify.com/artist/48FhKSw9yDR42T1MFWG9DP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon fab iconName="spotify" />
        </a>
      </div>

      <div
        onClick={handleToggler}
        className="flex md:hidden text-3xl cursor-pointer"
      >
        {isOpen ? <Icon iconName="x" /> : <Icon iconName="bars" />}
      </div>

      {isOpen && <MobileNav handleLinkClick={handleToggler} />}
    </nav>
  );
}
