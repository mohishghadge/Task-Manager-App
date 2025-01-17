import React from "react";
import { NavLink } from "react-router-dom";
import LogoTM from "../../src/assets/LogoTM.png";
import TickList from "../../src/assets/TickList.png";
import { RouteIndex, RouteTaskList } from "../helper/RouteName"; // Assuming these routes are defined

const Navbar = () => {
  // Base button classes for inactive and active states
  const baseButtonClass =
    "mx-2 text-lg sm:text-2xl font-semibold transition-colors duration-300 cursor-pointer";
  const inactiveClass = "text-white hover:text-gray-900";
  const activeClass = "text-blue-600 hover:text-blue-800";

  return (
    <div className="bg-slate-400 flex flex-col sm:flex-row items-center justify-between px-6 py-4 drop-shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={LogoTM}
          alt="Logo"
          className="h-[60px] w-[80px] sm:h-[80px] sm:w-[100px] transition-transform duration-300"
        />
        <img
          src={TickList}
          alt="TickList"
          className="h-[40px] w-[120px] sm:h-[60px] sm:w-[140px] ml-4 transition-transform duration-300"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row justify-around items-center mt-4 sm:mt-0">
        <NavLink
          to={RouteIndex}
          className={({ isActive }) =>
            `${baseButtonClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Create Task
        </NavLink>
        <NavLink
          to={RouteTaskList}
          className={({ isActive }) =>
            `${baseButtonClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          View Task
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
