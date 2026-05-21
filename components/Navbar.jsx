// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
      {/* Nav Links */}
      <ul className="flex gap-6 text-lg">
        
        <li>
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
        </li>

        <li>
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
        </li>

        <li>
          <a href="#feedback" className="hover:text-cyan-400 transition">
            Feedback
          </a>
        </li>
        <li>
          <a href="#question" className="hover:text-cyan-400 transition">
            F&Q
          </a>
        </li>        
        <li>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact Us
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;