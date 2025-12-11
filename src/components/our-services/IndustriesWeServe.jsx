import React from "react";

// Example image imports — replace these with your actual asset paths
import hospitalIcon from "../../assets/images/services/industry1.png";
import pharmaIcon from "../../assets/images/services/industry2.png";
import deviceIcon from "../../assets/images/services/industry3.png";
import insuranceIcon from "../../assets/images/services/industry4.png";
import agencyIcon from "../../assets/images/services/industry5.png";
import researchIcon from "../../assets/images/services/industry6.png";

const industries = [
  {
    label: "Hospitals & Health Systems",
    icon: hospitalIcon,
  },
  {
    label: "Pharmaceutical Companies",
    icon: pharmaIcon,
  },
  {
    label: "Medical Device Manufacturers",
    icon: deviceIcon,
  },
  {
    label: "Insurance Companies",
    icon: insuranceIcon,
  },
  {
    label: "Government Health Agencies",
    icon: agencyIcon,
  },
  {
    label: "Research Institutions",
    icon: researchIcon,
  },
];

const IndustriesWeServe = () => (
  <section className="space-top ">
    <div className="container">
      <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2">
        Industries We Serve
      </h3>
      <p className="text-gray-700 text-base md:text-lg mb-8">
        Our solutions serve diverse healthcare stakeholders across multiple industries.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {industries.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-lg shadow-md border border-gray-100 flex flex-col items-center p-4 hover:shadow-lg transition-all duration-200"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-14 h-14 mb-3 object-contain"
            />
            <div className="text-webprimary text-center font-semibold text-base md:text-lg leading-tight">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesWeServe;
