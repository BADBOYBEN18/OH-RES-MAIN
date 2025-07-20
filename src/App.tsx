import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/index'; // Adjust path if needed
import SignInPage from './pages/login';
import Register from './pages/register'; // You forgot to import this
import NotFound from './pages/NotFound'; // Ensure this exists
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import OurSolutionsPage from './pages/OurSolutionsPage'
import ProtectedRoute from './components/ProtectedRoute';
import AdminPanel from './pages/AdminPanelPage';
import DashboardLayout from './components/Dashboard/Layout';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/solutions" element={<OurSolutionsPage />} />
        <Route path="*" element={<NotFound />} />

        /* Dashboard layout (Sidebar + Dashboard content) */
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<AdminPanel />} />
        </Route>
      </Routes>
  );
}

export default App;
