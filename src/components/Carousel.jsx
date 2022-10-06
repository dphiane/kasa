import { useState } from 'react'
import '../styles/carousel.scss'
import {ReactComponent as Prev} from "../data/Vectorleft.svg"
import {ReactComponent as Next} from '../data/Vectorright.svg'

const Slider=({slides})=>{
    const [current,setCurrent]=useState(0)
    const length=slides.length
    const nextSlide=()=>{
        setCurrent(current=== length -1 ? 0: current + 1)
    }
    const prevSlide=()=>{
        setCurrent(current === 0 ? length - 1: current - 1)
    }
    return(
        <div className='img_container'>
        {<Prev className="prev" onClick={prevSlide}/>}
        {<Next className="next" onClick={nextSlide}/>}
        {slides.map((slide, index) => {
          return (
            <div className='carousel_inner' key={index}>
              {index === current && (
                <img className='img_slide'src={slide} alt="logement"></img>
              )}
            </div>
          );
        })}
        </div>
    );
  };
  
  export default Slider;