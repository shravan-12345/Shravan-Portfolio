import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
}