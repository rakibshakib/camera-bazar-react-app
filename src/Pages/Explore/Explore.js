import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useCameraData from "../../Components/Hooks/useCameraData";
import Navbar from "../../Components/Navbar/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../../Components/Footer/Footer";
import CameraCard from "../../Components/CameraCard/CameraCard";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Promotional from "../../Components/Promotional/Promotional";
import { searchCameraData } from "../Home/HomeProduct/HomeProduct";

const Explore = () => {
  const [cameras] = useCameraData();

  const [serachText, setSerachText] = useState("");
  const handleSearch = serchText => {
    console.log(serchText, serchText.target.value);
    setSerachText(serchText.target.value);
    const result = searchCameraData(cameraData, serchText.target.value, cameras);
    setCameraData(result)
  };

  const [loading, setLoading] = useState(true);
  const [cameraData, setCameraData] = useState([]);
  useEffect(() => {
    setSerachText("")
    setCameraData([...cameras]);
  }, [cameras])

  useEffect(() => {
    if (cameraData.length > 0) {
      setLoading(false);
    }
  }, [cameraData])
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5">
        <div className="flex justify-between items-center border-b-2 my-5 py-2 ">
          <h2 className="text-2xl font-bold  ">
            Total Product: {cameras.length}
          </h2>
          <div className="">
            <input placeholder="Search Cameras" className="border py-2 px-3 rounded-md w-80" type="text" value={serachText} onChange={(jibon) => handleSearch(jibon)} />
          </div>
        </div>
        {loading && (
          <div className="text-center font-medium my-5">
            <CircularProgress className="text-center" /> Loading..{" "}
          </div>
        )}
        {/* <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {cameras.map((camera) => (
              <CameraCard key={camera._id} camera={camera} />
            ))}
          </Grid>
        </Box> */}
        {
          cameraData?.length > 0 ?
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {cameraData.map((camera) => (
                  <CameraCard key={camera._id} camera={camera} />
                ))}
              </Grid>
            </Box>
            :
            <p className="text-2xl font-bold text-center text-md">
              No Result Found
            </p>

        }
      </div>
      <NewsLetter />
      <Promotional />
      <Footer />
    </>
  );
};

export default Explore;
