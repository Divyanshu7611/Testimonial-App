import React from "react";
import Card from "./Card";
import { useState } from "react";
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";

const Testimonials = (props) =>{
    const[index,setIndex] = useState(0);
    let reviews = props.reviews;

    function LeftHandler(){
                   if(index - 1<0){
                    setIndex(reviews.length - 1);
                   }
                   else{
                    setIndex(index - 1);
                   }

                    
    }
    function RightHandler(){
        if(index + 1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }

    }
    function SurpriseHandler(){
                let RandomIndex = Math.floor(Math.random() * reviews.length);
                setIndex(RandomIndex);
    }
     return(
        <div className="w-[85vw] md:w-[700px] rounded-md bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
            <Card review = {reviews[index]}/>
            <div className="flex mt-5 gap-3 text-violet-400 font-bold mx-auto">
            <button onClick={LeftHandler} className="hover:text-violet-500 text-3xl cursor"><FiChevronLeft /></button>
            <button onClick={RightHandler} className="hover:text-violet-500 cursor text-3xl"><FiChevronRight /></button>
           </div>

           <div className="mt-5">
            <button onClick={SurpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-20 py-2 rounded-md cursor-pointer text-lg text-white font-bold">Surprise Me</button>
           </div>
        </div>
     )
     

} 

export default Testimonials;