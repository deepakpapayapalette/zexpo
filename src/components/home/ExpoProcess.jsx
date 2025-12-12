import React from 'react';
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    num: 1,
    title: "Explore Nearby Exhibitions",
    desc: "Search for trending Exhibitions, food fests, and expos happening around you.",
  },
  {
    num: 2,
    title: "Discover the Details",
    desc: "View event info, dates, activities, and highlights all in one place.",
  },
  {
    num: 3,
    title: "Plan Your Visit",
    desc: "Get directions, check schedules, and mark your favorites.",
  },
  {
    num: 4,
    title: "Enjoy & Share the Experience",
    desc: "Be part of the vibe — enjoy live moments and share your Zexpo story online.",
  },
];
export default function OurProcess() {
  return (
    <div className="space-top bg-[#edf4f9] " >
      <div className="container py-10 md:py-12 relative">
        <h2 className="md:text-5xl text-3xl mb-8 font-semibold text-black">
          How  <span className="text-webprimary font-sourcePro">ZEXPO</span> Works?
        </h2>

        {/* Stepper */}
        <div className="relative grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={` relative z-10 `}
            >
              <div className='flex justify-center w-full' >
                <div className="bg-webprimary text-white text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mb-2 border-2 border-white shadow-lg z-10">
                  {step.num}
                </div>
              </div>
              <div className="text-webprimary text-center text-base md:text-lg font-bold leading-tight mb-1">{step.title}</div>
              <div className="text-gray-700 text-sm md:text-base text-center">{step.desc}</div>
            </div>
          ))}
          {/* Dotted lines (responsive via abs/width calc) */}
          <div className="hidden lg:block absolute w-[76%] left-40 top-[30px]  h-0.5  pointer-events-none z-0  border-t-2 border-dotted border-[#5992b9] ">

          </div>
        </div>
      </div>
    </div>
  );
}
