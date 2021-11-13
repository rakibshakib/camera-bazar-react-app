import React from "react";
import promotionalImg from "../../images/promotional-img.png";
import promotionalImg2 from "../../images/promotional-img2.png";
import './Promotional.css'

const Promotional = () => {
  return (
    <div className="container mx-auto my-5">
        <h2 className='text-center text-2xl font-bold py-5'>Special Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='prom-img my-5'>
          <img src={promotionalImg} alt="" />
        </div>
        <div className='prom-img my-5'>
          <img src={promotionalImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Promotional;
