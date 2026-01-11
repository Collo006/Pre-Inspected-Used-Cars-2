import FileUploaderOne from "@/components/FileUploaderOne";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { FaCar, FaFile, FaKey, FaMoneyBills, FaPhone, FaUser } from "react-icons/fa6";




export default function SellCarFormPage(){
    return (
        <div>
   
                       <Header></Header>
                
            <div className={`bg-white ml-0 w-screen  `}>
                <h1 className={`text-center mt-5 pt-5 text-navyBlue`}>SELL YOUR CAR ACROSS KENYA</h1>
                <div className={` mt-5 pb-10 sm:grid sm:grid-cols-[repeat(3,300px)] grid grid-cols-[repeat(1,300px)] gap-2 justify-center`}> {/** remember this shortcut */}
                <div className={`bg-lightSky text-darkSky h-[200px] rounded-xl pt-16 `}>
                    <p className="text-center">Share Your Contact</p>
                    <FaPhone className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-lightSky text-darkSky h-[200px] rounded-xl pt-16   `}>
                      <p className="text-center">Add your Car Details</p>
                      <FaUser className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-lightSky text-darkSky h-[200px]  rounded-xl pt-16  `}>
                      <p className="text-center">Upload Documents and Images </p>
                      <FaFile className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-lightSky text-darkSky h-[200px] rounded-xl pt-16 `}>
                      <p className="text-center">Wait For Validation</p>
                      <FaKey className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-lightSky text-darkSky h-[200px] rounded-xl pt-16  `}>
                      <p className="text-center">Secure Payment</p>
                      <FaMoneyBills className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                <div className={`bg-lightSky text-darkSky h-[200px] rounded-xl pt-16  `}>
                      <p className="text-center">Set Up Pickup Date</p>
                      <FaCar className="text-4xl mx-auto mb-2 mt-2"/>
                </div>
                </div>
            </div>
        <div className={`bg-white ml-0 w-screen rounded-xl mt-10 `}>
        <h1 className={`text-center mt-5 pt-5 text-navyBlue`}>UPLOAD DOCUMENTS AND IMAGES</h1>
        <div className={` mt-5 pb-10 sm:grid sm:grid-cols-[repeat(3,300px)]  grid grid-cols-[repeat(1,300px)] gap-2 justify-center`}>
            <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
             <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
              <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                  <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                   <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                     <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
                         <div className={`bg-lightSky text-darkSky h-[300px] pl-5 rounded-xl pt-16  `}>
                      <div><FileUploaderOne/></div>     
                </div>
        </div>
             
            </div>
            <Footer></Footer>
        </div>
    )
}