import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  ShoppingCart,
  Heart,
  ClipboardList,
  Bell,
  MapPin,
  Settings,
  LogOut,
  Upload,
  Trash2,
  Phone,
  Verified,
  Calendar as CalendarIcon,
  ChevronDown
} from 'lucide-react';
import ThemeButton from '../UI/ThemeButton';
import {
  getUserFromStorage,
  saveUserToStorage,
  updateUserInStorage,
  removeUserFromStorage,
  mergeUserData,
  saveAuthStatus,
  clearAllUserData,
  saveSession,
  updateSessionActivity
} from '../../utils/userStorage';

const UserProfile = () => {
  const { user, logout: auth0Logout, isLoading } = useAuth0();
  const currentUser = getUserFromStorage();

  // State for profile form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dateOfBirth: '',
    gender: ''
  });

  const [isSaving, setIsSaving] = useState(false);

  // Load data from localStorage IMMEDIATELY on mount (before Auth0 loads)
  useEffect(() => {
    const storedUser = getUserFromStorage();
    if (storedUser) {
      setFormData({
        name: storedUser.name || '',
        email: storedUser.email || '',
        mobile: storedUser.mobile || '',
        dateOfBirth: storedUser.dateOfBirth || '',
        gender: storedUser.gender || ''
      });

    }
  }, []); // Run once on mount

  // Sync with Auth0 user data when available
  useEffect(() => {
    if (user && !isLoading) {
      const storedUser = getUserFromStorage();
      const mergedData = mergeUserData(user, storedUser);

      setFormData({
        name: mergedData.name,
        email: mergedData.email,
        mobile: mergedData.mobile,
        dateOfBirth: mergedData.dateOfBirth,
        gender: mergedData.gender
      });

      // Save merged data to localStorage
      saveUserToStorage(mergedData);

      // Save authentication status
      saveAuthStatus(true, user);

      // Initialize session
      saveSession({
        userId: user.sub,
        email: user.email,
        loginTime: new Date().toISOString()
      });

      console.log('User authenticated and synced with localStorage');
    }
  }, [user, isLoading]); // Sync when Auth0 user changes

  const [activeSection, setActiveSection] = useState('profile');

  const handleLogout = () => {
    // Clear ALL user data from localStorage (profile, auth status, session)
    clearAllUserData();
    console.log('User logged out - all data cleared');
    // Logout from Auth0
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvatarUpload = () => {
    // Placeholder for avatar upload functionality
    console.log('Upload avatar');
  };

  const handleAvatarDelete = () => {
    // Placeholder for avatar delete functionality
    console.log('Delete avatar');
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // Update localStorage with new profile data
      const updatedData = updateUserInStorage({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender
      });

      if (updatedData) {
        console.log('Profile saved successfully:', updatedData);
        alert('Profile updated successfully!');
      } else {
        console.error('Failed to save profile');
        alert('Failed to save profile. Please try again.');
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('An error occurred while saving your profile.');
    } finally {
      setIsSaving(false);
    }
  };

  // Menu items for sidebar
  const menuItems = [
    { id: 'cart', icon: ShoppingCart, label: 'Cart', path: '/cart' },
    { id: 'wishlist', icon: Heart, label: 'Wishlist / Saved Exhibitions', path: '/wishlist' },
    { id: 'bookings', icon: ClipboardList, label: 'Booking/Order', path: '/bookings' },
    { id: 'notifications', icon: Bell, label: 'Notifications', path: '/notifications' },
    { id: 'address', icon: MapPin, label: 'Saved Address', path: '/address' },
    { id: 'settings', icon: Settings, label: 'Account Setting', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-5">
            {/* User Info Card - Enhanced */}
            <div className="relative bg-gradient-to-br from-webprimary to-websecondary rounded-2xl shadow-lg overflow-hidden">
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
              </div>

              <div className="relative p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar with Ring */}
                  <div className="relative mb-4">
                    {user?.picture || currentUser?.picture ? (
                      <img
                        src={user?.picture || currentUser?.picture}
                        alt={user?.name || currentUser?.name || "User"}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80";
                        }}
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-webprimary text-3xl font-bold shadow-lg border-4 border-blue-100">
                        {user?.name?.charAt(0) || currentUser?.name?.charAt(0) || user?.email?.charAt(0) || currentUser?.email?.charAt(0) || "U"}
                      </div>
                    )}
                    {user?.email_verified && (
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-3 border-white shadow-md">
                        <Verified size={14} className="text-white" />
                      </div>
                    )}
                  </div>

                  {/* User Name */}
                  <h3 className="font-bold text-xl text-white mb-1 truncate w-full px-2">
                    {user?.name || 'User'}
                  </h3>

                  {/* Email */}
                  <p className="text-blue-100 text-sm mb-2 truncate w-full px-2">
                    {user?.email}
                  </p>

                  {/* Phone with Icon */}
                  {formData.mobile && (
                    <div className="flex items-center gap-1.5 text-blue-50 text-sm bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      <Phone size={14} />
                      <span>{formData.mobile}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Menu Items - Enhanced */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-2">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => item.path ? window.location.href = item.path : setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 text-left rounded-xl transition-all duration-200 mb-1 last:mb-0 group ${activeSection === item.id
                      ? 'bg-gradient-to-r from-webprimary to-blue-600 text-white shadow-md transform scale-[1.02]'
                      : 'text-gray-700 hover:bg-gray-50 hover:shadow-sm hover:transform hover:scale-[1.01]'
                      }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors ${activeSection === item.id
                      ? 'bg-white/20'
                      : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                      <item.icon size={18} className={activeSection === item.id ? 'text-white' : 'text-webprimary'} />
                    </div>
                    <span className="font-medium text-sm flex-1">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 mx-2"></div>

              {/* Logout Button - Enhanced */}
              <div className="p-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3.5 text-left rounded-xl transition-all duration-200 text-red-600 hover:bg-red-50 hover:shadow-sm group hover:transform hover:scale-[1.01]"
                >
                  <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors">
                    <LogOut size={18} className="text-red-600" />
                  </div>
                  <span className="font-semibold text-sm">Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Edit Profile Form */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile Details</h2>

              <form onSubmit={handleSaveProfile} className="space-y-6">
                {/* Avatar Upload Section */}
                <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                  {user?.picture || currentUser?.picture ? (
                    <img
                      src={user?.picture || currentUser?.picture}
                      alt={user?.name || currentUser?.name || "User"}
                      className="w-20 h-20 rounded-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80";
                      }}
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-webprimary to-websecondary flex items-center justify-center text-white text-2xl font-bold">
                      {user?.name?.charAt(0) || currentUser?.name?.charAt(0) || user?.email?.charAt(0) || currentUser?.email?.charAt(0) || "U"}
                    </div>
                  )}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handleAvatarUpload}
                      className="flex items-center gap-2 px-4 py-2 bg-webprimary text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Upload size={16} />
                      Upload New
                    </button>
                    <button
                      type="button"
                      onClick={handleAvatarDelete}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webprimary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rairavi209@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webprimary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Mobile Number Field */}
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 7662262656"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webprimary focus:border-transparent outline-none transition-all pr-10"
                    />
                    {formData.mobile && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Verified size={14} className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Date of Birth Field */}
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webprimary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Gender Field */}
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    Choose Your Gender
                  </label>
                  <div className="relative">
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-webprimary focus:border-transparent outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Save Button */}
                <div className="pt-4">
                  <ThemeButton
                    type="submit"
                    variant="fill"
                    className="w-full sm:w-auto px-8"
                    disabled={isSaving}
                  >
                    {isSaving ? 'Saving...' : 'Save Changes'}
                  </ThemeButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

