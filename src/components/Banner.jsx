import React, { useState } from 'react';
//import {HiArrowRight } from "react-icons/bi";
//import {HiArrowleft } from "react-icons/bi";
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'; // Note the correct module name 'react-icons/hi'



const Banner = () => {
    const [currentSlide, setCurrentSlide]= useState(0)
  const data = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/5935738/pexels-photo-5935738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",


  ];
  
  const prevSlide=()=>{
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)

  };
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev+ 1 )

  };

    return (
    <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen h[-650px] realtive">
        <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }}

            className="w-[400vw] h-screen flex transition-transform duration-1000">
               <img 
               className="w-screen h-full object-cover"
               src={data[0]}
                alt="ImgOne" 
               loading="priority"
               />
                <img 
                className="w-screen h-full object-cover"
               src={data[1]} 
               alt="ImageTwo" 
               
               />
                <img
                 className="w-screen h-full object-cover"
               src={data[2]} 
               alt="ImageThree" 
               
               />
                <img 
                className="w-screen h-full object-cover"
               src={data[3]} 
               alt="ImageFour" 
               
               />
            </div>
            <div className="absolute w-fit left-10 right-10 mx-auto flex gap-8 bottom-44">
                <div onClick ={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                active:bg-gray-900 duration-300">
               <HiArrowLeft />
                </div>
                
                <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
                justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
                active:bg-gray-900 duration-300">
                <HiArrowRight />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;