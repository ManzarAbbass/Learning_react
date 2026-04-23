import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { UsersRound } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="bg-blue-600 text-white flex justify-between items-center px-6 md:px-10 py-4">
        
        <div className="flex items-center gap-2">
        <UsersRound size={40}/>
        <h2 className="font-bold text-lg">Dev-Connect.</h2>
        </div>

        <div className="hidden md:flex gap-8">
          <Link className="hover:underline" to="/">Users</Link>
          <Link className="hover:underline" to="/favorites">Favorites</Link>
        </div>


        <button 
        onClick={()=>{
          toggleSidebar()
        }}
        className="md:hidden">
          <Menu size={28} />
        </button>
      </div>


      <div className={`fixed inset-0 bg-black/40 z-40 ${isOpen ? "block" : "hidden"}`}></div>


      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform -translate-x-full transition-transform duration-300 ${isOpen ? "translate-x-0" : ""}`}>
        

        <div className="flex justify-end p-4">
          <button 
          onClick={()=>{
            toggleSidebar()
          }}
          className="bg-blue-600 p-2 rounded-xl">
            <X size={20} color="white"/>
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6 mt-4 text-gray-700">
          <Link to="/" className="block w-full p-3 rounded transition-all duration-200 
               hover:bg-blue-600 hover:text-white 
               active:bg-blue-700 active:text-white">Users</Link>
               
          <Link to="/favorites" className="block w-full p-3 rounded transition-all duration-200 
               hover:bg-blue-600 hover:text-white 
               active:bg-blue-700 active:text-white">Favorites</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
