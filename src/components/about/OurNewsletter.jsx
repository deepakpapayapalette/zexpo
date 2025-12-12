import React from "react";
import aboutBanner from "../../assets/images/about/newsletter.png";

const OurNewsletter = () => {
  return (
    <section className="w-full container mx-auto my-16 font-sans">
      <div className="flex flex-col lg:flex-row bg-[#F0F6FF] overflow-hidden rounded-xl shadow-sm">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black font-serif">OUR</span>{" "}
            <span className="text-[#0056D2] font-serif">Newsletter</span>
          </h2>

          <div className="   mb-6  w-fit">
            <div className="text-xl lg:text-3xl text-gray-700 font-semibold">
              Stay Connected with the World of Zexpo
            </div>
          </div>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Get the latest updates on trending Exhibitions, cultural fests, and
            city celebrations.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-[#E8F1F8] px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-[#0056D2] text-gray-700 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-webprimary hover:bg-websecondary text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 shadow-md whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>

          <p className="text-gray-500 text-sm">
            We'll only send you the good stuff — no spam, just celebrations.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <img
            src={aboutBanner}
            alt="Exhibition crowd"
            className=" w-full max-h-[400px] object-cover"
          />
          {/* Overlay gradient for better integration if needed, but not strictly asked for */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5 lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default OurNewsletter;
