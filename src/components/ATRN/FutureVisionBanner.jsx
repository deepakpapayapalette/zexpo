import React from "react";
import img1 from "../../assets/images/logos/img5.png";
const FutureVisionBanner = () => {
  return (
    <section className="space-top container">
      <div className="">
        <div className="flex  relative rounded-2xl overflow-hidden shadow-md  flex-col lg:flex-row">

          {/* Left Content */}
          <div className="  bg-webprimary text-white p-6 lg:p-10 flex flex-col justify-center lg:w-2/5 ps-6 py-6  z-[50]">
            <div className=" lg:absolute left-12 lg:max-w-[600px]  bg-white rounded-md p-6">
              <h2 className="text-2xl lg:text-4xl font-semibold mb-4 leading-snug text-black">
                Future Vision – Building a Smarter Tomorrow
              </h2>
              <p className="text-sm lg:text-lg text-para mb-6">
                At AETURN, our vision goes beyond technology. We aim to create
                AI-powered, future-ready innovations that transform healthcare,
                safety, tourism, and skill development. Our focus is on Actionable
                Intelligence — AI that doesn’t just predict but enables real-world
                impact.
              </p>
              <button className="theme-btn-fill transition">
                Join the Innovation Journey
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-3/5 w-full z-0">
            <img
              src={img1} // replace with your actual image path
              alt="Future Vision AI"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVisionBanner;
