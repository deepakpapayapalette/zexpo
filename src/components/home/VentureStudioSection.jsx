import React from 'react';
import { FaLightbulb, FaCode, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import { Lightbulb, Code, CheckCircle2, TrendingUp } from 'lucide-react';
import HeadingBtn from '../common/HeadingBtn';


// import { BsLightbulb } from "react-icons/bs";
// import { FaLaptopCode } from "react-icons/fa";
// import { LuClipboardCheck, LuBarChart3 } from "lucide-react";

const studioStages = [
  {
    icon: <FaLightbulb className="text-3xl text-black" />,
    title: "Ideation",
    desc: "Identifying critical global challenges ripe for AI-powered innovation.",
  },
  {
    icon: <FaCode className="text-3xl text-black" />,
    title: "Development",
    desc: "Building scalable AI-driven business models and prototypes tailored to real-world impact.",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-black" />,
    title: "Validation",
    desc: "Rigorous testing and piloting to ensure solutions meet high standards and needs.",
  },
  {
    icon: <FaChartLine className="text-3xl text-black" />,
    title: "Scaling",
    desc: "Launching and expanding ventures to maximize social and economic benefits worldwide.",
  },
];
const VentureStudioSection = () => (
  <section className="space-top bg-gradient-to-b from-[#f9f9f9] to-[#a2c1d7eb]">
    <div className="container pb-10">
      <div className="mb-6">
        <div className="mb-4">
          <HeadingBtn text="VENTURE STUDIO" />
        </div> 
        <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2 leading-tight">
          Venture Studio: Building the Future Together
        </h3>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          We partner with entrepreneurs to create and scale AI-driven startups, turning innovative ideas into impactful businesses worldwide.
        </p>
      </div>
      {/* Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5">
        {studioStages.map((stage) => (
          <div
            key={stage.title}
            className="bg-white rounded-lg shadow-md p-4 text-left border border-gray-100 flex flex-col "
          >
            {/* <div className="mb-4">{stage.icon}</div> */}
            <div className="inline-flex justify-start items-center mb-4">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex justify-center items-center ">
                {stage.icon}
              </div>
            </div>
            <h4 className="text-webprimary font-semibold text-lg mb-2">{stage.title}</h4>
            <p className="text-gray-700 text-base">{stage.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VentureStudioSection;
