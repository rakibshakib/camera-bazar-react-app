import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="bg-black py-5 px-5 text-white">
        <div className="md:container flex flex-col md:flex-row md:justify-between items-center mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="md:text-2xl font-semibold mr-2">
              Sign up to Newsletter
            </h2>
            <h5 className=" ml-1">...and get 20$ Coupon for first shopping </h5>
          </div>
          <div className="flex flex-col md:flex-row border-2 rounded-xl bg-white items-center">
            <input
              className="border-0 rounded-xl px-5 py-5 md:py-0 text-black outline-none"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="text-black font-semibold bg-yellow-400 rounded-lg py-3 my-0 px-5">
              signUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
