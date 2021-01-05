import React from 'react';
import iconArrow from '../images/icon-arrow.svg';

const Services =()=>{
    return(
        <div className={`w-full lg:w-2/5 px-4 xl:px-20 my-24 lg:my-0`}>
            <h1 className="font-bold text-2xl xl:text-4xl mb-4">Discover innovative <br/> ways to decorate</h1>
            <p className="text-sm text-gray-700 opacity-50 mb-4">We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.
            </p>
            <div className="flex items-center justify-start opacity-50">
                <div className="text-lg xl:text-xl font-medium mr-8 tracking-widest uppercase">Shop now</div>
                <img src={iconArrow} alt=""/>
            </div>
        </div>
    )
}

export default Services;





