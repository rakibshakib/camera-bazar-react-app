import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { ImSad } from "react-icons/all";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center flex-col my-8">
        <ImSad className="text-center text-5xl md:text-8xl text-gray-500" />
        <h2 className=" font-semibold mt-5 text-2xl md:text-5xl">
          404
        </h2>
        <p className=" font-semibold mt-2 text-lg md:text-2xl">
          Page Not Found
        </p>
        <p className="text-red-600 font-semibold mt-5 text-center text-base md:text-base">
          The requested URL /error was not found on this server.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
