// src/layouts/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        {/* <Header /> */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
