import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize isAuthenticated from localStorage if available
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  // Function to set isAuthenticated state and localStorage
  const setAuthStatus = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status.toString());
  };

  const login = () => {
    setAuthStatus(true);
  };

  const logout = () => {
    setAuthStatus(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
