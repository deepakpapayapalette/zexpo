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
import ExCard from "../UI/ExCard";
import { exhibitionsData } from "../../data/LocalData";



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

const ExhibitionsNearYou = () => (
  <section className="space-top">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8">
        <h3 className="md:text-5xl text-3xl font-semibold text-black leading-tight">
          Exhibitions  <span className="text-webprimary font-sourcePro">Near You</span>
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
            
          >
            <ExCard item={item} />

    </div>
        ))}
  </Carousel>
    </div >
  </section >
);

export default ExhibitionsNearYou;
