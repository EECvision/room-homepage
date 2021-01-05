import React,{useState, useEffect} from 'react';

import iconClose from '../images/icon-close.svg'
import iconHamburger from '../images/icon-hamburger.svg'


const Navbar =()=>{
    
    const [toggleNav, setToggleNav] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    });

    const navSm = (
        <div className={`w-full relative flex lg:justify-start justify-center items-center z-10 border`}>
            <div className="inset-x-0 ml-6 lg:hidden">
                <img onClick={()=>setToggleNav(!toggleNav)} className="cursor-pointer"  src={iconClose} alt="close "/>
            </div>
            <div className="w-full h-32 flex justify-evenly items-center text-black font-bold bg-white">
                <span className="cursor-pointer">Home</span>
                <span className="cursor-pointer">Shop</span>
                <span className="cursor-pointer">About</span>
                <span className="cursor-pointer">Contact</span>
            </div>
        </div>
    )
    
    const navLg = (
        <div className={`w-full relative flex lg:justify-start justify-center items-center z-10`}>
            <div className="absolute inset-x-0 mt-24 ml-12 lg:hidden">
                <img onClick={()=>setToggleNav(!toggleNav)} className=' cursor-pointer' src={iconHamburger} alt="hamburger"/>
            </div>
            <div className="absolute w-1/2 flex justify-center items-center text-white mt-24 lg:ml-16">
                <div className="w-1/5 font-bold text-3xl cursor-pointer">room</div>
                <div className="w-4/5 hidden lg:flex justify-evenly items-center">
                    <span className="cursor-pointer">Home</span>
                    <span className="cursor-pointer">Shop</span>
                    <span className="cursor-pointer">About</span>
                    <span className="cursor-pointer">Contact</span>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {
                toggleNav || width >= 1024
                ? navLg
                : navSm
            }
        </div>
    )
}

export default Navbar
