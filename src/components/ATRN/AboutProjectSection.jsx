import React from "react";

const geographies = ["India", "Ethiopia", "London"];



const AboutProjectSection = () => (
  <section className="space-top ">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left main block */}
        <div className=" w-full lg:w-[68%]">
          <h2 className="text-webprimary text-2xl md:text-3xl font-semibold mb-2">
            About The Project
          </h2>
          <p className="text-gray-700 text-base mb-7">
            India's healthcare landscape is strained by an overwhelming volume of medical data and stark inequities, exacerbating preventable deaths and inefficiencies. Annually, the country generates millions of medical prescriptions and records amid a booming pharmaceutical sector valued at $50 billion in FY 2023-24, with over 20.6 healthcare professionals per 10,000 people—yet rural areas, home to 67% of the population, face a dire doctor-to-patient ratio of 1:25,000 compared to urban regions' fourfold higher density, forcing residents to travel up to 100 km for care and resulting in only 30% of hospit
          </p>
          <h3 className="text-webprimary text-2xl md:text-3xl font-semibold mb-2">
            Problem Statement
          </h3>
          <p className="text-gray-700 text-base mb-7">
            India's healthcare landscape is strained by an overwhelming volume of medical data and stark inequities, exacerbating preventable deaths and inefficiencies. Annually, the country generates millions of medical prescriptions and records amid a booming pharmaceutical sector valued at $50 billion in FY 2023-24, with over 20.6 healthcare professionals per 10,000 people—yet rural areas, home to 67% of the population, face a dire doctor-to-patient ratio of 1:25,000 compared to urban regions' fourfold higher density, forcing residents to travel up to 100 km for care and resulting in only 30% of hospit
          </p>
          <h3 className="text-webprimary text-2xl md:text-3xl font-semibold mb-2">
            Proposed Solutions
          </h3>
          <p className="text-gray-700 text-base mb-2">
            India's healthcare landscape is strained by an overwhelming volume of medical data and stark inequities, exacerbating preventable deaths and inefficiencies. Annually, the country generates millions of medical prescriptions and records amid a booming pharmaceutical sector valued at $50 billion in FY 2023-24, with over 20.6 healthcare professionals per 10,000 people—yet rural areas, home to 67% of the population, face a dire doctor-to-patient ratio of 1:25,000 compared to urban regions' fourfold higher density, forcing residents to travel up to 100 km for care and resulting in only 30% of hospit
          </p>
        </div>
        {/* Right sidebar */}
        <div className="w-full lg:w-[32%] flex flex-col items-start gap-8">
          <div>
            <h3 className="text-webprimary text-2xl md:text-3xl font-semibold mb-3">
              Target Geographies
            </h3>
            <div className="flex flex-wrap gap-4">
              {geographies.map((geo) => (
                <span
                  key={geo}
                  className="bg-[#e7f0fa] text-gray-700 font-semibold text-sm px-5 py-2 rounded-md shadow"
                >
                  {geo}
                </span>
              ))}
            </div>
          </div>
          <FinancialProjections />
        </div>
      </div>
    </div>
  </section>
);

export default AboutProjectSection;

const FinancialProjections = () => (
  <div className="bg-white rounded-xl shadow-md p-6  w-full mb-6 md:mb-0">
    <h3 className="text-webprimary text-2xl md:text-3xl font-semibold mb-3">
      Financial Projections
    </h3>
    <p className="text-gray-700 text-sm mb-5">
      Strategic financial roadmap showcasing projected growth and revenue targets
    </p>
    <div className="grid grid-cols-2 gap-2 mb-4">
      <div className="bg-[#e7f0fa] rounded-md p-3 text-center">
        <div className="text-gray-400 text-xs mb-1">Starting Year</div>
        <div className="text-webprimary font-bold text-lg">2025</div>
      </div>
      <div className="bg-[#e7f0fa] rounded-md p-3 text-center">
        <div className="text-gray-400 text-xs mb-1">Peak Revenue Target</div>
        <div className="text-webprimary font-bold text-lg">₹41.5Lac</div>
      </div>
      <div className="bg-[#e7f0fa] rounded-md p-3 text-center">
        <div className="text-gray-400 text-xs mb-1">Projected Revenue</div>
        <div className="text-webprimary font-bold text-lg">₹4.5Cr</div>
      </div>
      <div className="bg-[#e7f0fa] rounded-md p-3 text-center">
        <div className="text-gray-400 text-xs mb-1">Projection Period</div>
        <div className="text-webprimary font-bold text-lg">1 Year</div>
      </div>
    </div>
    <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
      <li>
        <span className="font-semibold">Projected Revenue :</span> ₹4.5Cr
      </li>
      <li>
        Initial revenue projection establishing our financial baseline
      </li>
      <li>
        Strategic focus on sustainable growth through market expansion and product development initiatives during 2025.
      </li>
    </ul>
  </div>
);
