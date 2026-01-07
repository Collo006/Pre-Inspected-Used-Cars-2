import { SUVPickupData } from "@/interfaces";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Josefin_Sans, Exo_2 } from "next/font/google";



const josefinFont= Josefin_Sans({
  subsets:["latin"],
  weight:"300",

})


const exoFont= Exo_2({
  subsets:["latin"],
  weight:"500",

})

const SUV_PICKUPS = gql `query SuvPickupQuery{
    suv_pickups{
       id
      model
      year
      price
      mileage
      image  
    }
}
`

export default function SectionThree(){

    const{data,error,loading}=useQuery<SUVPickupData>(SUV_PICKUPS);

    const[currentSlide,setCurrentSlide]=useState(0);
    const scrollContaninerRef = useRef<HTMLDivElement>(null);
    const carsPerSlide=5;

    const totalSlides = data?.suv_pickups?.length ? Math.ceil(data.suv_pickups.length / carsPerSlide) : 1; //ternary operation

    useEffect(()=>{
        if(!data?.suv_pickups || !scrollContaninerRef.current) return; //This line prevents errors when things aren’t ready yet. scrollContainerRef-checks that the scrollable container (the div with your images) actually exists in the DOM
        const container = scrollContaninerRef.current;
        const slideWidth = container.clientWidth; //.clientWidth is the visible width of that container in pixels — basically, how wide one “slide” should be.
        container.scrollTo({
            left: slideWidth * currentSlide,
            behavior: "smooth",
        });
    },[currentSlide, totalSlides,data]) //used to create the sliding effect

    /*useEffect(()=>{
        if(!data?.suv_pickups)return;
        const interval= setInterval(()=>{
            setCurrentSlide((prev)=>(prev+1)%totalSlides)
        },100000); //This sets up a timer that runs every 5000 milliseconds (5 seconds).
        return ()=> clearInterval(interval);// it ensures that there are no duplicate timers running at the same time preventing memory leaks and buggy behaviour
    },[data,totalSlides]);//used to create the auto scroll effect*/ 

if(loading)return <p className="text-center py-10">Data is loading...</p>
if(error)return <p className="text-center py-10">Error:{error.message}</p>
if(!data?.suv_pickups?.length)return <p className="text-center py-10">No car data available</p>

const nextSlide=()=> setCurrentSlide((prev)=> (prev+1)% totalSlides); //% totalSlides (modulo) makes it loop back to zero when it reaches the end.
const prevSlide=()=> setCurrentSlide((prev)=> (prev-1 + totalSlides)% totalSlides);
const goToSlide = (index:number) => setCurrentSlide(index);

return(
    <div className="mt-5 ml-10 py-10 bg-white w-[1600px] rounded-xl" >
        <section className="max-w-7xl mx-auto px-4">
          <h1 className={`text-5xl text-darkSky font-bold text-center mb-10 ${exoFont.className}`}>
           Similar Vehicles
          </h1>
        </section>
       {/** scrollable area */} 
       <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
        {/** Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform-translate-y-1/2 bg-lightSky rounded-full p-3 shadow-lg hover:bg-skyBlue z-10 transition cursor-pointer">
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
        </svg>
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform-translate-y-1/2 bg-lightSky rounded-full p-3 shadow-lg hover:bg-skyBlue z-10 transition cursor-pointer">
         <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {/** full-width container */}
        <div ref={scrollContaninerRef} className="overflow-hidden w-full"> {/** ref- used to get direct reference to the DOM */}
         <div className="flex w-full">
         {Array.from({length:totalSlides}).map((_,slideIndex)=>{
            const carsForThisSlide = data.suv_pickups.slice( slideIndex * carsPerSlide, (slideIndex +1) * carsPerSlide); {/**Array.from- is used to create an array out of the totalsides. slice is used to divide the cars into inidivual items */}
            return (
                <div key={slideIndex} className="shrink-0 w-full flex gap-4 px-6" style={{flex: "0 0 100%"}}>
                    {carsForThisSlide.map((car)=>(
                        <div key={car.id}  className="bg-lightSky rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 w-[20%] min-w-[200px]">
                        <div className="relative h-52">
                        <Image src={car.image} alt={car.model} fill className="object-cover"/>
                        </div>
                        <div className="p-4">
                        <h3 className={`text-lg mb-2 text-navyBlue text-bold ${josefinFont}`}>{car.model}</h3>
            <div className={`space-y-1 text-sm text-navyBlue ${josefinFont}`}>
             <p>Year:{car.year}</p>
             <p>Mileage:{car.mileage.toLocaleString()}miles</p>
             <p className={`text-lg font-bold text-navyBlue ${josefinFont}`}>
                Ksh.{car.price.toLocaleString()}
             </p>
            </div>
            </div>
            </div>
             ))}
             </div>
            );
         })}
         </div>
        </div>
       </div>
       {/**Dots*/}
       <section className="max-w-7xl mx-auto mt-8 flex justify-center space-x-2">
          {Array.from({length: totalSlides}).map((_,index)=>(
            <button key={index} onClick={()=> goToSlide(index)} className={`w-3 h-3 rounded-full transition ${index === currentSlide ? "bg-blue-600" :"bg-gray-300 hover:bg-gray-400"}`} aria-label={`Got To Slide ${index + 1}`}>

            </button>
          ))}
       </section>

    
    </div>
)

}