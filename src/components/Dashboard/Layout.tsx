// components/DashboardLayout.tsx
import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-[250px] bg-white shadow h-full">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <Outlet /> {/* This will render the page content, e.g., Dashboard */}
      </div>
    </div>
  );
};

export default DashboardLayout;
