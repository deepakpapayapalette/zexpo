// User LocalStorage Management Utility

const USER_STORAGE_KEY = 'zexpo_user_profile';
const AUTH_STATUS_KEY = 'zexpo_auth_status';
const SESSION_KEY = 'zexpo_session';

/**
 * Get user profile data from localStorage
 * @returns {Object|null} User profile data or null if not found
 */
export const getUserFromStorage = () => {
  try {
    const userJson = localStorage.getItem(USER_STORAGE_KEY);
    return userJson ? JSON.parse(userJson) : null;
  } catch (error) {
    console.error('Error reading user from localStorage:', error);
    return null;
  }
};

/**
 * Save user profile data to localStorage
 * @param {Object} userData - User profile data to save
 * @returns {boolean} Success status
 */
export const saveUserToStorage = (userData) => {
  try {
    const userJson = JSON.stringify(userData);
    localStorage.setItem(USER_STORAGE_KEY, userJson);
    return true;
  } catch (error) {
    console.error('Error saving user to localStorage:', error);
    return false;
  }
};

/**
 * Update specific fields in user profile
 * @param {Object} updates - Fields to update
 * @returns {Object|null} Updated user data or null on error
 */
export const updateUserInStorage = (updates) => {
  try {
    const currentUser = getUserFromStorage();
    if (!currentUser) {
      console.warn('No user found in storage to update');
      return null;
    }

    const updatedUser = {
      ...currentUser,
      ...updates,
      lastUpdated: new Date().toISOString()
    };

    saveUserToStorage(updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error updating user in localStorage:', error);
    return null;
  }
};

/**
 * Remove user profile data from localStorage
 * @returns {boolean} Success status
 */
export const removeUserFromStorage = () => {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error removing user from localStorage:', error);
    return false;
  }
};

/**
 * Check if user data exists in localStorage
 * @returns {boolean} True if user data exists
 */
export const hasUserInStorage = () => {
  return localStorage.getItem(USER_STORAGE_KEY) !== null;
};

/**
 * Merge Auth0 user data with stored profile data
 * @param {Object} auth0User - User data from Auth0
 * @param {Object} storedUser - User data from localStorage
 * @returns {Object} Merged user data
 */
export const mergeUserData = (auth0User, storedUser) => {
  return {
    // Auth0 data (always fresh)
    sub: auth0User?.sub,
    email: auth0User?.email,
    email_verified: auth0User?.email_verified,
    picture: auth0User?.picture,
    updated_at: auth0User?.updated_at,

    // Profile data (from storage or Auth0)
    name: storedUser?.name || auth0User?.name || '',
    mobile: storedUser?.mobile || auth0User?.phone_number || '',
    dateOfBirth: storedUser?.dateOfBirth || '',
    gender: storedUser?.gender || '',
    address: storedUser?.address || {},

    // Metadata
    lastUpdated: storedUser?.lastUpdated || new Date().toISOString()
  };
};

// ==================== Authentication Status Management ====================

/**
 * Save authentication status to localStorage
 * @param {boolean} isAuthenticated - Authentication status
 * @param {Object} user - User object from Auth0
 * @returns {boolean} Success status
 */
export const saveAuthStatus = (isAuthenticated, user = null) => {
  try {
    const authData = {
      isAuthenticated,
      timestamp: new Date().toISOString(),
      userId: user?.sub || null,
      email: user?.email || null
    };
    localStorage.setItem(AUTH_STATUS_KEY, JSON.stringify(authData));
    return true;
  } catch (error) {
    console.error('Error saving auth status:', error);
    return false;
  }
};

/**
 * Get authentication status from localStorage
 * @returns {Object|null} Auth status object or null
 */
export const getAuthStatus = () => {
  try {
    const authJson = localStorage.getItem(AUTH_STATUS_KEY);
    return authJson ? JSON.parse(authJson) : null;
  } catch (error) {
    console.error('Error reading auth status:', error);
    return null;
  }
};

/**
 * Check if user is authenticated based on localStorage
 * @returns {boolean} True if authenticated
 */
export const isAuthenticatedFromStorage = () => {
  const authStatus = getAuthStatus();
  return authStatus?.isAuthenticated || false;
};

/**
 * Remove authentication status from localStorage
 * @returns {boolean} Success status
 */
export const clearAuthStatus = () => {
  try {
    localStorage.removeItem(AUTH_STATUS_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing auth status:', error);
    return false;
  }
};

/**
 * Save session information
 * @param {Object} sessionData - Session data to save
 * @returns {boolean} Success status
 */
export const saveSession = (sessionData) => {
  try {
    const session = {
      ...sessionData,
      lastActivity: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return true;
  } catch (error) {
    console.error('Error saving session:', error);
    return false;
  }
};

/**
 * Get session information
 * @returns {Object|null} Session data or null
 */
export const getSession = () => {
  try {
    const sessionJson = localStorage.getItem(SESSION_KEY);
    if (!sessionJson) return null;

    const session = JSON.parse(sessionJson);

    // Check if session is expired
    if (new Date(session.expiresAt) < new Date()) {
      clearSession();
      return null;
    }

    return session;
  } catch (error) {
    console.error('Error reading session:', error);
    return null;
  }
};

/**
 * Clear session information
 * @returns {boolean} Success status
 */
export const clearSession = () => {
  try {
    localStorage.removeItem(SESSION_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing session:', error);
    return false;
  }
};

/**
 * Complete logout - clear all user data, auth status, and session
 * @returns {boolean} Success status
 */
export const clearAllUserData = () => {
  try {
    removeUserFromStorage();
    clearAuthStatus();
    clearSession();
    console.log('All user data cleared from localStorage');
    return true;
  } catch (error) {
    console.error('Error clearing all user data:', error);
    return false;
  }
};

/**
 * Initialize/update session on user activity
 * @param {Object} user - Auth0 user object
 * @returns {boolean} Success status
 */
export const updateSessionActivity = (user) => {
  try {
    const session = getSession() || {};
    session.lastActivity = new Date().toISOString();
    session.userId = user?.sub;
    saveSession(session);
    return true;
  } catch (error) {
    console.error('Error updating session activity:', error);
    return false;
  }
};
