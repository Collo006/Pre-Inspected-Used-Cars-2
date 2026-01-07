
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/header-bg.jpg",
  "/images/oldies.jpg"
 
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // change delay (ms)

    return () => clearInterval(interval); //Cleans up the interval when the component unmounts (or if the effect re-runs). Prevents memory leaks and duplicate timers.
  }, []);

  return (
    <div
      className="relative overflow-hidden w-full   "
      style={{  height: 600 }}
   
    >
      {/* Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >{/** used to change the opacity based on the currently active image, relative so absolutely positioned children (slides) can be placed inside. */}
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover" 
            id="image-blur-fade"
            
          />
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
