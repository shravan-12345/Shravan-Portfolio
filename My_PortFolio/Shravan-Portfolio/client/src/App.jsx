import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Resume from "./pages/Resume";
import Certifications from "./pages/Certifications";

import Dashboard from "./pages/Dashboard";
import AdminLayout from "./pages/AdminLayout";

import ProjectsAdmin from "./pages/admin/ProjectsAdmin";
import BlogsAdmin from "./pages/admin/BlogsAdmin";
import EducationAdmin from "./pages/admin/EducationAdmin";
import ExperienceAdmin from "./pages/admin/ExperienceAdmin";
import MessagesAdmin from "./pages/admin/MessagesAdmin";
import CertificationsAdmin from "./pages/admin/CertificationsAdmin";

import Navbar from "./components/Navbar";

function AppRoutes() {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/certifications"element={<Certifications />}
/>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="blogs" element={<BlogsAdmin />} />
          <Route path="education" element={<EducationAdmin />} />
          <Route path="experience" element={<ExperienceAdmin />} />
          <Route path="messages" element={<MessagesAdmin />} />
          <Route path="certifications" element={<CertificationsAdmin />}
/>
        </Route>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}