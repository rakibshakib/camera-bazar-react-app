import React from "react";
import imagead from "../../images/image-ad.png";
import imagead2 from "../../images/image-ad2.png";
import "./Promotional.css";

const PromotionalBanner = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center text-2xl my-3 font-bold">
        Special Offer for 12.12
      </h2>

      <div className="flex felx-row md:flex-row justify-between items-center">
        <div className="ad-img">
          <img src={imagead2} alt="ad from bd" />
        </div>

        <div className="ad-img">
          <img src={imagead} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
