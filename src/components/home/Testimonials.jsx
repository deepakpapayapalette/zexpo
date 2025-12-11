import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function CustomerTestimonial() {
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Dr. Riya",
      title: "Senior Cardiologist, Apollo Hospitals",
      feedback:
        "AETURN EMR has streamlined our hospital operations and made patient management effortless. – Healthcare Administrator",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Dr. Riya",
      title: "Senior Cardiologist, Apollo Hospitals",
      feedback:
        "AETURN EMR has streamlined our hospital operations and made patient management effortless. – Healthcare Administrator",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Dr. Riya",
      title: "Senior Cardiologist, Apollo Hospitals",
      feedback:
        "AETURN EMR has streamlined our hospital operations and made patient management effortless. – Healthcare Administrator",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 4,
      name: "Dr. Riya",
      title: "Senior Cardiologist, Apollo Hospitals",
      feedback:
        "AETURN EMR has streamlined our hospital operations and made patient management effortless. – Healthcare Administrator",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="space-top ">
      <div className="container">
        <div className="mb-6">
          <h3 className="text-4xl md:text-5xl font-semibold mb-2 leading-tight">
            Our  <span className="text-webprimary font-sourcePro">Customer</span>  Testimonials
          </h3>

          <div className="relative  min-h-[330px]">
            <Slider {...settings}>
              {testimonials.map((item, index) => {
                const isActive = index === activeSlide;
                return (
                  <div key={index} className="md:px-3 px-6 transition-all duration-500 md:py-6 py-8 current-element" >
                    <div
                      className={`bg-white rounded-xl  hover:shadow-lg border border-gray-300 p-6 flex flex-col items-center transition-all duration-500 ${isActive
                        ? "scale-105  "
                        : "scale-95 py-6 blur-[2px]"
                        }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`rounded-full border-4 border-white shadow-md object-cover transition-all duration-500 ${isActive ? "w-24 h-24 mt-[-10px]" : "w-20 h-20"
                          }`}
                      />
                      <h3 className="text-webprimary font-semibold text-lg mt-4 mb-2">
                        I Really Appreciated
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 px-3">
                        {item.feedback}
                      </p>
                      <h4 className="text-webprimary font-semibold">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -bottom-10 left-1/2 transform translate-x-8 cursor-pointer bg-white shadow-md rounded-full p-3 hover:bg-webprimary hover:text-white transition"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -bottom-10 left-1/2 transform -translate-x-12 cursor-pointer bg-white shadow-md rounded-full p-3 hover:bg-blue-700 hover:text-white transition"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}
