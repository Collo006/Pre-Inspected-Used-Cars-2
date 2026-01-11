"use client"

import { CarsData } from "@/interfaces";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Josefin_Sans, Saira } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const sairaFont= Saira({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})

const sairaSmallFont= Saira({
    subsets:["latin"],
    weight: "300",
    display:"swap"
})


const josefinFont= Josefin_Sans({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})
 
const GET_CARS= gql `query CarsQuery{
       cars{
        id
        location
        model
        image
        price
       }
}`

export default function Buy(){

//category filter (useState to store the results/values of the current/typed search)
const [search,setSearch]=useState("");
const [selectedModel,setSelectedModel]=useState("");
const [selectedLocation,setSelectedLocation]=useState("");
const [selectedPrice,setSelectedPrice]=useState("");

const {data,loading,error}=useQuery<CarsData>(GET_CARS)

if(loading) return <p>LOADING...</p>
if(error) return <p>Error...{error.message}</p>
if(!data?.cars) return <p>No new car available...</p>

//create dropdowns for the search criterea
const models= Array.from(new Set(data.cars.map((car)=>car.model)))
const locations= Array.from(new Set(data.cars.map((car)=>car.location)));
const prices= Array.from(new Set(data.cars.map((car)=>car.price)));

//create the filter cars
const filteredCars = data.cars.filter((car)=>{
    return(
        (!search||car.model.toLowerCase().includes(search.toLowerCase())) &&
        (!selectedModel||car.model===selectedModel) &&
        (!selectedLocation||car.location===selectedLocation)&&
        (!selectedPrice||car.price===selectedPrice)
    );
});

    return (
        <div className="w-screen">
            <div className="bg-white">
            <Header></Header>
            </div>
            <div className={`mt-5 text-center sm:text-2xl text-lg`}>
                <h1 className={`${sairaFont.className} text-darkSky sm:pl-46`}> Select Your Best Ride </h1>
            </div>
        <div className=" sm:grid sm:grid-cols-[300px_2fr] sm:px-1 sm:gap-2" >
            <div className="bg-white rounded-lg sm:h-[900px] flex justify-center items-center sm:block h-auto pt-5">

     {/** Search */}
          <input type="text" placeholder="Search model..." value={search}  className={` ${sairaSmallFont.className} bg-lightSky text-navyBlue rounded-lg sm:ml-1 pl-2 w-[290px] h-[50px] `} onChange={(e)=>setSearch(e.target.value)}/>
  
    <div className={`sm:block hidden mt-5 ml-1`}>
    {/*Model*/}
    <div className=" w-full border border-lightGray"></div>
    <select className={`${sairaSmallFont.className} mt-2 mb-2 w-[290px]  `} value={selectedModel} onChange={(e)=>setSelectedModel(e.target.value)}>
       <option value="" className={` text-navyBlue bg-lightSky`}> All Models</option>
       {(models.map((model)=>
       <option className={` text-navyBlue bg-lightSky`} key={model} value={model}>{model}</option>))}
    </select>
    <br></br>
     <div className="w-full border border-lightGray"></div>
    {/** Location*/}
    <select className={`${sairaSmallFont.className} mt-2 mb-2 w-[290px] `} value={selectedLocation} onChange={(e)=>setSelectedLocation(e.target.value)}>
    <option value="" className={` text-navyBlue bg-lightSky`}>All Locations </option>
    {(locations.map((location)=>
    <option className={` text-navyBlue bg-lightSky`} key={location} value={location}>{location}</option>
    ))}
    </select>
    <br></br>
     <div className="w-full border border-lightGray"></div>
        {/*Price*/}
    <select className={`${sairaSmallFont.className} mt-2 mb-2 w-[290px]`} value={selectedPrice} onChange={(e)=>setSelectedPrice(e.target.value)}>
    <option value="" className={` text-navyBlue bg-lightSky`}>All Prices </option>
    {(prices.map((price)=>
    <option className={` text-navyBlue bg-lightSky `} key={price} value={price}>{price}</option> 
    ))}
    </select>
 <div className="w-full border border-lightGray"></div>
    </div>

        </div>

            <div className="bg-white  rounded-lg sm:grid sm:grid-cols-[1fr_1fr_1fr] grid grid-cols-1 pt-5 pb-5 pl-2 justify-items-center">
              {filteredCars.length === 0 && (
                <p>No cars match your filters</p>
              )}
                {filteredCars.map((car)=>(
                 
                    <div  key={car.id} className={`bg-lightSky shadow-md rounded-lg sm:w-[20%] sm:min-w-[330px] w-[350px] sm:h-[330px] mb-5 cursor-pointer overflow-hidden  hover:shadow-lg transition duration-300` }>
                        <Link key={car.id} href={`/cars/${car.id}`}>
                         <div className={`relative h-50`}>
                          <Image src={car.image} alt={car.model} fill className={`object-cover rounded-t-lg`}/>
                        </div>
                        </Link>
                        <div className={`p-2`}>
                         <h3 className={`text-lg mb-2 text-navyBlue text-bold ${josefinFont.className}`}>{car.model}</h3>
                         <div className={`space-y-1 text-sm text-navyBlue ${josefinFont.className}`}>
                            <p>Location:{car.location}</p>
                             <p className={`text-lg font-bold text-navyBlue ${josefinFont.className}`}>  Ksh.{car.price.toLocaleString()}</p>
                         </div>
                        </div>
                    </div>
                  
                ))}
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}