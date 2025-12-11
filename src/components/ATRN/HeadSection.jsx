import React from "react";

const HeadSection = () => (
  <section className="w-full ">
    <div className=" flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6">
      <div>
        <h2 className="text-webprimary text-2xl font-bold mb-1">
          ATRN Solutions LLP (AETURN)
        </h2>
        <div className="text-gray-700 text-lg mb-1">
          Future-Ready Digital Health
        </div>
        <div className="text-black text-xl font-bold">
          Health Tech Venture
        </div>
      </div>
      <a
        href="https://www.aeturn.com" // Update with your website
        target="_blank"
        rel="noopener noreferrer"
        className="self-start md:self-center"
      >
        <button className="theme-btn-fill">
          Visit Website
        </button>
      </a>
    </div>
  </section>
);

export default HeadSection;
