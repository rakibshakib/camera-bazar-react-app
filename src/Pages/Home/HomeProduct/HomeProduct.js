import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";
import CameraCard from "../../../Components/CameraCard/CameraCard";
import useCameraData from "../../../Components/Hooks/useCameraData";

export const searchCameraData = (cameraArray, searchText, cameras) => {
  if (!searchText) {
    return cameras;
  }

  const regex = new RegExp(searchText, 'i'); // Case-insensitive regex
  const filteredCameras = cameraArray.filter(camera => {
    return (
      regex.test(camera.cameraName) || regex.test(camera.model) || regex.test(camera.Type)
    );
  });
  console.log(filteredCameras)

  return filteredCameras;
}

const HomeProduct = () => {
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
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <div className="flex justify-between items-center border-b-2 my-5 py-2 ">
        <h2 className="text-2xl font-bold  ">
          Our Cameras
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
      {
        cameraData?.length > 0 ?
          <Grid container spacing={3}>
            {cameraData?.slice(0, 8).map((camera) => (
              <CameraCard key={camera._id} camera={camera} />
            ))}
          </Grid>
          :
          <p className="text-2xl font-bold text-center text-md">
            No Result Found
          </p>

      }

    </Container>
  );
};

export default HomeProduct;
