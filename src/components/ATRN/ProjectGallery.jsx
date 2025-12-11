import React from "react";

// Replace with your image asset imports or URLs
import smartWorldImg from "../../assets/images/logos/img1.png";
import img2 from "../../assets/images/logos/img2.png";
import tourismImg from "../../assets/images/logos/img3.png";
import zendriveImg from "../../assets/images/logos/img4.png";

const galleryImages = [
  { alt: "Smart World", src: smartWorldImg },
  { alt: "Image 2", src: img2 },
  { alt: "Tourism", src: tourismImg },
  { alt: "Zendrive", src: zendriveImg },
]
const ProjectGallery = () => (
  <section className="space-top bg-white">
    <div className="container">
      <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-4">Project Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-card border border-gray-100 flex flex-col items-center p-4 hover:shadow-xl transition-all duration-200"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full mb-3 object-contain"
            />
            {/* <div className="text-webprimary text-center font-semibold text-base md:text-lg leading-tight">
              {image.alt}
            </div> */}
          </div>
        ))}

      </div>
    </div>
  </section>
);

export default ProjectGallery;
