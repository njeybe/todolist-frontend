import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Loginpage';
import DashboardPage from '../pages/DashboardPage';
import PrivateRoute from './PrivateRoute'; // A helper for protected routes

const AppRoutes = () => {
    return (
        <Routes>
          {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes */}
      {/* This 'PrivateRoute' component checks if the user is logged in.
          If yes, it shows the DashboardPage.
          If no, it redirects to /login. */}
      <Route 
        path="/dashboard" 
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        } 
      />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/login" />} />  
        </Routes>
    );
};

export default AppRoutes;