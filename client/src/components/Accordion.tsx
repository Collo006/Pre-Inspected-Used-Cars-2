"use client";

import { Saira, Josefin_Sans } from "next/font/google";
import { useState } from "react";


const sairaFont= Saira({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})




const josefinFont= Josefin_Sans({
    subsets:["latin"],
    weight: "500",
    display:"swap"
})

type AccordionItem = {
  title: string;
  content: string | string[]; // string or array of strings
};

type AccordionProps = {
  title: string; // Section title like "Exterior", "Suspension", etc.
  items: AccordionItem[];
};

export default function Accordion({ title, items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);



  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };




  return (
    
    <div className="bg-lightSky text-navyBlue rounded-lg mb-10 p-5">



      <h2 className={`text-2xl font-bold mb-4  ${sairaFont.className}`}>{title}</h2>

      {items.map((item, index) => (
        <div
          key={index}
          className="border border-mediumGray rounded-xl cursor-pointer mb-2 pl-5 py-1"
          onClick={() => toggleOpen(index)}
        >
          <p className={`text-xl ${sairaFont.className}`}>{item.title}</p>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-20 pt-2" : "max-h-0 pt-0"
            }`}
          >
            <p className={`text-lg ${josefinFont.className}`}>
              {Array.isArray(item.content)
                ? item.content.join(", ")
                : item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
