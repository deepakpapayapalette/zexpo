import React from "react";

// Update paths to your logo assets
import amazonLogo from "../../assets/images/logos/amazon.png";
import googleLogo from "../../assets/images/logos/google.png";
import microsoftLogo from "../../assets/images/logos/microsoft.png";
import pwLogo from "../../assets/images/logos/physicswallah.png";

const investors = [
  { alt: "Amazon.in", src: amazonLogo },
  { alt: "Google", src: googleLogo },
  { alt: "Microsoft", src: microsoftLogo },
  { alt: "Physics Wallah", src: pwLogo },
];

const LeadingInvestors = () => (
  <section className="space-top bg-gradient-to-b from-white to-[#dbeefa] pb-8">
    <div className="container">
      <h3 className="text-2xl md:text-3xl font-semibold text-webprimary mb-2">
        Trusted by Leading Investors
      </h3>
      <p className="text-gray-700 text-base md:text-lg mb-6">
        We're proud to be backed by visionary investors who believe in our mission
      </p>
      <div className="flex flex-wrap gap-x-10 gap-y-6 items-center justify-center">
        {investors.map((item) => (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            className="h-10 md:h-12 object-contain"
            style={item.alt === "Physics Wallah" ? { height: "44px" } : {}}
          />
        ))}
      </div>
    </div>
  </section>
);

export default LeadingInvestors;
