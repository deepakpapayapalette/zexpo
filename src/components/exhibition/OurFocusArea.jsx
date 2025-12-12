import React from 'react'
import { BrainCog } from "lucide-react";

const serviceData = [
  {
    title: "Healthcare AI",
    subtitle: "AI-Powered Healthcare Solutions",
    desc: "Advanced artificial intelligence systems for medical diagnostics, treatment planning, and patient care optimization.",
  },
  {
    title: "Digital Health",
    subtitle: "Telemedicine Platforms",
    desc: "Comprehensive telemedicine solutions connecting patients with healthcare providers globally.",
  },
  {
    title: "Medical Tourism",
    subtitle: "Medical Tourism Services",
    desc: "End-to-end medical tourism platform connecting patients with world-class healthcare facilities.",
  },
  {
    title: "Mobile Health",
    subtitle: "Mobile Health Applications",
    desc: "User-friendly mobile apps for health monitoring, medication management, and wellness tracking.",
  },
  {
    title: "Security",
    subtitle: "Healthcare Data Security",
    desc: "Robust cybersecurity solutions protecting sensitive healthcare data and ensuring compliance.",
  },
  {
    title: "Social Impact",
    subtitle: "Community Health Programs",
    desc: "Social impact initiatives improving healthcare access and education in underserved communities.",
  },
];
const OurFocusArea = () => {
  return (
    <>
      <section className="space-top container">
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2 leading-tight">
            Our Focus Area
          </h3>
          <p className="text-gray-700 text-base md:text-lg mb-8">
            We provide cutting-edge technology solutions that empower healthcare providers, improve patient outcomes, and drive innovation across the healthcare ecosystem.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.map((service, idx) => (
              <div
                key={service.title}
                className="bg-white justify-between rounded-xl shadow-md border border-gray-100 flex flex-col p-6 hover:shadow-lg transition-all duration-200"
              >
                <div className="mb-4">
                  <div className="bg-[#5992b9] rounded-md w-12 h-12 flex items-center justify-center">
                    <BrainCog className="text-white w-7 h-7" />
                  </div>
                </div>
                <div>

                  <h4 className="text-webprimary font-bold text-lg mb-1">{service.title}</h4>
                  <div className="font-semibold mb-2">{service.subtitle}</div>
                  <p className="text-gray-700 text-base mb-5">{service.desc}</p>
                </div>
                <button
                  className="border border-[#5992b9] text-[#5992b9] font-semibold rounded-full px-5 py-2 hover:bg-webprimary hover:text-white transition-all self-start"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurFocusArea
