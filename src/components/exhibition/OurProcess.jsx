import React from 'react';
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';

const steps = [
  {
    num: 1,
    title: "Discovery & Assessment",
    desc: "We analyze your healthcare challenges and identify opportunities for technological solutions.",
  },
  {
    num: 2,
    title: "Solution Design",
    desc: "Our experts design customized solutions tailored to your specific needs and requirements.",
  },
  {
    num: 3,
    title: "Development & Testing",
    desc: "We develop and rigorously test solutions to ensure quality, security, and compliance.",
  },
  {
    num: 4,
    title: "Implementation & Support",
    desc: "We deploy solutions and provide ongoing support to ensure optimal performance and success.",
  },
];
export default function OurProcess() {
  return (
    <div className="space-top bg-[#edf4f9] " >
      <div className="container py-10 md:py-12 relative">
        <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2">Our Process</h3>
        <p className="text-gray-700 text-base md:text-lg mb-10">
          A proven methodology for delivering successful healthcare technology solutions.
        </p>
        {/* Stepper */}
        <div className="relative grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={` relative z-10 `}
            >
              <div className='flex justify-center w-full' >
                <div className="bg-[#5992b9] text-white text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mb-2 border-2 border-white shadow-lg z-10">
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
