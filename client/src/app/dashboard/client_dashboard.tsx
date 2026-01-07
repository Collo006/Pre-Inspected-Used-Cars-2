"use client"
import { Delius_Unicase }  from "next/font/google"
import ImageSlider from "@/components/ImageSlider";
import SectionOne from "@/layout/LandingPage/SectionOne";
import SectionTwo from "@/layout/LandingPage/SectionTwo";
import SectionThree from "@/layout/LandingPage/SectionThree";
import SectionFour from "@/layout/LandingPage/SectionFour";
import Footer from "@/layout/Footer";
import { auth } from "../../../lib/auth";
import MiniSectionThree from "@/layout/LandingPage/MiniSectionThree";
import Header from "@/layout/Header";

const deliusFont= Delius_Unicase({
  subsets:["latin"],
  weight:"700",
  display:"swap"
})

type Session =typeof auth.$Infer.Session;
export default function UserDashBoard({session}:{session: Session}) {
 const user = session.user

  return (
<div className=" w-auto">
    <Header></Header>

  <div className="">
    <div className="text-center mt-3 mb-2 ">
    <p className= {`text-darkSky font-bold sm:text-3xl text-md ${deliusFont.className}`} >Welcome {user.name}! Let&apos;s find your Perfect Ride. </p>
    </div>
<ImageSlider/>
  </div>
         
  <div>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <MiniSectionThree/>
    <SectionFour/>
  </div>
  <Footer/>
</div>
  );
}

/** 
 *  <Image src={car.image} alt={car.model} width={200} height={200} />
 *   <img src="/images/car1.jpg" alt="Car" width="300" height="100" />

 */