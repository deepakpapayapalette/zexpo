import React, { useState } from 'react';
import { MdKeyboardBackspace, MdNotifications, MdNotificationsNone, MdCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import ScrollTopAtuo from '../common/ScrollTopAtuo';
import { CheckCheck } from 'lucide-react';

const Notifications = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Booking Confirmed",
      message: "Your booking for Lucknow Expo Center has been successfully confirmed.",
      time: "2 hours ago",
      isRead: false,
      type: "booking"
    },
    {
      id: 2,
      title: "New Exhibition Alert",
      message: "Don't miss out on the upcoming Tech Expo 2025 in your city!",
      time: "1 day ago",
      isRead: false,
      type: "alert"
    },
    {
      id: 3,
      title: "Ticket Download Ready",
      message: "Your ticket for the Art Gallery Showcase is ready for download.",
      time: "2 days ago",
      isRead: true,
      type: "ticket"
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, isRead: true })));
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(notif =>
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <ScrollTopAtuo />
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden text-left">

        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
            >
              <MdKeyboardBackspace className="text-2xl" />
            </button>
            <h1 className="text-2xl font-bold font-serif text-gray-800">Notifications</h1>
          </div>
          <button
            onClick={markAllAsRead}
            className="text-webprimary font-medium text-sm hover:underline flex items-center gap-1"
          >
            <CheckCheck size={16} /> Mark all read
          </button>
        </div>

        {/* Content */}
        <div className="p-0">
          {notifications.length > 0 ? (
            <div className="divide-y divide-gray-50">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  onClick={() => markAsRead(item.id)}
                  className={`p-6 flex gap-4 hover:bg-gray-50 transition-colors cursor-pointer ${!item.isRead ? 'bg-blue-50/50' : ''}`}
                >
                  <div className={`mt-1 min-w-[40px] h-10 rounded-full flex items-center justify-center ${!item.isRead ? 'bg-blue-100 text-webprimary' : 'bg-gray-100 text-gray-400'}`}>
                    {item.isRead ? <MdNotificationsNone size={20} /> : <MdNotifications size={20} />}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`text-base font-semibold ${!item.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                        {item.title}
                      </h3>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{item.time}</span>
                    </div>
                    <p className={`text-sm ${!item.isRead ? 'text-gray-800' : 'text-gray-500'}`}>
                      {item.message}
                    </p>
                  </div>

                  {!item.isRead && (
                    <div className="self-center">
                      <MdCircle className="text-webprimary text-[10px]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <MdNotificationsNone size={64} className="mb-4 text-gray-300" />
              <p className="text-lg">No notifications yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
