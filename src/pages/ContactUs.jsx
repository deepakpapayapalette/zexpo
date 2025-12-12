import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Banner from '../components/common/Banner'; // Assuming this exists, keeping it.
import ScrollTopAtuo from '../components/common/ScrollTopAtuo'; // Keeping as per original
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaDiscord, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa"; // Adjusted icons to match design feeling
import { MdOutlineEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";


const ContactUs = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const bannerContent = {
    title: "Contact Us",
    description: "Get in touch with us to learn, collaborate, or partner."
  }

  // --- Validation Schema ---
  const contactSchema = Yup.object({
    firstName: Yup.string().min(2).max(30).required('First Name is required'),
    lastName: Yup.string().min(2).max(30).required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits').required('Phone number is required'),
    subject: Yup.string().required('Please select a subject'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry', // Default value
    message: '',
  };

  const { handleSubmit, values, handleChange, errors, touched, handleBlur, setFieldValue } = useFormik({
    validationSchema: contactSchema,
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      alert(JSON.stringify(values, null, 2)); // Feedback for the user for now
      resetForm();
    }
  });

  const subjects = [
    "General Inquiry",
    "Support", // Changed slightly for variety, or can keep repeating as per design lol
    "Partnership",
    "Other"
  ]


  return (
    <>
      <ScrollTopAtuo />
      <Banner data={bannerContent} />

      <section className="py-16 bg-white flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-6xl flex flex-col md:flex-row min-h-[600px]">

          {/* --- Left Sidebar (Contact Info) --- */}
          <div className="bg-[#000000] text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-[#2d2d2d] rounded-full opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-10 -right-10 w-28 h-28 bg-[#3d3d3d] rounded-full opacity-50 pointer-events-none"></div>

            <div className='relative z-10'>
              <h2 className="text-3xl font-semibold mb-2">Contact Information</h2>
              <p className="text-gray-400 mb-12 text-lg">Say something to start a live chat!</p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <MdLocalPhone className="text-2xl" />
                  <span className="text-lg">+1012 3456 789</span>
                </div>
                <div className="flex items-center gap-4">
                  <MdOutlineEmail className="text-2xl" />
                  <span className="text-lg">demo@gmail.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MdLocationOn className="text-2xl mt-1" />
                  <span className="text-lg leading-relaxed">
                    132 Dartmouth Street Boston,<br />
                    Massachusetts 02156 United States
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12 relative z-10 text-white">
              <a href="#" className="w-10 h-10 rounded-full bg-[#1b1b1b] hover:bg-webprimary flex items-center justify-center transition-colors">
                <FaTwitter className='text-lg' />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1b1b1b] hover:bg-webprimary flex items-center justify-center transition-colors">
                <FaInstagram className='text-lg' />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#1b1b1b] hover:bg-webprimary flex items-center justify-center transition-colors">
                <FaDiscord className='text-lg' />
              </a>
            </div>
          </div>

          {/* --- Right Side (Form) --- */}
          <div className="p-10 md:w-3/5 bg-white relative">
            <form onSubmit={handleSubmit} className='flex flex-col h-full justify-between'>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* First Name */}
                <div className="relative">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jack" // Placeholder like design
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-800"
                  />
                  {touched.firstName && errors.firstName && <p className="text-red-500 text-xs mt-1 absolute">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div className="relative">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-800"
                  />
                  {touched.lastName && errors.lastName && <p className="text-red-500 text-xs mt-1 absolute">{errors.lastName}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="raravi209@gmail.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-800"
                  />
                  {touched.email && errors.email && <p className="text-red-500 text-xs mt-1 absolute">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1 012 3456 789"
                    maxLength={10}
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-800"
                  />
                  {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1 absolute">{errors.phone}</p>}
                </div>
              </div>

              {/* Subject Selection */}
              <div className="mb-10">
                <label className="text-sm font-bold text-black mb-4 block">Select Subject?</label>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {subjects.map((subj, idx) => (
                    <label key={idx} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="subject"
                        value={subj}
                        checked={values.subject === subj}
                        onChange={handleChange}
                        className="peer sr-only"
                      />
                      <div className="w-4 h-4 rounded-full border border-gray-400 mr-2 flex items-center justify-center peer-checked:bg-black peer-checked:border-black">
                        <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <span className="text-sm text-gray-700">{subj}</span>
                    </label>
                  ))}
                </div>
                {touched.subject && errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div className="mb-8 relative">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Message</label>
                <textarea
                  name="message"
                  rows="1" // Minimal height initially, looks like an input line
                  placeholder="Write your message.."
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400 resize-none"
                ></textarea>
                {touched.message && errors.message && <p className="text-red-500 text-xs mt-1 absolute">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#0056b3] text-white px-10 py-3 rounded-md font-medium text-lg shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
                {/* Note: In the image it is a solid blue button. #0056b3 is a close match to the 'Send Message' button in the image */}
              </div>

            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default ContactUs
