import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useCameraData from "../../Components/Hooks/useCameraData";
import Navbar from "../../Components/Navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../../Components/Footer/Footer";
import CameraCard from "../../Components/CameraCard/CameraCard";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Promotional from "../../Components/Promotional/Promotional";

const Explore = () => {
  const [cameras] = useCameraData();
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5">
        <h2 className="font-semibold text-2xl my-5 text-center">
          Total Product: {cameras.length}
        </h2>
        {cameras.length === 0 && (
          <p className="text-center font-bold py-5">
            {" "}
            <CircularProgress /> Loading..{" "}
          </p>
        )}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {cameras.map((camera) => (
              <CameraCard key={camera._id} camera={camera} />
            ))}
          </Grid>
        </Box>
      </div>
      <NewsLetter />
      <Promotional />
      <Footer />
    </>
  );
};

export default Explore;
