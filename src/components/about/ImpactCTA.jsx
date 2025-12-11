import React from "react";
import { Link } from "react-router-dom";

const ImpactCTA = () => (
  <section className="flex justify-center items-center my-10">
    <div className="w-full max-w-5xl mx-auto px-6">
      <div
        className="bg-gradient-to-b from-white  to-[#72abd1] rounded-full py-10 px-6 flex flex-col items-center shadow-md"
        style={{ borderRadius: "100px" }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-webprimary text-center mb-3">
          Ready to Make an Impact?
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Join us in our mission to transform healthcare and create positive change in the world.
        </p>
        <Link to="/contact">
          <button className="theme-btn-fill transition-all">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default ImpactCTA;
