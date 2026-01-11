
import { useEffect, useState } from "react";
import Image from "next/image";
import { Delius_Unicase } from "next/font/google";

const deliusFont= Delius_Unicase({
  subsets:["latin"],
  weight:"700"
})


const images = [
  "/images/ford-1.jpg",
  "/images/OLD-1.1.jpg",
  "/images/VW-1.jpg",
  "/images/VINTAGE-1.1.jpg"

];

const words= [
  "STEP 1: Share Your Contact and Car Details",
  "STEP 2: Upload Your Documents and Images",
  "STEP 3: Wait For Validation",
  "Your Car Is Now Ready For The Market"
]

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord,setCurrentWord]=  useState(0);

  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // change delay (ms)

    return () => clearInterval(interval); //Cleans up the interval when the component unmounts (or if the effect re-runs). Prevents memory leaks and duplicate timers.
  }, []);

  useEffect(()=>{
  const interval = setInterval(()=>{
    setCurrentWord((prev)=> prev === words.length-1 ? 0: prev +1);
  },3000)
    return () => clearInterval(interval);
  },[])


  return (
    <div
      className="relative overflow-hidden sm:ml-0 sm:w-screen w-screen  mt-5 h-auto"
      style={{ height: 500 }}
    >
     
      {/* Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >{/** used to change the opacity based on the currently active image, relative so absolutely positioned children (slides) can be placed inside. */}
        {words.map((word,index)=>(
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index===currentWord ? "opacity-100" : "opacity-0"}`}>
                <div className="relative w-full h-[500px]"> {/** to place a text over an image */}
                    <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover "
            loading="eager"
          />
          <div className="absolute sm:top-3/4 top-1/2 sm:left-16 left-5 transform-translate-x-1/2 -translate-y-1/2 text-white text-center">
           <p className={`sm:text-5xl text-2xl pt-20 text-white ${deliusFont.className}`}>{word}...</p>
          </div>
        </div>
          </div>
        ))}
     

        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-white w-4" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
 
  );
}
