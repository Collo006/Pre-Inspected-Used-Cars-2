import { ReviewsData } from "@/interfaces"
import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"
import {  Josefin_Sans, Saira, Ubuntu } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const ubuntuFont= Ubuntu({
  subsets:["latin"],
  weight:"400",
   display:"swap"
})

const josefinFont= Josefin_Sans({
  subsets:["latin"],
  weight:"400",
   display:"swap"

})


const sairaFont= Saira({
  subsets:["latin"],
  weight:"500",
   display:"swap"

})

const ALL_REVIEWS= gql `query ReviewsQuery{
    review{
        id
        name
        comment
    }
}
`


export default function SectionFour(){

const{data,error,loading}= useQuery<ReviewsData>(ALL_REVIEWS);
const[currentSlide,setCurrentSlide]=useState(0);
const scrollContainerRef=useRef<HTMLDivElement>(null);
const reviewPerSlide=3;

const totalSlides= data?.review?.length? Math.ceil(data.review.length/ reviewPerSlide):1;


useEffect(()=>{
    if(!data?.review || !scrollContainerRef.current)return;

    const container= scrollContainerRef.current;
    const slideWidth= container.clientWidth;
    container.scrollTo({
        left:slideWidth *currentSlide,
        behavior:"smooth",
    });
},[currentSlide,totalSlides,data])

useEffect(()=>{
    if(!data?.review)return;
    const interval= setInterval(()=>{
        setCurrentSlide((prev)=> (prev + 1) % totalSlides);
    },10000);
    return ()=> clearInterval(interval)
},[data,totalSlides]);

if(loading)return <p>LOADING....</p>
if(error)return <p>Error{error.message}</p>
if(!data?.review)return <p>No car data is available</p>


    return(
         <div className=" sm:ml-0 sm:w-screen w-screen sm:rounded-xl mt-5  ">



          <div className="pt-10  sm:w-screen w-screen h-[300px] bg-skyBlue  text-white text-center  ">
             <h1 className={`sm:text-3xl text-xl font-extrabold text-center ${ubuntuFont.className} `}>WHY PINUC?</h1>
             <div className=" sm:grid sm:grid-cols-3 grid grid-cols-[175px_175px] sm:gap-0  mt-4 text-center ">
                <div className=" ">
                    <h2 className={`sm:text-xl text-md ${sairaFont.className}`}>Transparent Pricing</h2>
                    <p>No surprise here, see how much you pay on cars you like</p>
                </div>
                                <div className="sm:ml-0  ">
                    <h2 className={`sm:text-xl text-md ${sairaFont.className}`}>Transparent Pricing</h2>
                    <p>No surprise here, see how much you pay on cars you like</p>
                </div>

                              <div className="invisible sm:visible ">
                    <h2 className={`sm:text-xl text-md ${sairaFont.className}`}>Transparent Pricing</h2>
                    <p>No surprise here, see how much you pay on cars you like</p>
                </div>

             </div>
          </div>
          <div className="pt-10  w-full hidden sm:block ">
            <div className="pl-5">

                <h2 className={`text-center text-xl text-darkSky ${sairaFont.className}`}>PINUC BUYERS AND SELLERS REVIEWS</h2>
                {/** scrollable area */}
                <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] h-[300px] mt-5 pt-10 ">

                {/** full-width container */}
                <div ref={scrollContainerRef} className="overflow-hidden w-full">
                 <div className="flex w-full">
                    {Array.from({length: totalSlides}).map((_,slideIndex)=>{
                        const commentsForThisSlide=data.review.slice(slideIndex * reviewPerSlide,(slideIndex+1)* reviewPerSlide);
                        return(
                            <div key={slideIndex} className="shrink-0 w-full flex gap-5 px-6 mt-3 mb-6 " style={{flex: "0 0 100%"}}>
                            {commentsForThisSlide.map((comments)=>(
                                <div key={comments.id} className={`relative bg-navyBlue p-8  rounded-xl skew-y-3 shadow-lg shadow-darkSky w-[350px] max-w-xl mx-auto text-darkSky ${josefinFont.className} `}>
                                 <div className="pl-1 pt-3 skew-y-1 ">
                                    <p>{comments.name}</p>
                                    <p>{comments.comment}</p>                                    
                                 </div>
                                <div className="flex gap-1 mt-4">
                                 <span className="text-yellow-400">★★★★★</span>{/** don't forget to change those stars  */}
                                 </div>                                    
                                 <div className="absolute -bottom-4 left-20 w-0 h-0 border-l-20 border-t-20 border-l-transparent border-t-navyBlue  "></div>
                                </div>
                            ))}
                            </div>
                        )
                    })}
                 </div>
                </div>
                </div>
            </div>

          </div>
         </div>
    )
}







/** `bg-skyBlue text-white border border-red-600  rounded-lg overflow-hidden hover:bg-lightGray hover:text-skyBlue transition duration-300 w-[500px] h-[150px] skew-x-12  */