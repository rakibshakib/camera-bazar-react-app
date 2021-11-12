import React from "react";
import Grid from "@mui/material/Grid";
import imagead from '../../images/image-ad.jpg'
import imagead2 from '../../images/image-ad2.jpg';
import './Promotional.css';

const PromotionalBanner = () => {
  return (
    <div className='container mx-auto my-8'>
      <h2 className='text-center text-2xl my-3 font-bold'>Special Offer for 12.12</h2>
      <Grid container spacing={0.5}>
        <Grid item xs={12} md={6}>
          <div className='ad-img'>
            <img src={imagead2} alt="ad from bd" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='ad-img'>
            <img src={imagead} alt="" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PromotionalBanner;
