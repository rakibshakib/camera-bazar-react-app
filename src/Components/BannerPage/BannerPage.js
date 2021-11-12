import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./BannerOption.css";
import { BiRightArrow } from "react-icons/bi";

const BannerPage = () => {
  return (
    <div className="container mx-auto">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3} sx={{ boxShadow: 1 }}>
            <div className="felx felx-row justify-items-start">
              <h2 className="bg-yellow-400 font-bold text-md px-5 py-2 flex justify-between items-center">
                New Arrivals
              </h2>
              <div className="banner-option">
                <Link to="/explore">
                  <h2 className="font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      Explore
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
                <Link to="/#">
                  <h2 className="font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      DSLR Camera
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
                <Link to="/#">
                  <h2 className="font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      Video Camera
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
                <Link to="/#">
                  <h2 className=" font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      Panasonic Video Camera
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
                <Link to="/#">
                  <h2 className=" font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      Sony video camera
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
                <Link to="/#">
                  <h2 className="font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      Video Lenses
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
                <Link to="/#">
                  <h2 className=" font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      Canon Video Camera
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
                <Link to="/#">
                  <h2 className=" font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      Camera Lens
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
                <Link to="/#">
                  <h2 className=" font-medium text-sm px-5 py-2 flex justify-between items-center">
                    <span >
                      Accessories
                    </span>
                    <BiRightArrow className="inline-block" />{" "}
                  </h2>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <Banner />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BannerPage;
