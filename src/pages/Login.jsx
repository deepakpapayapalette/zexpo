import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, Shield, LogOut, ArrowLeft } from 'lucide-react';
import ThemeButton from '../components/UI/ThemeButton';
import UserProfile from '../components/user/UserProfile';

const Login = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect: login,
    logout: auth0Logout,
    user,
  } = useAuth0();


  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () => {
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-webprimary"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      {isAuthenticated ? (
        /* Authenticated - Show User Profile Component */
        <UserProfile />
        // navigate('/user-profile')
      ) : (
        /* Not Authenticated - Login/Signup */
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-webprimary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-webprimary to-websecondary p-6 text-white text-center">
              <h1 className="text-3xl font-bold mb-2">Welcome</h1>
              <p className="text-blue-100">Sign in to access your account</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-semibold">Error: {error.message}</p>
                </div>
              )}

              {/* Login/Signup Buttons */}
              <div className="space-y-4">
                <ThemeButton
                  onClick={() => login()}
                  variant="fill"
                  className='w-full'
                >
                  Login
                </ThemeButton>

                <ThemeButton
                  onClick={signup}
                  className="w-full " >
                  Sign Up
                </ThemeButton>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-webprimary hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-webprimary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
