import React from "react";
const Carousel = React.lazy(() => import("react-multi-carousel"));
import "react-multi-carousel/lib/styles.css";
import team1 from "../../assets/images/home/team1.png"; // Placeholder
import team2 from "../../assets/images/home/team2.png"; // Placeholder
import team3 from "../../assets/images/home/team1.png"; // Placeholder
import { Link } from "react-router-dom";
import ThemeButton from "../UI/ThemeButton";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
  FaRegHeart,
  FaSortAmountDown,
} from "react-icons/fa";
import { IoOptionsOutline } from "react-icons/io5";

const exhibitionsData = [
  {
    id: 1,
    title: "Lucknow Expo Center",
    location: "Lucknow City Center, Uttar Pradesh",
    date: "12/11/2025 - 10/12/2025",
    activeEvents: "12+ Active Events",
    category: "Art & Craft Mela",
    desc: "A perfect mix of tech & local Knowledge, vibrant energy, and live experiment.",
    image: team1,
    type: "Physical Exhibitions",
  },
  {
    id: 2,
    title: "Lucknow Expo Center",
    location: "Lucknow City Center, Uttar Pradesh",
    date: "12/11/2025 - 10/12/2025",
    activeEvents: "12+ Active Events",
    category: "Art & Craft Mela",
    desc: "A perfect mix of tech & local Knowledge, vibrant energy, and live experiment.",
    image: team2,
    type: "Virtual Exhibitions",
  },
  {
    id: 3,
    title: "Lucknow Expo Center",
    location: "Lucknow City Center, Uttar Pradesh",
    date: "12/11/2025 - 10/12/2025",
    activeEvents: "12+ Active Events",
    category: "Art & Craft Mela",
    desc: "A perfect mix of tech & local Knowledge, vibrant energy, and live experiment.",
    image: team3,
    type: "Physical Exhibitions",
  },
  {
    id: 4,
    title: "Lucknow Expo Center",
    location: "Lucknow City Center, Uttar Pradesh",
    date: "12/11/2025 - 10/12/2025",
    activeEvents: "12+ Active Events",
    category: "Art & Craft Mela",
    desc: "A perfect mix of tech & local Knowledge, vibrant energy, and live experiment.",
    image: team1,
    type: "Virtual Exhibitions",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 24,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 16,
  },
};

const UpcomingExhibitions = () => (
  <section className="space-top">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8">
        <h3 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          Our Upcoming <span className="text-webprimary font-sourcePro">Exhibitions</span>
        </h3>
        <button className="flex items-center gap-2 text-black font-semibold text-lg mt-4 md:mt-0">
          <IoOptionsOutline className="text-xl" /> Sort By
        </button>
      </div>

      <Carousel
        responsive={responsive}
        infinite
        keyBoardControl
        swipeable
        draggable
        showDots={false}
        containerClass="pt-2 pb-2 md:pb-0 "
        itemClass="pe-3"
        arrows={false}
        renderButtonGroupOutside={false}
        partialVisible={true}
      >
        {exhibitionsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative h-56 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Type Tag */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded text-sm font-medium text-white ${item.type === "Physical Exhibitions"
                    ? "bg-[#5992b9]/90"
                    : "bg-gray-500/90"
                    }`}
                >
                  {item.type}
                </span>
              </div>
              {/* Heart Icon */}
              <div className="absolute top-4 right-4">
                <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                  <FaRegHeart />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex-grow flex flex-col">
              <h4 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h4>

              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <FaCalendarAlt className="flex-shrink-0" />
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="mb-3">
                <h5 className="font-bold text-black text-sm mb-2">Events Details</h5>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 list-disc list-inside">
                  <li>{item.activeEvents}</li>
                  <li>{item.category}</li>
                </ul>
              </div>

              <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                {item.desc}
              </p>

              <Link to="/exhibitions/details" className="mt-auto">
                <ThemeButton variant="fill" className="w-full rounded-lg py-3">
                  Explore Exhibitions
                </ThemeButton>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </section>
);

export default UpcomingExhibitions;
