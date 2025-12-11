import React from "react";
import { Link } from "react-router-dom";

const HealthcareCTA = () => (
  <section className="space-top container">
    <div className="w-full max-w-5xl mx-auto px-6">
      <div
        className="bg-gradient-to-b from-white to-[#5992b9] rounded-full py-10 px-6 flex flex-col items-center shadow-md"
        style={{ borderRadius: "100px" }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-webprimary text-center mb-3">
          Ready to Transform Your Healthcare Operations?
        </h2>
        <p className="text-gray-700 text-center mb-7">
          Let's discuss how our innovative solutions can address your specific healthcare technology needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact">
            <button className="theme-btn-fill">
              Get In Touch
            </button>
          </Link>
          <a
            href="/assets/brochure.pdf" // update with actual PDF link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border bg-white border-[#5992b9] text-[#5992b9] px-7 py-3 rounded-full font-semibold shadow hover:bg-[#225F8C] hover:text-white transition-all">
              Download Brochure
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HealthcareCTA;
