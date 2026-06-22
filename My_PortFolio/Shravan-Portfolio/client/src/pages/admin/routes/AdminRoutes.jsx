import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Blogs from "../pages/Blogs";
import Projects from "../pages/Projects";
import Messages from "../pages/Messages";

export default function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </AdminLayout>
  );
}