import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useCameraData from '../../Components/Hooks/useCameraData'
import ProductCard from '../../Components/ProductCard/ProductCard';
import Navbar from '../../Components/Navbar/Navbar';

const Explore = () => {
    const [cameras] = useCameraData()
    return (
        <>
            <Navbar />
            <div className='container mx-auto my-5'>

                <h2>Total Product: {cameras.length}</h2>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                            cameras.map(camera => <ProductCard
                                key={camera._id}
                                camera={camera}
                            />)
                        }
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Explore
