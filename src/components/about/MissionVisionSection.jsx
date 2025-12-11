import React from "react";
import { Globe2, Power } from "lucide-react"; // lucide-react icons

// Update with your image paths
import MissionImg from "../../assets/images/about/about2.png";
import VisionImg from "../../assets/images/about/about3.png";

const MissionVisionSection = () => {
  return (
    <section className="space-top bg-gradient-to-b from-transparent to-[#dbeefa]">
      <div className="container md:pb-12 pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:w-2/3 flex flex-col justify-center">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-gray-200 rounded-full mb-2 ">

                <Globe2 className="text-webprimary w-12 h-12 " />
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-3">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To democratize healthcare through innovative technology solutions, making quality medical care accessible to everyone, everywhere. We strive to bridge the gap between advanced healthcare and underserved communities.
              </p>
            </div>
          </div>
          {/* Mission image */}
          <div className="md:w-1/3 flex items-center">
            <img
              src={MissionImg}
              alt="Mission"
              className="rounded-xl shadow-sm w-full object-cover max-h-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Vision image */}
          <div className="md:w-1/3 flex items-center order-2 md:order-1">
            <img
              src={VisionImg}
              alt="Vision"
              className="rounded-xl shadow-sm w-full object-cover max-h-full"
            />
          </div>
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:w-2/3 flex flex-col justify-center order-1 md:order-2">
            <div className="mb-4">
              <div className="inline-flex p-3 bg-gray-200 rounded-full mb-2 ">
                <Power className="text-webprimary w-12 h-12" />
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-3">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To create a world where healthcare knows no boundaries, where technology empowers both patients and providers, and where innovation drives positive social impact for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
