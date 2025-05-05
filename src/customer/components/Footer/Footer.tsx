import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 p-20 bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-center md:text-left">
            <h5 className="text-lg font-semibold">Udupi Saree Empower</h5>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} Udupi Saree Empower. All rights reserved.
            </p>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
