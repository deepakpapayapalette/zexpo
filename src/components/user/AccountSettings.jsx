import React, { useState } from 'react';
import { MdKeyboardBackspace, MdLock, MdEmail, MdNotifications, MdSecurity, MdChevronRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import ScrollTopAtuo from '../common/ScrollTopAtuo';

const AccountSettings = () => {
  const navigate = useNavigate();

  const settingsGroups = [
    {
      title: "Security & Login",
      items: [
        { id: 'pass', icon: MdLock, label: "Change Password", desc: "Update your password periodically" },
        { id: '2fa', icon: MdSecurity, label: "Two-Factor Authentication", desc: "Add an extra layer of security" },
      ]
    },
    {
      title: "Preferences",
      items: [
        { id: 'email', icon: MdEmail, label: "Email Preferences", desc: "Manage what emails you receive" },
        { id: 'notif', icon: MdNotifications, label: "Push Notifications", desc: "Manage mobile notifications" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <ScrollTopAtuo />
      <div className="max-w-2xl mx-auto text-left">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-200 bg-white rounded-full transition-colors text-gray-600 shadow-sm"
          >
            <MdKeyboardBackspace className="text-2xl" />
          </button>
          <h1 className="text-2xl font-bold font-serif text-gray-800">Account Settings</h1>
        </div>

        <div className="space-y-6">
          {settingsGroups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h3 className="font-bold text-gray-800">{group.title}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {group.items.map((item) => (
                  <button key={item.id} className="w-full flex items-center gap-4 p-6 hover:bg-gray-50 transition-colors text-left group">
                    <div className="p-3 bg-blue-50 text-webprimary rounded-lg group-hover:bg-blue-100 transition-colors">
                      <item.icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-webprimary transition-colors">{item.label}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    <MdChevronRight className="text-gray-400 group-hover:text-webprimary transition-colors" size={24} />
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Danger Zone */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-red-100 mt-8">
            <div className="px-6 py-4 bg-red-50 border-b border-red-100">
              <h3 className="font-bold text-red-700">Danger Zone</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="border border-red-200 text-red-600 hover:bg-red-50 font-semibold py-2 px-6 rounded-lg transition-colors text-sm w-full sm:w-auto">
                Delete Account
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
