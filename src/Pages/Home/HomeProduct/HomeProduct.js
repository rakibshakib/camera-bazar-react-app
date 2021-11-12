import React from "react";

import Grid from "@mui/material/Grid";
import useCameraData from "../../../Components/Hooks/useCameraData";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import CameraCard from "../../../Components/CameraCard/CameraCard";

const HomeProduct = () => {
  const [cameras] = useCameraData();
  return (
    <Container maxWidth="xl" sx={{my:5}}>
        <h2 className='text-center text-2xl font-bold my-5 py-2 border-b-2 mx-auto'>Our Cameras</h2>
      <Grid container spacing={3}> 
          { cameras.length === 0 ? (
          <p className="text-center font-bold">
            <CircularProgress /> Loading..{" "}
          </p>
        ) : 
          cameras.slice(2, 10).map((camera) => (
            <CameraCard key={camera._id} camera={camera} />
          ))}
        
      </Grid>
    </Container>
  );
};

export default HomeProduct;
