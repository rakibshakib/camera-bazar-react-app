import { Alert, Button, Card, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useAuth from '../Hooks/useAuth';

const OrderForm = () => {
    const { id } = useParams();
    const { user } = useAuth()
    const [camera, setCamera] = useState({});
    const initialOrder = { CustomerName: user?.displayName, email: user?.email, phone: '' }
    const [orderInfo, setOderInfo] = useState(initialOrder);
    const [orderSuccess, setOrderSuccess] = useState(false)

    // getting single camera data by id  
    useEffect(() => {
        const url = `http://localhost:5000/cameras/${id}`
        fetch(url).then(res => res.json())
            .then(data => setCamera(data))
    }, [id])


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo }
        newInfo[field] = value;
        setOderInfo(newInfo)
    }

    const handleOrderSubmit = e => {
        e.preventDefault();
        // collected order data 
        const order = {
            ...orderInfo,
            orderItem: camera.cameraName,
            orderItemId: camera._id,
        }
        console.log(order)

        fetch("http://localhost:5000/camera-order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true)
                }
            })
    }
    return (
        <div className='container mx-auto my-5'>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6} >
                    <Box sx={{ maxWidth: 450, my: 2, p: 2, height: '100%' }}>
                        <Typography id="transition-modal-title" variant="p" component="h2" sx={{ py: 1, fontWeight: 600, fontSize: 17 }}>
                            Booking For: {camera.cameraName}
                        </Typography>
                        <form action="" onSubmit={handleOrderSubmit}>
                            <TextField
                                label="Your Name"
                                id="outlined-size-small"
                                name="CustomerName"
                                onBlur={handleOnBlur}
                                defaultValue={user?.displayName}
                                size="small"
                                sx={{ width: '75%', my: 2 }}
                            />

                            <TextField
                                label="Your Email"
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleOnBlur}
                                defaultValue={user?.email}
                                size="small"

                                sx={{ width: '75%', my: 2 }}
                            />
                            <TextField
                                label="Your Phone Number"
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}
                                size="small"
                                sx={{ width: '75%', my: 2 }}
                            />
                            <TextField
                                label="Your Adress"
                                id="outlined-size-small"
                                name="adress"
                                onBlur={handleOnBlur}
                                size="small"
                                sx={{ width: '75%', my: 2 }}
                            />
                            <br />
                            <Button type='submit' sx={{ mt: 2 }} variant="contained" color="primary">Confirm Order</Button>
                        </form>
                        {
                            orderSuccess && <Alert sx={{ my: 2, textAlign: 'center' }} severity="success">Camera Ordered successfully! It will take 2 or 3 days for delivery</Alert>
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ maxWidth: 450, my: 5, p: 2 }}>
                        <CardMedia
                            component="img"
                            height="100"

                            image={camera.image}
                            alt={camera.cameraName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 17, mb: 2 }}>
                                {camera.cameraName}
                            </Typography>
                            <Typography gutterBottom variant="p" component="div" sx={{ py: 1, fontWeight: 600, fontSize: 16 }}>
                                Current Price: {camera.price} BDT
                            </Typography>
                            <Typography gutterBottom variant="span" component="span" sx={{ my: 2, fontWeight: 500, fontSize: 15 }}>
                                Old Price: {camera.price + 5000} BDT
                            </Typography>
                            <Typography gutterBottom variant="p" component="div" sx={{ my: 2 }}>
                                Model: {camera.model}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <hr />
            <Box sx={{my: 5, border: 1, p: 3}}>
                <h2 className='my-2 text-2xl font-medium'>More Details About Product: </h2>
                <Typography gutterBottom variant="p" component="div" sx={{ py: 1 }}>
                    Type: {camera.Type}
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{ py: 1 }}>
                    Pixels: {camera.Pixels}
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{ py: 1 }}>
                    Aspect-Ratio: {camera.AspectRatio}
                </Typography>

                <Typography gutterBottom variant="p" component="div">
                    Warranty: {camera.Warranty}
                </Typography>
                <Typography gutterBottom variant="p" component="div" sx={{ py: 1}}>
                    Description: {camera.description}
                </Typography>
            </Box>
        </div>
    )
}
export default OrderForm
