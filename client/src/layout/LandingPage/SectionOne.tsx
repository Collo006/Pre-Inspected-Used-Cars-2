import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";
import {  Exo_2, Josefin_Sans, Saira} from "next/font/google";
import { NewArrivalData } from "../../interfaces";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";



const josefinFont= Josefin_Sans({
  subsets:["latin"],
  weight:"300",
  display:"swap"
})



const exoFont= Exo_2({
  subsets:["latin"],
  weight:"500",
   display:"swap"

})

const sairaFont= Saira({
  subsets:["latin"],
  weight:"500",
  display:"swap"

})
const GET_NEW_ARRIVALS = gql `query CarsQuery {
  newarrivals{
    id
    model
    location
    image
    price
    mileage
    year
    engine_size
  }
}
`
export default function SectionOne() {
  const { data, error, loading } = useQuery<NewArrivalData>(GET_NEW_ARRIVALS)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!data?.newarrivals || data.newarrivals.length === 0) return;

    const total = data.newarrivals.length;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === total - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [data?.newarrivals]);

  if (loading) return <p>Data Loading...</p>
  if (error) return <p>Error...{error.message}</p>
  if (!data?.newarrivals) return <p>No cars to Display</p>

  return (
    <div >
      <div className={`mt-5 text-center text-xl`}>
        <h1  className={`${exoFont.className} sm:text-2xl text-darkSky  `}>NEW ARRIVALS</h1>
        <p className={`${sairaFont.className} text-darkSky`}>Find Newly Posted Cars from approved sellers</p>
      </div>
      
      <section className="mt-2 w-full flex justify-center">
        <div className="relative sm:w-full w-[400px] h-[400px] overflow-hidden ">
          {/* Sliding container */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.newarrivals.map((car) => (
              <div key={car.id} className="sm:shrink-0  w-full sm:grid sm:grid-cols-2 ">
                {/* Left image */}
                <Link key={car.id} href={`/newCars/${car.id}`}>
                <div className="relative sm:w-full w-[400px] h-[200px] sm:h-full sm:ml-24 ">
                  <Image 
                    src={car.image} 
                    alt={car.model} 
                    fill
                    className="object-cover sm:rounded-xl sm:pl-1 pl-0"
              
                  />
                </div>
                </Link>
                
                {/* Right Details */}
                <div className={`flex flex-col justify-center sm:pl-6 pl-0 sm:w-[600px] w-[400px] sm:ml-28 sm:rounded-xl  text-darkSky h-full ${josefinFont.className}`}>
                  <div className="sm:-mt-20 -mt-46 -ml-6 text-center ">
                    <p className="text-center text-xl font-extrabold w-auto ">Price</p>
                    <p className="text-center">
                      <span className="sm:text-4xl text-xl font-extrabold">KSH.{car.price}</span>
                    </p>
                  </div>
                  
                  <div className="grid  grid-cols-2  sm:pl-10 pl-10 sm:ml-7 sm:mt-5 mt-1 gap-2 ">
                    <div className=" h-[50px] sm:h-[100px] text-center rounded-xl sm:pt-5 pt-0 bg-navyBlue">
                      <p className="text-lg w-auto pl-1 ">Model</p>
                      <p><span className="sm:text-2xl text-lg font-extrabold">{car.model}</span></p>
                    </div>
                    
                    <div className=" sm:w-[150px] w-[70px] text-center rounded-xl sm:pt-5 bg-navyBlue">
                      <p className="sm:text-lg text-md w-auto pl-1">Year</p>
                      <p className="pl-1">
                        <span className="sm:text-2xl text-lg">{car.year}</span>
                      </p>
                    </div>
                    
                    <div className="w-[150px] sm:h-[100px] h-[50px] text-center rounded-xl bg-navyBlue">
                      <p className="sm:text-lg md w-auto pt-1 pl-1 ">Engine <span className={`hidden sm:inline`}>Size</span></p>
                      <p><span className="sm:text-3xl text-md">{car.engine_size}</span></p>
                    </div>
                    
                    <div className=" sm:-ml-24 -ml-7 sm:w-[247px] w-[100px] text-center rounded-xl bg-navyBlue">
                      <p className="pl-1 sm:text-lg text-md w-auto pt-1">Milage</p>
                      <p className="pl-1">
                        <span className="sm:text-2xl text-md font-extrabold">{car.mileage} Km</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {data.newarrivals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-black w-4" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>



    </div>
  )
}