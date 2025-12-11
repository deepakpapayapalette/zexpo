import React from 'react'
import {
  Lightbulb,
  Award,
  Shield,
  TrendingUp
} from 'lucide-react';

const coreValues = [
  {
    id: 1,
    title: "Innovation",
    desc: "We constantly push the boundaries of technology to create groundbreaking solutions.",
    icon: <Lightbulb size={28} />,
    color: "text-blue-600"
  },
  {
    id: 2,
    title: "Excellence",
    desc: "We deliver the highest quality products and services that exceed expectations.",
    icon: <Award size={28} />,
    color: "text-green-600"
  },
  {
    id: 3,
    title: "Integrity",
    desc: "We conduct business with honesty, transparency, and ethical practices.",
    icon: <Shield size={28} />,
    color: "text-purple-600"
  },
  {
    id: 4,
    title: "Impact",
    desc: "We focus on creating positive change that benefits society and the environment.",
    icon: <TrendingUp size={28} />,
    color: "text-orange-600"
  }
];
const OurCoreValue = () => {
  return (
    <>
      <section className="space-top bg-gradient-to-b from-[#f9f9f9] to-[#a2c1d7eb]">
        <div className='container space-top md:pb-12 pb-8'>
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2 leading-tight">
              Our Core Values
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-8">
              The principles that guide every decision we make and every solution we create.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5">
            {coreValues.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-md p-4 text-left border border-gray-100 flex flex-col "
              >
                {/* <div className="mb-4">{item.icon}</div> */}
                <div className="inline-flex justify-start items-center mb-4">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex justify-center items-center ">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-webprimary font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurCoreValue
