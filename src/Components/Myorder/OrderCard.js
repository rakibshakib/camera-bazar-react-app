import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[700],
    '&:hover': {
        backgroundColor: yellow[700],
    },
}));


const OrderCard = ({ order, handleDeleteOrder }) => {  
    return (
        <div>
            <div className='border rounded-2xl p-5 my-3'>
                <div className='flex flex-col md:flex-row justify-items-start md:justify-between items-center p-2'>
                    <div>
                        <h2 className="font-medium text-md py-2">{order.orderItem}</h2>
                        <h2>Price: {order?.price}</h2>
                    </div>
                    <h2 className='font-medium'>Status: {order?.status}</h2>
                    <ColorButton  onClick={()=> handleDeleteOrder(order._id)}>Delete Order</ColorButton>
                </div>
            </div>
        </div>
    )
}

export default OrderCard
