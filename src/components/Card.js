import React from "react";
import './Card.css'
import {FaQuoteRight,FaQuoteLeft} from "react-icons/fa"


const Card = (props) =>{
    let review = props.review;
  return(
           <div className="flex flex-col md:relative z-[10]">
           <div className="absolute top-[-7rem] z-[10] mx-auto image">
            <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" src={review.image}/>
            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute z-[-10] left-2 bottom-1 circle"></div>
           </div>
           <div className="text-center mt-7">
            <h1 className="font-bold capitalize text-2xl tracking-wider">{review.name}</h1>
            <h1 className="text-violet-300 uppercase text-sm">{review.job}</h1>
           </div>


           <div className="mt-5 mx-auto text-violet-400"><FaQuoteLeft /></div>

           <div className="text-center text-slate-500 mt-4">

            {review.text}
           </div>

           <div className="mt-5 mx-auto text-violet-400"><FaQuoteRight /></div>

           
      </div>
  )
}
export default Card 