"use client"

import { GET_CAR_BY_ID, SpecificCarData } from "@/interfaces";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import { use, useState} from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import OtherVehicles from "@/components/OtherVehicles";
import Accordion from "@/components/Accordion";
import { Saira, Josefin_Sans } from "next/font/google";

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

type PageProps = {
  params:Promise<{id:string}>
};


export default function CarDetailsPage({ params }: PageProps) {  

  const [searchQuery, setSearchQuery] = useState("");  
const {id} = use(params) // ✅ unwrap params (REQUIRED in Next 15+)
 
  const { data,loading,error } =useQuery<SpecificCarData>( GET_CAR_BY_ID, {variables: { id }});

  if(loading)return <p>Loading....</p>
  if(error) return <p>Error: {error.message}</p>;
  if (!data?.specific_car) return <p>Car not found</p>;

  const car = data.specific_car;

  // Exterior data
const exteriorItems = [
  { title: "Doors", content: car.specific_car_exterior.doors },
  { title: "Paint", content: car.specific_car_exterior.paint },
  { title: "Wipers", content: car.specific_car_exterior.wipers },
  { title: "WindScreen", content: car.specific_car_exterior.windscreen },
  { title: "Headlights", content: car.specific_car_exterior.headlights },
  { title: "Windows", content: car.specific_car_exterior.windows },
  { title: "Bumper", content: car.specific_car_exterior.bumper },
  { title: "Side Mirrors", content: car.specific_car_exterior.side_mirrors },
  {
    title: "Transmission Engine",
    content: car.specific_car_exterior.transmission_engine,
  },
];

// Suspension data
const suspensionItems = [
  { title: "Arms Suspension", content: car.specific_car_suspension.arms_suspension },
  { title: "Axels", content: car.specific_car_suspension.axels },
  { title: "Ball Joints", content: car.specific_car_suspension.ball_joints },
  { title: "Brake Pads", content: car.specific_car_suspension.brake_pads },
  { title: "Braking System", content: car.specific_car_suspension.braking_system },
  { title: "Bushes", content: car.specific_car_suspension.bushes },
  { title: "Mounting", content: car.specific_car_suspension.mounting },
  { title: "Shock Absorbers", content: car.specific_car_suspension.shock_absorbers },
];

//Interior data
const interiorItems = [
  { title: "Air Conditioner", content: car.specific_car_interior.air_conditioner },
  { title: "Dashboard", content: car.specific_car_interior.dashboard },
  { title: "Electrical System", content: car.specific_car_interior.electrical_system },
  { title: "Infotainment", content: car.specific_car_interior.infotainment },
  { title: "Mats", content: car.specific_car_interior.mats },
  { title: "Roof", content: car.specific_car_interior.roof },
  { title: "Seats", content: car.specific_car_interior.seats },
  { title: "Switches", content: car.specific_car_interior.switches },
];

// Accessories data
const accessoriesItems = [
  { title: "Jack & Spanner", content: car.specific_car_accessory.jack_spanner },
  { title: "Spare Wheel", content: car.specific_car_accessory.spare_wheel },
];

//Tires data
const tiresItems = [
  { title: "Left Front", content: car.specific_car_tire.left_front },
  { title: "Right Front", content: car.specific_car_tire.right_front },
  { title: "Left Rear", content: car.specific_car_tire.left_rear },
  { title: "Right Rear", content: car.specific_car_tire.right_rear },
]

const filterItems = (items: typeof exteriorItems) =>
  items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

const filteredExteriorItems = filterItems(exteriorItems);
const filteredSuspensionItems = filterItems(suspensionItems);
const filteredInteriorItems = filterItems(interiorItems);
const filteredAccessoriesItems = filterItems(accessoriesItems);
const filteredTiresItems = filterItems(tiresItems);


  return (
    <div>
      <Header></Header>
      {/**Showcase Images */}
      <div className="w-[1600px] px-10 bg-[#fff] rounded-xl ml-10 "> 
        <div>
          <h1 className={`text-4xl font-bold mb-4 p-4 ml-10 ${sairaFont.className} text-darkSky`}>{car.model}</h1>
          <div className={`grid grid-cols-[1fr_1fr] gap-1 ml-10 `}>
            <div className={`rounded-xl mb-10`}>
          <Image src={car.image} alt="front"  className={`rounded-2xl`} width={800} height={300}/>
            </div>
            <div className={`grid grid-cols-[310px_310px] gap-1 mb-10`}>
             <Image src={car.specific_car_exterior.rear} alt="rear" className={`rounded-xl`} width={300} height={300}/>
                <Image src={car.specific_car_exterior.left} alt="left" className={`rounded-xl`} width={300} height={300}/>
                   <Image src={car.specific_car_exterior.right} alt="right" className={`rounded-xl`} width={300} height={300}/>
                   <Image src={car.specific_car_exterior.front} alt="front" className={`rounded-xl`} width={300} height={300}/>
            </div>
          </div>
        </div>
      </div>


      {/**Specifications */}
      <div className={`w-[1600px] px-10 bg-[#fff] mt-10 rounded-xl ml-10`}>
        <h1 className={`text-4xl font-bold mb-4 p-4 ml-10 ${sairaFont.className} text-darkSky`}>Specifications</h1>
      <div className={` grid grid-cols-[1fr_1fr] gap-1 ml-10`}>
       <div className={`bg-lightSky text-navyBlue  rounded-lg p-5 mb-10 grid grid-cols-[1fr_1fr_1fr] gap-1 ${josefinFont.className}`}>
        <p ><span className={`text-lg `}>Mileage:</span><br></br> <span className={`text-2xl font-extrabold `}>{car.unit_car.mileage} Kilometers</span></p>
        <p  ><span className={`text-lg `}>Engine Size:</span> <br></br> <span className={`text-2xl font-extrabold `}>{car.unit_car.engine_size}</span></p>
        <p  ><span className={`text-lg `}>Engine Power:</span><br></br>  <span className={`text-2xl font-extrabold `}>{car.unit_car.engine_power}</span></p>
        <p  ><span className={`text-lg `}>Fuel:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.unit_car.fuel}</span></p>
        <p  ><span className={`text-lg `}>Year:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.unit_car.year}</span></p>
        <p ><span className={`text-lg `}>Registration Number:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.unit_car.reg_no}</span></p>
        <p  ><span className={`text-lg `}>Color:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.unit_car.color}</span></p>
       </div>
         <div className={ `bg-lightSky text-navyBlue w-[630px] h-[230px] rounded-lg p-5 mb-10 ${sairaFont.className}`}>
                        <p className={`text-center text-xl font-extrabold w-auto `}>Price</p><br></br>
          <div className={`mx-auto flex justify-center`}>
              <p className={` text-6xl font-bold `}>KSH.{car.unit_car.price}</p>
          </div>
       </div> 

      </div>
       </div>

      {/**Car History */}
      <div className={`w-[1600px] px-10 bg-[#fff] mt-10 rounded-xl ml-10`}>
        <h1 className={`text-4xl font-bold mb-4 p-4 ml-10 ${sairaFont.className} text-darkSky`}>History</h1>
      <div className={` grid grid-cols-[1fr_1fr] gap-1 ml-10`}>
       <div className={`bg-lightSky text-navyBlue  rounded-lg p-5 mb-10 w-[1380px] grid grid-cols-[1fr_1fr_1fr] gap-1 ${josefinFont.className}`}>
        <p ><span className={`text-lg `}>Insurance:</span><br></br> <span className={`text-2xl font-extrabold `}>{car.specific_car_history.insurance_write_off} </span></p>
        <p  ><span className={`text-lg `}>Not Scrapped:</span> <br></br> <span className={`text-2xl font-extrabold `}>{car.specific_car_history.not_scrapped}</span></p>
        <p  ><span className={`text-lg `}>Stolen Report:</span><br></br>  <span className={`text-2xl font-extrabold `}>{car.specific_car_history.not_stolen}</span></p>
        <p  ><span className={`text-lg `}>Original Plate:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.specific_car_history.original_plate}</span></p>
        <p  ><span className={`text-lg `}>Original Color:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.specific_car_history.original_color}</span></p>
        <p ><span className={`text-lg `}>Latest Owner:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.specific_car_history.latest_owner}</span></p>
        <p  ><span className={`text-lg `}>Inspection Report:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.specific_car_history.inspection_report}</span></p>
        <p  ><span className={`text-lg `}>Log Book:</span> <br></br>  <span className={`text-2xl font-extrabold `}>{car.specific_car_history.log_book}</span></p>
       </div>

      </div>
       </div>

       {/*About*/}
             <div className={`w-[1600px] h-[300px] px-10 bg-[#fff] mt-10 rounded-xl ml-10`}>
        <h1 className={`text-4xl font-bold mb-4 p-4 ml-10 ${sairaFont.className} text-darkSky`}>Description</h1>
      <div className={`  gap-1 ml-10 mb-10`}>
         <div className={ `bg-lightSky text-navyBlue w-[1380px]  rounded-lg p-5 mb-10 `}>
          <div className={`mx-auto flex justify-center ${sairaFont.className}`}>
              <p className={` text-xl  `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
       </div>
      </div>
       </div>
       {/*Other Vehicles*/ }
       <div className="mt-10">
<OtherVehicles />
       </div>
       {/** Interior Photo */}
        <div className={`w-[1600px]  px-10 bg-[#fff] mt-10 rounded-xl ml-10`}>
           <h1 className={`text-4xl font-bold mb-4 p-4 ml-10 ${sairaFont.className} text-darkSky`}>Interior</h1>
        <div className={` grid grid-cols-[750px_800px] gap-2 ml-25 `}>
          <div className={`grid grid-rows-[330px_1fr] gap-1 mb-10`}>
               <div className={` grid grid-cols-[1fr_1fr] gap-1`}>
                     <Image src={car.specific_car_interior.interior_3} alt="interior-3" className={`rounded-xl`} width={400} height={300}/>
             <Image src={car.specific_car_interior.interior_4} alt="interior-4" className={`rounded-xl`} width={400} height={300}/>

               </div>
               <div className={``}>
                <Image src={car.specific_car_interior.interior_1} alt="interior-1" className={`rounded-xl`} width={800} height={300}/>
 
               </div>
          </div>
          <div className={``}>
             <Image src={car.specific_car_interior.interior_2} alt="interior-2"className={`rounded-xl`} width={480} height={300}/>

          </div>

        </div>
       </div>
        {/** Accordion for Full Report */}
              <div className={`w-[1600px] px-10 bg-[#fff] mt-10 rounded-xl ml-10 pb-16 `}>
               <h1 className={`text-4xl font-bold mb-4 p-4 ml-10 ${sairaFont.className} text-darkSky`}>View Full Profile</h1>
        {/** Search Bar */}
  <h1 className={`text-3xl font-bold mb-2  ${sairaFont.className} text-darkSky text-center`}>Search Parts</h1>
  <div className=" ml-12 mb-4 flex justify-center">
    <input
      type="text"
      placeholder="Search for a part..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border border-gray-300 rounded-lg p-2 w-[400px]"
    />
  </div>


       <div className={`bg-lightSky text-navyBlue  rounded-lg p-5 mb-10 grid grid-cols-[1fr_1fr] gap-1`}>
      <Accordion title="Exterior" items={filteredExteriorItems} />
<Accordion title="Suspension" items={filteredSuspensionItems} />
       </div>
              <div className={`bg-lightSky text-navyBlue rounded-lg p-5 grid grid-cols-[1fr_1fr] gap-1 `}>
       <Accordion title="Interior" items={filteredInteriorItems} />
<Accordion title="Accessories" items={filteredAccessoriesItems} />
<Accordion title="Tires" items={filteredTiresItems}/>
</div>
  </div>
  <Footer></Footer>
    </div>
  );
}
