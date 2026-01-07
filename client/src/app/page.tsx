"use client"

import { motion } from "framer-motion";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";


const josefinFont= Josefin_Sans({
  subsets: ['latin'],
  weight:"400",
  display:"swap"
})

//make sure to create that wehn the page loads, the images slide in/fade in or appear to come from the top (style={{ backgroundImage: "url('images/ford f150.jpg')" }} min-h-screen bg-cover bg-center bg-no-repeat  )

export default function Home() {
  return (
    <div className="relative  min-h-screen " >
      <Image src="/images/ford f150.jpg" alt="Background" fill priority  className="object-cover -z-10" />

          <motion.div className="flex justify-between sm:justify-end sm:flex-row  gap-4 pt-5 pr-10 pl-5" initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
            <Link
              href="/SignUp"
              className={`bg-transparent text-xl text-white  ${josefinFont.className}  `}
            >
              Sign Up
            </Link>
            <Link
              href="/dashboard"
              className={`bg-transparent text-xl text-white  ${josefinFont.className}`}
            >
            Dashboard
            </Link>
          </motion.div> 
          <motion.div className="pl-5 pt-5 sm:ml-14 sm:mt-6" initial={{ opacity: 0, y: 40 }}      // start lower
        animate={{ opacity: 1, y: 0 }}        // slide into place
        transition={{ duration: 1 }}>
              <p className={`${josefinFont.className} text-5xl sm:text-white text-black `}><span > Good Cars Do </span><br></br>Not Hide Problems</p>
              <p className={`${josefinFont.className} text-xl text-white pt-4 sm:pt-6 `}>We uncover everything upfront helping <br></br>  Kenyans make safer choices.</p>
              <Link href="/SignUp"><motion.button initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.05 }} className={`${josefinFont.className} animate-pulse bg-newOrange text-white mt-5 sm:mt-2 pt-3 pb-3  rounded-xl text-xl w-[150px] cursor-pointer`}>Explore More</motion.button></Link>
            </motion.div>   
      
</div>
  );
}