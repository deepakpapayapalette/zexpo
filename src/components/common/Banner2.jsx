import React from "react";
import heroImage from "../../assets/images/public-health/banner.jpg";
import { Link } from "react-router-dom";

const Banner2 = ({ data = [] || null }) => {
  return (
    <section className="space-top">
      <div className="container  " >
        <div className="relative bg-cover bg-center px-5 py-10 rounded-xl" style={{ backgroundImage: `url(${data?.image || heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 rounded-xl"></div>
          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="md:max-w-3xl">
              <h1 className="text-2xl lg:text-5xl font-semibold text-white md:mb-6 mb-3 leading-tight">
                {data?.title || "Building Future-Ready Technology Solutions for a Healthier, Safer, and Smarter World"}
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 md:mb-6 mb-3  leading-relaxed">
                {data?.description || "Empowering Public Health, Medical Tourism, Road Safety, Skill Development, and AI-driven Innovations under the ZENIVERSE Venture Studio Model."}
              </p>
              {data?.btnText || data?.button ?
                <Link to={`${data?.link || "#"}`}>
                  <button className="theme-btn-fill hover:text-white hover:border-white">
                    {data?.btnText || data?.button || null}
                  </button>
                </Link>
                : null
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
