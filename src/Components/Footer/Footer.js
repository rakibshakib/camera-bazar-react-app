import React from 'react'
import cameraFooter from '../../images/camera-footer.jpg';
import './Footer.css';
import { AiOutlineCamera } from "react-icons/all";

const Footer = () => {
    return (
        <div className="footer mt-8 bg-green-700 font-semibold"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)), url(${cameraFooter})`
            }}>

            <div className='container mx-auto py-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-gray-300 py-5'>
                    <div className='leading-relaxed footer-text text-center md:text-left px-4'>
                        <h2 className='text-2xl font-semibold '> <AiOutlineCamera className='inline-block mr-2 text-3xl' />Camera Bazar</h2>
                        <p className='mt-5 text-sm'>To me, photography is an art of observation. It’s about finding something interesting an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them.</p>


                    </div>
                    <div className='leading-relaxed footer-text text-center md:text-left'>
                        <h2 className='font-semibold text-gray-200 text-xl mb-5'>Important Links</h2>
                        <p>Accessories</p>
                        <p>Action Camera</p>
                        <p>Camera Lens</p>
                        <p>DSLR Camera</p>
                        <p>Lighting & Studio</p>
                    </div>
                    <div className='leading-relaxed footer-text text-center md:text-left'>
                        <h2 className='font-semibold text-gray-200 text-xl mb-5'>Get In Touch</h2>
                        <p className='mt-5'>Emai: camerabazar2021@gmail.com</p>
                        <p>Phone: +880 125634789</p>
                        <p>Address: House # 53, Road # 20, Gulsan-2, Dhaka-1229, Bangladesh</p>
                    </div>

                </div>
                <hr />
                <p className="text-center text-gray-200 my-2">All Right Reserved &copy; Camera Bazar - 2021 </p>
            </div>
        </div>
    )
}

export default Footer
