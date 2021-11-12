import React, { useState } from "react";
import {
  AiOutlineLogin,
  BiLogOutCircle,
  AiOutlineCamera,
  FaBars,
} from "react-icons/all";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Nav.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  // button toogle hooks
  const [toggle, setToogle] = useState(false);
  // toogle button handeler
  const handleToggle = () => {
    setToogle(!toggle);
  };
  return (
    <nav className="bg-black py-2">
      {/* header details */}
      <div className=" container  mx-auto">
        <div className="text-white py-2 font-medium flex items-center justify-between desktop-nav">
          <div>
            <h2 className="text-2xl">
              <AiOutlineCamera className="inline-block mr-2 text-3xl" /> Camera
              Bazar
            </h2>
          </div>
          <div>
            <NavLink
              className="nav-items py-3 px-3 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400"
              to="/home"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              className="nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400"
              to="/explore"
            >
              <span>Explore Cameras</span>
            </NavLink>
            {user?.email && (
              <NavLink
                className="nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400"
                to="/dashboard"
              >
                <span>Dashboard</span>
              </NavLink>
            )}
            <NavLink
              className="nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out hover:text-yellow-400"
              to="/about-us"
            >
              <span>About Us</span>
            </NavLink>
            {user?.email && (
              <p className="inline-block mr-5 ml-2 font-medium border-b-2 px-2 ">
                {user.displayName}
              </p>
            )}
            {user.email ? (
              <button
                onClick={logout}
                className="nav-items rounded-md py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-ou  hover:text-white"
              >
                <BiLogOutCircle className="inline-block" /> Log Out
              </button>
            ) : (
              <NavLink
                className="nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-out  hover:text-white"
                to="/login"
              >
                <AiOutlineLogin className="inline-block" /> Login
              </NavLink>
            )}
          </div>
        </div>
        {/* for mobile responsive  */}

        <div className="mobile-nav">
          <div className="text-white text-md py-2 font-medium flex items-center justify-between">
            <h2 className="text-2xl">
              <AiOutlineCamera className="inline-block mr-2 text-3xl" /> Camera
              Bazar
            </h2>

            <button
              onClick={handleToggle}
              className="text-2xl toggle border-2 border-gray-100 py-2 px-3 rounded-md"
            >
              <FaBars />
            </button>
          </div>
          <div
            className={`nav-link responsive-nav ${
              toggle ? "show-navs" : "hide-navs"
            } flex flex-col justify-center items-center mt-5 text-white`}
          >
            <NavLink
              className="nav-items py-3 px-3 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400"
              to="/home"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              className="nav-items py-3 px-3  transition delay-75 duration-300 ease-in-out  hover:text-yellow-400"
              to="/explore"
            >
              <span>Explore Cameras</span>
            </NavLink>
            {user?.email && (
              <NavLink
                className="nav-items py-3 px-3 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400"
                to="/dashboard"
              >
                <span>Dashboard</span>
              </NavLink>
            )}
            <NavLink
              className="nav-items py-3 px-3  transition delay-75 duration-300 ease-in-out hover:text-yellow-400"
              to="/about-us"
            >
              <span>About Us</span>
            </NavLink>
            {user?.email && (
              <p className="inline-block font-medium border-b-2 px-2 ">
                {user.displayName}
              </p>
            )}
            {user.email ? (
              <button
                onClick={logout}
                className="nav-items rounded-md py-3 px-3 transition delay-75 duration-300 ease-in-ou  hover:text-white"
              >
                <BiLogOutCircle className="inline-block" /> Log Out
              </button>
            ) : (
              <NavLink
                className="nav-items py-3 px-2 transition delay-75 duration-300 ease-in-out  hover:text-white"
                to="/login"
              >
                <AiOutlineLogin className="inline-block" /> Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
