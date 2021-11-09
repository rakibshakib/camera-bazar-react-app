import React from 'react'
import { AiOutlineLogin, BiLogOutCircle, AiOutlineCamera } from "react-icons/all";
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Nav.css'

const Navbar = () => {
    const { user, logOutUser } = useAuth();
    // button toogle hooks 
    // const [toggle, setToogle] = useState(false);
    // toogle button handeler 
    // const handleToggle = () => {
    //     setToogle(!toggle)
    // }
    return (
        <nav className='bg-black py-2'>
        {/* header details */}
        <div className=' container  mx-auto'>
            <div className='text-white py-2 font-medium flex items-center justify-between desktop-nav'>
                <div>
                    <h2 className='text-2xl'><AiOutlineCamera className='inline-block mr-2 text-3xl' /> Camera Bazar</h2>
                </div>
                <div>
                    <NavLink className='nav-items py-3 px-3 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400' to="/home"><span>Home</span></NavLink>
                    <NavLink className='nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400' to="/explore"><span>Explore Cameras</span></NavLink>
                    <NavLink className='nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400' to="/my-booking"><span>My Booking</span></NavLink>
                    <NavLink className='nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out hover:text-yellow-400' to="/manage-booking"><span>Manange Booking</span></NavLink>
                    <NavLink className='nav-items py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-out  hover:text-yellow-400' to="/add-package"><span>Add New Package</span></NavLink>
                    {
                        user?.email && <p className='inline-block mr-5 ml-2 font-medium border-b-2 px-2 '>{user.displayName}</p>
                    }
                    {
                        user.email ? <button onClick={logOutUser} className='nav-items rounded-md py-3 px-3 ml-5 transition delay-75 duration-300 ease-in-ou  hover:text-white'><BiLogOutCircle className='inline-block' /> Sign Out</button>
                            :
                            <NavLink className='nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-out  hover:text-white' to="/signin"><AiOutlineLogin className='inline-block' /> Sign In</NavLink>
                    }
                </div>
            </div>
            {/* for mobile responsive */}

            {/* <div className="mobile-nav">
                <div className='text-black text-md py-2 font-medium flex items-center justify-between'>
                    <figure>
                        <img src={logo} alt="bangladesh tour service" />
                    </figure>
                    <button onClick={handleToggle} className='text-2xl toggle border-2 border-gray-100 py-2 px-3 rounded-md'><FaBars /></button>
                </div>
                <div className={`nav-link responsive-nav ${toggle ? 'show-navs' : 'hide-navs'} flex flex-col justify-center items-center mt-5`}>
                    <NavLink className='nav-items py-3 px-3' to="/"><span>Home</span></NavLink>
                    <NavLink className='nav-items py-3 px-3' to="/allpackages"><span>All Tour Packages</span></NavLink>
                    <NavLink className=' nav-items py-3 px-3' to="/my-booking"><span>My Booking</span></NavLink>
                    <NavLink className='nav-items py-3 px-3' to="/manage-booking"><span>Manange Booking</span></NavLink>
                    <NavLink className='nav-items py-3 px-3' to="/add-package"><span>Add New Package</span></NavLink>
                    {
                        user?.email && <p className='inline-block font-medium border-b-2 px-2 '>{user.displayName}</p>
                    }
                    {
                        user.email ? <button onClick={logOutUser} className='nav-items rounded-md py-3 px-3'><BiLogOutCircle className='inline-block' /> Sign Out</button>
                            :
                            <NavLink className='nav-items py-3 px-2' to="/signin"><AiOutlineLogin className='inline-block' /> Sign In</NavLink>
                    }
                </div>
            </div> */}
        
    </div>

    </nav >
    )
}

export default Navbar
