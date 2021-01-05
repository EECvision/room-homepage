import React from 'react';

import imageAboutDark from '../images/image-about-dark.jpg';
import imageAboutLight from '../images/image-about-light.jpg';

const Products =()=>{
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly">
            <img className="w-full lg:w-1/4 h-64" src={imageAboutDark} alt="dark"/>
            <div className="w-full lg:w-2/4 px-12 lg:px-20 my-24 lg:my-12">
                <h1 className="font-bold text-2xl mb-2">About our furniture</h1>
                <p className="text-sm text-gray-700 opacity-50 mb-2">Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img className="w-full lg:w-1/4 h-64" src={imageAboutLight} alt="light"/>
        </div>
    )
}

export default Products;




