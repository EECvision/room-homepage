import React from 'react';

import Navbar from './navbar.component';
import ProductPreview from './product-preview.component';

const Header =()=>{
    return(
        <div className="w-full lg:w-3/5">
            <Navbar/>
            <ProductPreview/>
        </div>
    )
}

export default Header;

