import React from "react";
import { FaHandshake, FaUsers, FaLink } from "react-icons/fa";
import HeadingBtn from "../common/HeadingBtn";
import futureTogether from "../../assets/images/home/future-together.png";

const futureData = [
  {
    id: 1,
    icon: <FaHandshake className="text-black text-4xl" />,
    title: "Partner with Us",
    desc: "Collaborate to develop ground-breaking AI ventures that impact communities worldwide.",
  },
  {
    id: 2,
    icon: <FaUsers className="text-black text-4xl" />,
    title: "Join Our Team",
    desc: "Be part of a visionary group dedicated to healthcare innovation and social good.",
  },
  {
    id: 3,
    icon: <FaLink className="text-black text-4xl" />,
    title: "Stay Connected",
    desc: "Subscribe to our newsletter and follow us on social platforms for updates and opportunities.",
  },
];

const FutureTogether = () => {
  return (
    <section className="space-top">
      <div className="container">
        {/* Heading Section */}
        <div className="mb-6">
          <div className="mb-4">
            <HeadingBtn text="Contact Us" />
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2 leading-tight">
            Let's Build the Future Together
          </h3>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            Let’s connect and explore how we can collaborate to create impactful AI-driven solutions for the future.
          </p>
        </div>

        {/* Image + Cards Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={futureTogether}
              alt="Future Together"
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-1/2 space-y-4 lg:ms-[-100px]">
            {futureData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start gap-4 md:gap-8 bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full flex items-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-webprimary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-md md:text-lg">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-4 flex justify-end">
              <button className="theme-btn-fill px-6 py-2 rounded-full shadow-md">
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTogether;
