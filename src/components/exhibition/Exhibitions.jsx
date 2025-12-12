import React from "react";
import physicalExhibitionImg from "../../assets/images/services/e1.png";
import virtualExhibitionImg from "../../assets/images/services/e2.png";
import { Link } from "react-router-dom";

const Exhibitions = () => {
  return (
    <div className="container space-top">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Physical Exhibition Card */}
        <div className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer">
          <Link to="/exhibition/physical">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${physicalExhibitionImg})` }}
            ></div>
            <div className="absolute inset-0 bg-black/80 transition-opacity duration-300 group-hover:bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white font-serif text-center px-4">
                Physical Exhibition
              </h3>
            </div>
          </Link>
        </div>

        {/* Virtual Exhibition Card */}
        <div className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer">
          <Link to="/exhibition/virtual">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${virtualExhibitionImg})` }}
            ></div>
            <div className="absolute inset-0 bg-black/80 transition-opacity duration-300 group-hover:bg-black/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl md:text-5xl font-bold text-white font-serif text-center px-4">
                Virtual Exhibition
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
