import { SpecialCarDealData } from "@/interfaces";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Josefin_Sans, Exo_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: "300",
});

const exoFont = Exo_2({
  subsets: ["latin"],
  weight: "500",
});

const SPECIAL_CARS = gql`
  query SpecialCarsQuery {
    special_car_deals {
      id
      model
      year
      price
      mileage
      image
    }
  }
`;

export default function SectionTwo() {
  const { data, error, loading } = useQuery<SpecialCarDealData>(SPECIAL_CARS);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [carsPerSlide, setCarsPerSlide] = useState(1); // Start with mobile value
  const [isMobile, setIsMobile] = useState(false);

  // Function to update cars per slide based on screen size
  useEffect(() => {
    const updateScreenSize = () => {
      const mobile = window.innerWidth <= 640;
      setIsMobile(mobile);
      setCarsPerSlide(mobile ? 1 : 5);
    };

    // Initial update
    updateScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Calculate total slides AFTER carsPerSlide is determined
  const totalSlides = data?.special_car_deals?.length
    ? Math.ceil(data.special_car_deals.length / carsPerSlide)
    : 1;

  useEffect(() => {
    if (!data?.special_car_deals || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: slideWidth * currentSlide,
      behavior: "smooth",
    });
  }, [currentSlide, totalSlides, data]);

  if (loading) return <p className="text-center py-10">Loading cars...</p>;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">Error: {error.message}</p>
    );
  if (!data?.special_car_deals?.length)
    return <p className="text-center py-10">No car data available</p>;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="mt-5 sm:ml-10 ml-0 py-10 bg-white sm:w-[1600px] w-full rounded-xl">
      <section className="max-w-7xl mx-auto px-4 ">
        <h1
          className={`sm:text-5xl text-2xl text-darkSky font-bold text-center mb-10 ${exoFont.className}`}
        >
          SPECIAL CAR DEALS
        </h1>
      </section>

      {/* Full-screen scrollable area */}
      <div className="relative w-screen left-1/2 right-1/2 sm:-mx-[50vw] -mx-[55vw]">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-lightSky rounded-full p-3 shadow-lg hover:bg-skyBlue z-10 transition cursor-pointer"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-lightSky rounded-full p-3 shadow-lg hover:bg-skyBlue z-10 transition cursor-pointer"
        >
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

        {/* Edge-to-edge full-width container */}
        <div
          ref={scrollContainerRef}
          className="overflow-hidden w-full px-4 sm:px-0"
        >
          <div className="flex w-full">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const carsForThisSlide = data.special_car_deals.slice(
                slideIndex * carsPerSlide,
                (slideIndex + 1) * carsPerSlide
              );

              return (
                <div
                  key={slideIndex}
                  className={`shrink-0 w-full ${isMobile ? 'flex justify-center' : 'flex justify-center gap-4'} px-2 sm:px-6`}
                  style={{ flex: "0 0 100%" }}
                >
                  {carsForThisSlide.map((car) => (
                    <div
                      key={car.id}
                      className={`bg-lightSky cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ${isMobile ? 'w-full max-w-[350px]' : 'sm:w-[20%] sm:min-w-[200px] max-w-[350px]'} mx-auto`}
                    >
                      <Link key={car.id} href={`/SpecialCars/${car.id}`}>
                        <div className="relative h-52 ">
                          <Image
                            src={car.image}
                            alt={car.model}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <div className="p-4 text-center">
                        <h3
                          className={`text-lg mb-2 text-navyBlue text-bold ${josefinFont}`}
                        >
                          {car.model}
                        </h3>
                        <div
                          className={`space-y-1 text-sm text-navyBlue ${josefinFont}`}
                        >
                          <p>Year: {car.year}</p>
                          <p>Mileage: {car.mileage.toLocaleString()} miles</p>
                          <p
                            className={`text-lg font-bold text-navyBlue ${josefinFont}`}
                          >
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

      {/* Dots */}
      <section className="max-w-7xl mx-auto mt-8 flex justify-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </section>
    </div>
  );
}