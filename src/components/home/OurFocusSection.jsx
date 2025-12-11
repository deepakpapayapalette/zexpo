import React from "react";
import { FaHeartbeat, FaRoad, FaBed, FaPlane } from "react-icons/fa";
import HeadingBtn from "../common/HeadingBtn";

const OurFocusSection = () => {
  const focusData = [
    {
      icon: <FaHeartbeat className="text-4xl text-black " />,
      title: "Public Health",
      description:
        "Every year, approximately 5-6 million people in India die due to medical errors (including late or wrong diagnoses), treatable medical conditions, and inadequate access to healthcare.",
    },
    {
      icon: <FaRoad className="text-4xl text-black " />,
      title: "Road Safety",
      description:
        "India reports over 500,000 road accidents and more than 180,000 fatalities annually, contributing to a 3% loss in the nation's GDP. Unfortunately, despite efforts, these numbers continue to rise.",
    },
    {
      icon: <FaBed className="text-4xl text-black " />,
      title: "Patient Stay",
      description:
        "India has the potential to provide 20 million room nights for patient stays annually. However, most hotels lack adequate support for patient recovery and hygiene (infection-free stay).",
    },
    {
      icon: <FaPlane className="text-4xl text-black " />,
      title: "Medical Tourism",
      description:
        "India attracts over 2 million medical tourists annually but faces challenges from emerging markets due to touts and insufficient technological integration.",
    },
  ];

  return (
    <section className="space-top">
      <div className="container ">
        {/* Section Heading */}
        <div className=" mb-10">
          <div className=" mb-4">
            <HeadingBtn text="Our Focus" />
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-3">
            Driving Change Across Critical Sectors
          </h3>
          <p className="text-gray-700 text-lg">
            Revolutionizing Key Sectors with Impactful Solutions, Alarming Statistics,
            and Our Commitment to Change
          </p>
        </div>

        {/* Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {focusData.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 "
            >
              <div className="inline-flex justify-center items-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex justify-center items-center ">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-webprimary mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFocusSection;
