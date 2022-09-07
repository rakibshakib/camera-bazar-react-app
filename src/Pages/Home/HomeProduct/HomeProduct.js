import React from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import CameraCard from "../../../Components/CameraCard/CameraCard";
import useCameraData from "../../../Components/Hooks/useCameraData";

const HomeProduct = () => {
  const [cameras] = useCameraData();
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <h2 className="text-center text-2xl font-bold my-5 py-2 border-b-2 mx-auto">
        Our Cameras
      </h2>
      {cameras?.length === 0 && (
        <div className="text-center font-medium my-5">
          <CircularProgress className="text-center" /> Loading..{" "}
        </div>
      )}
      <Grid container spacing={3}>
        {cameras?.slice(0, 8).map((camera) => (
          <CameraCard key={camera._id} camera={camera} />
        ))}
      </Grid>
    </Container>
  );
};  

export default HomeProduct;
