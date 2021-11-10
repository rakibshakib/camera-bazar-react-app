import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Back = () => {
    // this is a simple component hooks for back to home 
    return (
        <div className="my-5 border-2 py-2 px-2 ">
            <Link to="/" className=" hover:underline text-white select-none flex items-center space-x-2"><MdOutlineKeyboardBackspace /> <span>Back to Home</span></Link>
        </div>
    )
}

export default Back