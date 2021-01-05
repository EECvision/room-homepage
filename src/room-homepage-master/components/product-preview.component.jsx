import React,{useReducer} from 'react';

import heroOne from '../images/desktop-image-hero-1.jpg';
import heroTwo from '../images/desktop-image-hero-2.jpg';
import heroThree from '../images/desktop-image-hero-3.jpg';
import Slider from './slider.component';

const ProductPreview =()=>{
    const initialState = 0;
    const heros = [heroOne, heroTwo, heroThree];

    const reducer=(state, action)=>{
        switch(action){
            case 'NEXT': 
            return state >= heros.length-1 ? 0 : state + 1;

            case 'PREV':
            return state <= 0 ? heros.length-1 : state - 1

            default: return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDispatch =(actionType)=>{
        dispatch(actionType)
    }

    return(
        <div className="relative w-full flex justify-end items-end">
            <img className="w-full" src={heros[state]} alt=""/>
            <div className="absolute w-1/4 transform lg:translate-x-full translate-x-0"><Slider dispatch={handleDispatch}/></div>
        </div>
    )
}

export default ProductPreview;
