import React, { useState } from 'react'
import { FaPlug, FaDatabase, FaUserClock, FaHourglassHalf } from 'react-icons/fa';
import { Unplug, Database, UserX, Clock } from 'lucide-react';
import banerImage from "../assets/images/news/news-detail2.png"
import banerImage2 from "../assets/images/news/news-detail.png"
import { Link } from 'react-router-dom'
import InnovationCard from '../components/reusable/InnovationCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FAQSection from '../components/contact/FAQSection';
import ScrollTopAtuo from '../components/common/ScrollTopAtuo';


const healthcareChallenges = [
  {
    id: 1,
    title: "Disconnected Systems",
    description: "Multiple tools, scattered data, and inefficient workflows.",
    lookup_value: "disconnected-systems",
    reactIcon: FaPlug,
    icon: Unplug,
    iconColor: "#EF4444",
    isMainHeading: true
  },
  {
    id: 2,
    title: "Data Overload & Silos",
    description: "Hard to access and analyze patient and operational information.",
    lookup_value: "data-overload-silos",
    reactIcon: FaDatabase,
    icon: Database,
    iconColor: "#3B82F6",
    isMainHeading: false
  },
  {
    id: 3,
    title: "Low Patient Engagement",
    description: "Patients struggle to view records, appointments, and communicate effectively.",
    lookup_value: "low-patient-engagement",
    reactIcon: FaUserClock,
    icon: UserX,
    iconColor: "#F59E0B",
    isMainHeading: false
  },
  {
    id: 4,
    title: "Time-Consuming Processes",
    description: "Administrative and clinical tasks take up valuable time, slowing care.",
    lookup_value: "time-consuming-processes",
    reactIcon: FaHourglassHalf,
    icon: Clock,
    iconColor: "#8B5CF6",
    isMainHeading: false
  }
];

const healthcareSolutions = [
  {
    title: "Patient-Centric Solutions",
    items: [
      "Patient Portal",
      "Telehealth Module",
      "Mobile App",
      "Appointment Reminders",
      "Feedback & Surveys",
    ],
  },
  {
    title: "Administrative & Management Solutions",
    items: [
      "Hospital Management System (HMS)",
      "Appointment & Scheduling Tools",
      "Billing & Insurance Automation",
      "Patient Portal & Engagement",
      "Analytics & Reporting",
    ],
  },
  {
    title: "Designed for Every Healthcare Environment",
    items: [
      "Hospitals",
      "Clinics",
      "Diagnostic Centers",
      "Telemedicine Providers",
      "Research Institutes",
    ],
  },
];

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


const AeturnEMR = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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

     React.useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);


  return (
    <>
      <ScrollTopAtuo />
      <div className='container md:pt-10 pt-8'>
        <div>
          <h2 className='text-2xl md:text-4xl text-webprimary mb-5'>AeturnEMR</h2>
          <div className='w-full rounded-lg overflow-hidden mb-4'>

            <img src={banerImage} alt="banner image" className='w-full h-auto' />
          </div>

          <h2 className='text-2xl md:text-3xl text-webprimary mb-3'>Project Overview</h2>
          <p className='text-para mb-4'>
            AETURN EMR offers a fully integrated suite of healthcare solutions that seamlessly connect every aspect of care delivery — from electronic medical records and hospital management to patient engagement, telemedicine, and advanced analytics. Designed for efficiency and scalability, our platform empowers healthcare providers to streamline workflows, enhance patient experiences, and make data-driven decisions with confidence.
          </p>
          <Link to="">
            <button className='theme-btn-fill'>Explore AETURN EMR</button>
          </Link>
        </div>
      </div>
      <div className='container space-top'>
        <div>
          <h2 className='text-2xl md:text-4xl text-webprimary mb-5'>Challenges We Have</h2>
          <div className='grid sm:grid-cols-2  gap-6 md:grid-cols-4 '>
            {healthcareChallenges.map((item) => (
              <InnovationCard key={item.id} card={item} />
            ))}
          </div>

        </div>
      </div>
      <div className='container space-top'>
        <div>
          <h2 className='text-2xl md:text-4xl text-webprimary mb-5'>Turning Challenges into Solutions</h2>
          <div className='grid sm:grid-cols-2  gap-6 md:grid-cols-3 '>
            {healthcareSolutions.map((card, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold text-webprimary mb-3">{card.title}</h3>
                <ul className="space-y-1">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-gray-700">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>
      </div>
      <div className='container space-top'>
        <div className='w-full rounded-lg overflow-hidden mb-4'>

          <img src={banerImage2} alt="banner image" className='w-full h-auto' />
        </div>

      </div>
      <div className='container space-top'>
        <div className='pb-6'>
          <h2 className="text-3xl font-semibold text-webprimary mb-2">
            What User Say
          </h2>
          <div className="relative  ">
            <Slider {...settings}>
              {testimonials.map((item, index) => {
                const isActive = index === activeSlide;
                return (
                  <div key={index} className="md:px-3 px-6 transition-all duration-500 md:py-6 py-8 current-element" >
                    <div
                      className={`bg-white rounded-xl shadow-md hover:shadow-lg border-b-4 border-orange-400 p-6 flex flex-col items-center transition-all duration-500 ${isActive
                        ? "scale-105  "
                        : "scale-95 opacity-80 py-6"
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
      <div className='container space-top'>
        <div>

          <FAQSection />
        </div>

      </div>

    </>
  )
}

export default AeturnEMR;


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

