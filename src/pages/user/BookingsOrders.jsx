import React, { useState } from 'react';
import { MdOutlineLocationOn, MdKeyboardBackspace } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import ScrollTopAtuo from '../../components/common/ScrollTopAtuo';

const BookingsOrders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('booking');

  const bookings = [
    {
      id: 1,
      title: "Lucknow Expo Center",
      date: "12/11/2025 - 10/12/2025",
      location: "Lucknow City Center, Uttar Pradesh",
      price: "₹35,000",
      bookedOn: "07 Nov 2025",
      status: "Confirmed",
      hasBoothDetails: false,
      qrCode: "dummy-qr"
    },
    {
      id: 2,
      title: "Lucknow Expo Center",
      date: "12/11/2025 - 10/12/2025",
      location: "Lucknow City Center, Uttar Pradesh",
      price: "₹35,000",
      bookedOn: "07 Nov 2025",
      status: "Confirmed",
      hasBoothDetails: true,
      boothNo: "01",
      boothId: "Booth #A-102",
      bookedFor: "2 Days",
      qrCode: "dummy-qr"
    },
    {
      id: 3,
      title: "Lucknow Expo Center",
      date: "12/11/2025 - 10/12/2025",
      location: "Lucknow City Center, Uttar Pradesh",
      price: "₹35,000",
      bookedOn: "07 Nov 2025",
      status: "Confirmed",
      hasBoothDetails: false,
      qrCode: "dummy-qr"
    }
  ];

  // Placeholder data for Orders tab
  const orders = [];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <ScrollTopAtuo />
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden p-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button onClick={() => navigate(-1)} className="hover:bg-gray-100 p-2 rounded-full transition-colors">
              <MdKeyboardBackspace className="text-2xl" />
            </button>
            <h1 className="text-2xl font-bold font-serif">Booking/Order</h1>
          </div>

          {/* Toggle Button */}
          <div className="bg-[#0b5ed7] text-white rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-8 py-2 rounded-md font-medium transition-all ${activeTab === 'booking' ? 'bg-[#094bb3] shadow-inner' : 'hover:bg-[#0d6efd]'}`}
            >
              Booking
            </button>
            <button
              onClick={() => setActiveTab('order')}
              className={`px-8 py-2 rounded-md font-medium transition-all ${activeTab === 'order' ? 'bg-[#094bb3] shadow-inner' : 'hover:bg-[#0d6efd]'}`}
            >
              Order
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="space-y-6">
          {activeTab === 'booking' && bookings.map((item) => (
            <div key={item.id} className="bg-[#f0f7ff] rounded-xl p-6 border border-blue-50">
              <div className="flex flex-col md:flex-row justify-between gap-6">

                {/* Left Content */}
                <div className="flex-grow space-y-3">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold font-serif">{item.title}</h2>
                    {/* Mobile Direction Link */}
                    <a href="#" className="md:hidden flex items-center text-[#0b5ed7] font-bold text-sm whitespace-nowrap">
                      <MdOutlineLocationOn className="text-lg mr-1" />
                      Get Directions
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <FaRegCalendarAlt />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdOutlineLocationOn className="text-lg" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Price and Status Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-8 text-sm md:text-base mt-2">
                    <div className="font-bold text-gray-800">{item.price}</div>
                    <div className="text-gray-600"><span className="font-semibold text-gray-800">Booked On:</span> {item.bookedOn}</div>
                    <div className="text-gray-600"><span className="font-semibold text-gray-800">Status:</span> <span className="text-[#0b5ed7] font-bold">{item.status}</span></div>
                  </div>

                  {/* Extra Details if available */}
                  {item.hasBoothDetails && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-8 text-sm md:text-base mt-2">
                      <div className="text-gray-600"><span className="font-semibold text-gray-800">Booths No. :</span> {item.boothNo}</div>
                      <div className="text-gray-600"><span className="font-semibold text-gray-800">Booth ID :</span> {item.boothId}</div>
                      <div className="text-gray-600"><span className="font-semibold text-gray-800">Booked For :</span> {item.bookedFor}</div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-4 mt-6 pt-2">
                    <button className="bg-[#0b5ed7] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md transition-colors">
                      Need Help
                    </button>
                    <button className="bg-transparent border border-[#0b5ed7] text-[#0b5ed7] hover:bg-blue-50 font-bold py-2 px-8 rounded-md transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Right Content - QR Code */}
                <div className="flex flex-col items-center justify-between min-w-[120px]">
                  <a href="#" className="hidden md:flex items-center text-[#0b5ed7] font-bold text-sm hover:underline mb-4 self-end">
                    <MdOutlineLocationOn className="text-lg mr-1" />
                    Get Directions
                  </a>

                  <div className="flex flex-col items-center mt-auto">
                    <BsQrCode className="text-8xl text-black mb-1" />
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest">#ZE26562656ZXPO</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {activeTab === 'order' && (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <h3 className="text-xl font-bold text-gray-400">No Orders Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsOrders;
