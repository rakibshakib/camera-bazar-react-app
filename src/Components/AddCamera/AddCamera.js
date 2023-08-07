import React, { useState } from 'react';
import { Alert } from '@mui/material';
import { useForm } from "react-hook-form";

const AddCamera = () => {
    const { register, handleSubmit, reset } = useForm();
    const [orderSuccess, setOrderSuccess] = useState(false)

    const onSubmit = data => {
     
        fetch('https://camera-bazar-node-server.onrender.com/camera-add', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true)
                    reset();
                }
            })
    };
    return (
        <div>
            <div className='container mx-auto my-5'>
            <div>
            <h2 className=' text-center font-semibold text-2xl py-5'>Add Camera to Shop</h2>
                <form onSubmit={handleSubmit(onSubmit)}  className='flex flex-col  border p-8'>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>1. Camera Name:</label>
                        <input  {...register("cameraName")} className='border md:ml-5 py-2 px-5 mt-2 ' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>2. Model:</label>
                        <input   {...register("model")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>3. Type:</label>
                        <input   {...register("Type")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>4. Pixels:</label>
                        <input   {...register("Pixels")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>5. AspectRatio:</label>
                        <input   {...register("AspectRatio")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row  justify-items-start items-center '>
                        <label>6. description:</label>
                        <input   {...register("description")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>7. Warranty:</label>
                        <input   {...register("Warranty")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>8. image url:</label>
                        <input   {...register("image")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div className='flex flex-col md:flex-row justify-items-start items-center '>
                        <label>9. Price:</label>
                        <input   {...register("price")} className='border md:ml-5 py-2 px-5 mt-2' />
                    </div>
                    <div>
                    <input type="submit" className='border-2 py-2 md:ml-5 px-5 mt-4 cursor-pointer bg-yellow-400 rounded-md text-black hover:bg-white hover:text-green-700 transition delay-75 duration-300 ease-in-out' value="Add Packages " />
                    </div>
                </form>
            </div>
        </div>
                        
                       
                        {
                            orderSuccess && <Alert sx={{ my: 2, textAlign: 'center' }} severity="success">New Camera Added 😁</Alert>
                        }
        </div>
    )
}

export default AddCamera
