import React from "react";

import Grid from "@mui/material/Grid";
import useCameraData from "../../../Components/Hooks/useCameraData";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import CameraCard from "../../../Components/CameraCard/CameraCard";

const HomeProduct = () => {
  const [cameras] = useCameraData();
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        {/* {cameras.length === 0 ? (
          <p className="text-center font-bold">
            <CircularProgress /> Loading..{" "}
          </p>
        ) : (
          cameras
            .slice(2, 10)
            .map((camera) => <ProductCard key={camera._id} camera={camera} />)
        )} */}

        
          {cameras.map((camera) => (
            <CameraCard key={camera._id} camera={camera} />
          ))}
        
      </Grid>
    </Container>
  );
};

export default HomeProduct;
