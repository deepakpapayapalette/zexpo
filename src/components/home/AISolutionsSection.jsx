import React from "react";
// import your image – update the path as needed
import solutionImage from "../../assets/images/home/ai-power-solution.png";
import HeadingBtn from "../common/HeadingBtn";

const solutions = [
  {
    title: "Telemedicine-Enabled Clinics",
    description:
      "Expanding healthcare access with remote AI-assisted consultations connecting patients and specialists.",
  },
  {
    title: "Motorbike Fleets",
    description:
      "Optimizing healthcare and emergency response transport with agile, AI-managed motorbike fleets.",
  },
  {
    title: "Skill Development",
    description:
      "Empowering healthcare professionals through cutting-edge AI and innovation training programs.",
  },
  {
    title: "Smart Trauma Center Setups",
    description:
      "Enhancing emergency care with AI-driven diagnostics and rapid response capabilities for trauma patients.",
  },
];

const AISolutionsSection = () => {
  return (
    <section className="space-top ">
      <div className="container">
        <div>
          <div className="mb-4">
            <div className="mb-4">

              <HeadingBtn text="   AI-POWERED SOLUTIONS" />
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2 leading-tight">
              Pioneering Innovation Across Industries
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              We develop innovative solutions that drive growth, solve complex challenges, and create lasting impact across industries worldwide.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-10 items-start">
          {/* Left Solutions */}
          <div className="md:w-[60%] w-full order-2 md:order-1">

            <div>
              {solutions.map((item, idx) => (
                <div key={idx} className="mb-6 pb-4 border-b border-gray-300 last:border-b-0 last:pb-0">
                  <h4 className="text-webprimary font-semibold text-lg md:text-xl mb-2">
                    {`${idx + 1}. ${item.title}`}
                  </h4>
                  <p className="text-gray-700 md:text-lg text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Image */}
          <div className="md:w-[40%] w-full flex md:justify-end order-1 md:order-2">
            <img
              src={solutionImage}
              alt="AI Powered Solutions"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
