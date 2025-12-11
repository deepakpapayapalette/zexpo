import React from "react";
import aboutImage from "../../assets/images/home/about-intro.png";
import { Link } from "react-router-dom";
import ThemeButton from "../UI/ThemeButton";


const AboutUsIntro = () => {
  return (
    <section className="space-top">
      <div className="container">
        {/* Main Content: Text Left, Image Right */}
        <div className="flex md:flex-row flex-col gap-8 items-center mb-12">
          {/* Left Text Section */}
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-5xl font-semibold text-black mb-4 leading-tight">
              Experience Exhibitions <br />
              <span className="text-webprimary font-sourcePro">That Inspire.</span>
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              At Zexpo, we bring together creativity, culture, and commerce under
              one roof. Our platform is designed to connect people through
              inspiring exhibitions, dynamic showcases, and meaningful
              experiences. From art and lifestyle expos to trade fairs and
              cultural events, Zexpo celebrates the diversity of industries,
              ideas, and innovation.
            </p>
            <Link to="/about">
              <ThemeButton variant="fill">Read More</ThemeButton>
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="Experience Exhibitions That Inspire"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Stats Section (Bottom) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <h4 className="text-3xl md:text-4xl font-bold text-black mb-2">
                12K+
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Happy Customers
              </p>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <h4 className="text-3xl md:text-4xl font-bold text-black mb-2">
                120+
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Events Per Day
              </p>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <h4 className="text-3xl md:text-4xl font-bold text-black mb-2">
                50+
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Cities Covered
              </p>
            </div>
            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <h4 className="text-3xl md:text-4xl font-bold text-black mb-2">
                12+
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Business Exhibitors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntro;
