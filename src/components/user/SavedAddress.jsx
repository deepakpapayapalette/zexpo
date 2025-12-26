import React, { useState } from 'react';
import { MdKeyboardBackspace, MdAdd, MdDeleteOutline, MdEdit, MdHome, MdWork, MdLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import ScrollTopAtuo from '../common/ScrollTopAtuo';
import ThemeButton from '../UI/ThemeButton';

const SavedAddress = () => {
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      name: "Vipin Agrahari",
      mobile: "+91 9876543210",
      address: "123, Palm Heights, Sector 14",
      locality: "Indira Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226016",
      isDefault: true
    },
    {
      id: 2,
      type: "Work",
      name: "Vipin Agrahari",
      mobile: "+91 9876543210",
      address: "Office No. 405, Cyber Tower",
      locality: "Gomti Nagar",
      city: "Lucknow",
      state: "Uttar Pradesh",
      pincode: "226010",
      isDefault: false
    }
  ]);

  const getIcon = (type) => {
    switch (type) {
      case 'Home': return <MdHome />;
      case 'Work': return <MdWork />;
      default: return <MdLocationOn />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <ScrollTopAtuo />
      <div className="max-w-3xl mx-auto text-left">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-200 bg-white rounded-full transition-colors text-gray-600 shadow-sm"
            >
              <MdKeyboardBackspace className="text-2xl" />
            </button>
            <h1 className="text-2xl font-bold font-serif text-gray-800">Saved Addresses</h1>
          </div>

          <ThemeButton variant="fill" className="flex items-center gap-2 py-2 px-4 shadow-md">
            <MdAdd className="text-xl" /> Add New Address
          </ThemeButton>
        </div>

        {/* Address List */}
        <div className="space-y-4">
          {addresses.map((addr) => (
            <div key={addr.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              {addr.isDefault && (
                <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  DEFAULT
                </div>
              )}

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-gray-100 rounded-lg text-gray-600">
                  {getIcon(addr.type)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded text-xs uppercase tracking-wider">{addr.type}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{addr.name} &nbsp;<span className="text-sm font-normal text-gray-500">{addr.mobile}</span></h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">
                    {addr.address}, {addr.locality}
                  </p>
                  <p className="text-gray-800 font-medium text-sm">
                    {addr.city}, {addr.state} - <strong>{addr.pincode}</strong>
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-md transition-colors">
                  <MdEdit /> Edit
                </button>
                <button className="flex items-center gap-1 text-sm font-medium text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-md transition-colors">
                  <MdDeleteOutline /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SavedAddress;
