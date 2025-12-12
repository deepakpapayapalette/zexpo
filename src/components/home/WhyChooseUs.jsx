import React from "react";
import {
  FaBriefcase,
  FaRegClock,
  FaRegCommentDots,
  FaGlassCheers,
} from "react-icons/fa";
import image1 from "../../assets/images/home/choose-us1.png"; // Placeholder
import image2 from "../../assets/images/home/choose-us2.png"; // Placeholder

const features = [
  {
    id: 1,
    type: "card",
    icon: <FaGlassCheers />,
    title: "One Platform, Endless Experiences",
    desc: "From Exhibitions to cultural fairs, wellness retreats to trade expos — explore everything happening around you, all in one place.",
  },
  {
    id: 2,
    type: "card",
    icon: <FaBriefcase />,
    title: "Empowering Organizers & Vendors",
    desc: "Promote your events, reach more audiences, and grow your presence with Zexpo’s marketing support and visibility tools.",
  },
  {
    id: 3,
    type: "image",
    src: image1,
    alt: "Futuristic Exhibition Hall",
  },
  {
    id: 4,
    type: "image",
    src: image2,
    alt: "Art Gallery",
  },
  {
    id: 5,
    type: "card",
    icon: <FaRegClock />,
    title: "Discover Local Vibes Instantly",
    desc: "No need to search across platforms. Find trending Exhibitions, local favorites, and hidden gems with a single tap.",
  },
  {
    id: 6,
    type: "card",
    icon: <FaRegCommentDots />,
    title: "Built for Connection & Celebration",
    desc: "Whether you’re attending, exploring, or hosting — Zexpo makes every moment engaging, interactive, and unforgettable.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="space-top container mb-12">
      <h2 className="text-4xl md:text-5xl font-semibold text-black mb-10">
        Why Choose <span className="text-webprimary font-sourcePro">ZEXPO</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {features.map((feature) =>
          feature.type === "card" ? (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col items-start hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-webprimary text-xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ) : (
            <div
              key={feature.id}
              className="rounded-xl overflow-hidden shadow-sm h-full min-h-[240px]"
            >
              <img
                src={feature.src}
                alt={feature.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
