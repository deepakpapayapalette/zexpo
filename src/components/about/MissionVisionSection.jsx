import React from "react";
import { Globe2, Power } from "lucide-react"; // lucide-react icons

// Update with your image paths
import MissionImg from "../../assets/images/about/mission.png";
import VisionImg from "../../assets/images/about/about3.png";

const MissionVisionSection = () => {
  return (
    <section className="space-top ">
      <div className="bg-webprimary text-white">
        <div className="container md:py-12 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mission Card */}
            <div className=" ">
              <div className="mb-8">
                <h3 className="text-2xl md:text-5xl font-semibold text-white mb-3">Our Mission</h3>


                <p className=" text-lg">
                  Our mission is to bridge the gap between local experiences and global audiences, empowering organizers, vendors, and creators to shine on one shared stage — their city.
                </p>
              </div>
              <div>
                <img
                  src={MissionImg}
                  alt="Mission"
                  className="rounded-xl shadow-sm w-full object-cover max-h-[500px]"
                />
              </div>
              <p className=" text-lg pt-8">
                Every event is a story, every story is an experience, and every experience is worth sharing. It’s not just about attending an event; it’s about living the experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container space-top">
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Vision image */}
          <div className="md:w-1/3 flex items-center ">
            <img
              src={VisionImg}
              alt="Vision"
              className="rounded-xl shadow-sm w-full object-cover max-h-full"
            />
          </div>
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-sm md:p-8 p-2 md:w-2/3 flex flex-col justify-center ">
            <div className="mb-4">
              <h3 className="text-2xl md:text-5xl font-semibold text-black mb-4 leading-tight">
                OUR
                <span className="text-webprimary font-sourcePro">VISION</span>
              </h3>
              <p className="text-para pb-4">
                Our vision is simple — to make every city’s story visible to the world. To help communities showcase their culture, empower small businesses, and inspire people to step out, explore, and connect again.
              </p>
              <p className="text-para">
                Whether you’re an event organizer seeking a platform, a local vendor looking for recognition, or someone simply searching for where to go next weekend — Zexpo is where your journey begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
