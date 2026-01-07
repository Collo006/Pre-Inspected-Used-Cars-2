import { Delius_Unicase, } from "next/font/google"
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";


const deliusFont= Delius_Unicase({
  subsets:["latin"],
  weight:"400"
})



export default function Footer(){
    return (
        <div className={`bg-skyBlue text-white mt-10 w-full ${deliusFont.className}`}>
         <div className=" grid grid-cols-4 text-center leading-12 text-white">
            <div className={`text-white ${deliusFont.className}`}>
                <h2>PRODUCTS</h2>
                <p>USED CARS</p>
                <p>SELL YOUR CAR</p>
            </div>
           <div className={`text-white ${deliusFont.className}`}>
                <h2>RESOURCES</h2>
                <p>CONTACTS</p>
                <p>BLOG</p>
                <p>FAQ</p>
            </div>
         <div className={`text-white ${deliusFont.className}`}>
                <h2>WORK WITH US</h2>
                <p>PARTNERS</p>
                <p>SELLERS</p>
            </div>
             <div className={`text-white ${deliusFont.className}`}>
                <h2>ABOUT</h2>
                <p>INVESTORS</p>
                <p>TEAM</p>
            </div>
         </div>
           <div className="flex justify-center gap-4 pb-3 text-2xl text-white text-center cursor-pointer">
               <FaInstagram className="hover:text-[#d62976]"/>
              <FaFacebook className="hover:text-[#1877F2]"/>
               <FaTwitter className="hover:text-[#1DA1F2]" />
<FaLinkedin className="hover:text-[#0077B5]"/>
           </div>
           <div className={`text-center text-white ${deliusFont.className}`}>
            <p> &copy; <sup>TM</sup> PINUC.All rights reserved. Vehicle photos PINUC images 2025</p>
           </div>
       
        </div>
    )
}