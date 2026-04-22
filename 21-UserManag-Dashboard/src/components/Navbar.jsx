import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <div className="bg-blue-600 text-white flex justify-between items-center px-6 md:px-10 py-4">
        
        {/* Logo */}
        <h2 className="font-bold text-lg">UserMang.</h2>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link className="hover:underline" to="/">Users</Link>
          <Link className="hover:underline" to="/favorites">Favorites</Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>

      {/* OVERLAY (Mobile) */}
      <div className="fixed inset-0 bg-black/40 z-40 hidden"></div>

      {/* SIDEBAR */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform -translate-x-full transition-transform duration-300">
        
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button>
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 mt-4 text-gray-700">
          <Link to="/" className="hover:text-blue-600">Users</Link>
          <Link to="/favorites" className="hover:text-blue-600">Favorites</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
