import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useHistory } from 'react-router';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[700],
    '&:hover': {
        backgroundColor: yellow[700],
    },
}));

const ProductCard = ({ camera }) => {
    const history = useHistory()
    const handleSingleProduct = id => {
        console.log(id);
        history.push(`/camera-order/${id}`);
    }
    return (
        <Grid item xs={12} md={4} lg={3} sx={{ my: 2 }}>
            <Card sx={{ maxWidth: 280, minWidth: 250, my: 2, p: 2, height: '100%' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={camera.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 17, mb: 2 }}>
                        {camera.cameraName}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div" sx={{ py: 1, fontWeight: 600, fontSize: 14 }}>
                        Price: {camera.price} BDT
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        Model: {camera.model}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div" sx={{ py: 1, fontSize: 14 }}>
                        {camera.description.slice(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions>
               
                    <ColorButton onClick={()=> handleSingleProduct(camera._id)} sx={{ width: '100%', py: 1, fontWeight: 600, fontSize: 14 }} size="small" variant='contained'><AiOutlineShoppingCart className="inline-block text-2xl mr-2" /> Buy Now</ColorButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductCard
