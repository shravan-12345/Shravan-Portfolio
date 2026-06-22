import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-950 p-5">

      <h1 className="text-2xl font-bold mb-8">
        Admin Panel
      </h1>

      <nav className="flex flex-col gap-4">

        <Link to="/admin" className="hover:text-indigo-400">
          Dashboard
        </Link>

        <Link to="/admin/blogs" className="hover:text-indigo-400">
          Blogs
        </Link>

        <Link to="/admin/projects" className="hover:text-indigo-400">
          Projects
        </Link>

        <Link to="/admin/messages" className="hover:text-indigo-400">
          Messages
        </Link>

        <Link to="/admin/certifications"className="hover:text-indigo-400">
        🏆 Certifications
        </Link>

      </nav>

    </div>
  );
}