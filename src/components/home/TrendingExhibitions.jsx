import React from "react";
import imageLeft from "../../assets/images/home/trending-exhibitions.png";
import aeturn from "../../assets/images/home/trending-exhibitions2.png";
import { Link } from "react-router-dom";
import ThemeButton from "../UI/ThemeButton";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const TrendingExhibitions = () => {
  const exhibitions = [
    {
      id: 1,
      image: aeturn, // Using aeturn as placeholder for Lucknow
      title: "Lucknow Science Expo Centre",
      location: "Lucknow City Center, Uttar Pradesh",
      date: "12/11/2025 - 10/12/2025",
      activeEvents: "18+ Active Events",
      category: "Science & Tech Mela",
      description:
        "A perfect mix of technology & local Student Knowledge, vibrant energy, and live experiment.",
      link: "/exhibitions/lucknow",
    },
    {
      id: 2,
      image: imageLeft, // Using imageLeft as placeholder for Pragati Maidan
      title: "Pragati Maidan Arts Events",
      location: "Delhi, New Delhi",
      date: "12/11/2025 - 10/12/2025",
      activeEvents: "18+ Active Events",
      category: "Arts & Craft Mela",
      description:
        "A perfect example of local people traditionally Craft, vibrant energy, and Arts & Craft Products.",
      link: "/exhibitions/delhi",
    },
  ];

  return (
    <section className="space-top container mb-12">
      <div className="">
        <h2 className="text-5xl mb-8 font-semibold text-black">
          Our Trending <span className="text-webprimary font-sourcePro">Exhibitions</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {exhibitions.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
            >
              {/* Top Image Section */}
              <div className="relative h-64 md:h-80 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-1 text-sm md:text-base text-gray-200">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Content Section */}
              <div className="bg-black text-white p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold mb-3">Events Details</h4>
                  <ul className="flex flex-wrap gap-4 text-sm md:text-base mb-4 list-disc list-inside text-gray-300">
                    <li>{item.activeEvents}</li>
                    <li>{item.category}</li>
                  </ul>
                  <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div>
                  <Link to={item.link}>
                    <ThemeButton variant="fill" className="w-full md:w-auto">
                      Explore Exhibitions
                    </ThemeButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingExhibitions;

