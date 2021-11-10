import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useCameraData from '../../../Components/Hooks/useCameraData'
import ProductCard from '../../../Components/ProductCard/ProductCard';
import CircularProgress from '@mui/material/CircularProgress';

const HomeProduct = () => {
    const [cameras] = useCameraData()
    return (
        <div className='container mx-auto my-5'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {cameras.length === 0 ? <p className='text-center font-bold'> <CircularProgress /> Loading..  </p>
                        :
                        cameras.slice(2, 10).map(camera => <ProductCard
                            key={camera._id}
                            camera={camera}
                        />)
                    }
                </Grid>
            </Box>
        </div>
    )
}

export default HomeProduct
