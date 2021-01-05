import React from 'react';

import Header from './header.component';
import Services from './services.component';
import Products from './products.component';

const RoomDisplay =()=>{
    return(
        <div className="flex flex-col items-center justify-start">
            <div className="flex items-start">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <Header/>
                    <Services/>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default RoomDisplay;