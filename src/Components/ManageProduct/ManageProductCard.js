import React from 'react'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'
import { red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[700],
    '&:hover': {
        backgroundColor: red[700],
    },
}));

const ManageProductCard = ({camera, handleDeleteOrder}) => {
    return (
        <div className='border rounded-2xl p-5 my-3'>
                <div className='flex flex-col md:flex-row justify-items-start md:justify-between items-center p-2'>
                    <div>
                        <h2 className="font-medium text-md py-2">{camera.cameraName}</h2>
                    </div>
                    <ColorButton onClick={()=> handleDeleteOrder(camera._id)}>Delete Product</ColorButton>
                </div>
            </div>
    )
}

export default ManageProductCard
