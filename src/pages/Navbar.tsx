"use client";

import React from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import subtitle from "@/assets/subtitle.jpg";

const Navbar = () => {
  return (
    <header className="w-full font-sans">
      <div className="flex h-36">
        {/* Left: Logo Section */}
        <div className="bg-orange-500 w-1/4 flex items-center justify-center">
          <img
            src={logo.src}
            alt="Delicate Logo"
            className="object-contain px-4 py-2 h-[90%]"
          />
        </div>

        {/* Right: White Section */}
        <div className="w-3/4 bg-white px-6 flex items-center justify-between">
          {/* Left Side: Subtitle Image + Menu */}
          <div className="flex flex-col justify-center">
            {/* Replaced text with subtitle image */}
            <img
              src={subtitle.src}
              alt="Subtitle"
              className="w-auto h-10 object-contain mb-3 mr-[43%]"
            />

            {/* Menu under subtitle image */}
            <ul className="flex text-sm font-medium text-gray-900 mt-1 gap-[8rem]">
              <li className="flex items-center gap-1 cursor-pointer text-orange-500">
                HOME <ChevronDown size={14} />
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                ABOUT US <ChevronDown size={14} />
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                PRODUCTS <ChevronDown size={14} />
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                NEWS <ChevronDown size={14} />
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
                CONTACT <ChevronDown size={14} />
              </li>
            </ul>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex flex-col text-sm text-gray-800 items-end">
            <div className="flex items-center gap-2">
              <Phone className="text-orange-500" size={16} />
              <span>+86-15915749089</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-orange-500" size={16} />
              <span>bill@delicatepak.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
