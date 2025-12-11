import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/images/about/about1.png'

const OurStory = () => {
  return (
    <>
      <section className="space-top">
        <div className="container">
          <div className="flex md:flex-row flex-col gap-8 items-center">
            {/* Left Image Section */}
            <div className="md:w-1/2 flex md:justify-center">
              <img
                src={image}
                alt="our story"
                className="w-full max-h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            {/* Right Text Section */}
            <div className="md:w-1/2">
              <div className="mb-2">
                <div className="mb-5">

                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-3 leading-snug">
                OUR STORY
              </h3>
              <p className="text-para text-base md:text-lg mb-4">
                Founded in 2020, Zeniverse Ventures emerged from a vision to revolutionize healthcare through technology. Our journey began with a simple yet powerful belief: that innovation can transform lives and create a healthier world for everyone.
              </p>
              <p className="text-para text-base md:text-lg mb-4">
                Today, we stand as a leading force in healthcare technology, digital health solutions, and social impact initiatives. Our diverse portfolio spans from AI-powered medical diagnostics to community empowerment programs, all united by our commitment to positive change.
              </p>
              <p className="text-para text-base md:text-lg mb-4">
                We've grown from a small startup to a global organization, but our core values remain unchanged: innovation, excellence, integrity, and impact.
              </p>
              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-4 mb-6 md:border border-gray-200 py-2 rounded-md">
                <div className="md:text-center md:border-r md:border-gray-200">
                  <div className="text-black  text-3xl font-bold italic">
                    20<span className="text-xl">+</span>
                  </div>
                  <div className="text-base text-gray-600">Year of Experience</div>
                </div>
                <div className="md:text-center  md:border-r md:border-gray-200">
                  <div className="text-black  text-3xl font-bold italic">
                    12<span className="text-xl">+</span>
                  </div>
                  <div className="text-base text-gray-600">Working Partner</div>
                </div>
                <div className="md:text-center ">
                  <div className="text-black  text-3xl font-bold italic">
                    1k<span className="text-xl">+</span>
                  </div>
                  <div className="text-base text-gray-600">Project Complete</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default OurStory
