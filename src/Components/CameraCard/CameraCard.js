import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./CameraCard.css";
import { Grid, Tooltip } from "@mui/material";
import { useHistory } from "react-router";

const CameraCard = ({ camera }) => {
  // const {cameraName, description, image, model,price} = props.camera
  console.log(camera?.cameraName);
  const history = useHistory();
  const handleSingleProduct = (id) => {
    console.log(id);
    history.push(`/camera-order/${id}`);
  };
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 , height: '100%' }}>
        <CardHeader title={camera?.cameraName} subheader={camera?.model} />
        <CardMedia
          component="img"
          height="194"
          image={camera?.image}
          alt={camera?.cameraName}
        />
        <CardContent>
          <Typography
            variant="p"
            color="text.secondary"
            sx={{ fontSize: 15, fontWeight: 700 }}
          >
            Price: {camera?.price}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: 14, mt: 2 }}
          >
          {camera?.description.slice(0, 100)}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="add to wishlist">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Order Camera">
            <IconButton
              aria-label="order"
              onClick={() => handleSingleProduct(camera?._id)}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CameraCard;
