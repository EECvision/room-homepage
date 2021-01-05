import iconAngleRight from '../images/icon-angle-right.svg'
import iconAngleLeft from '../images/icon-angle-left.svg'

const Slider =({dispatch})=>{
    return(
        <div className="w-full h-16 bg-black flex justify-around items-center">
            <img onClick={()=>dispatch('PREV')} className="opacity-50 transition duration-200 transform hover:scale-125 cursor-pointer" src={iconAngleLeft} alt="left"/>
            <img onClick={()=>dispatch('NEXT')} className="opacity-50 transition duration-200 transform hover:scale-125 cursor-pointer" src={iconAngleRight} alt="right"/>
        </div>
    )
}

export default Slider;