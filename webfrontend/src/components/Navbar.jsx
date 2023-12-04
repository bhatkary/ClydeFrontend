import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/clydSymbol.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <div className="flex justify-between items-center h-20 mx-auto px-4 bg-white text-black w-full relative">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 w-auto" />
        <h1 className="text-2xl font-bold text-[#141414] ml-2">clyd.ai</h1>
      </div>

      <ul
        className={`md:flex ${nav ? "hidden" : "block"} items-center space-x-4`}
      >
        <li className="p-2">Home</li>
        <li className="p-2">Company</li>
        <li className="p-2">Resources</li>
        <li className="p-2">About</li>
        <li className="p-2">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={`md:hidden ${
          nav ? "block" : "hidden"
        } fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 overflow-y-auto`}
      >
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
