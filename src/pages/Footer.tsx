"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#e6e6e6] text-gray-800 text-sm py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1 - About */}
        <div>
          <h3 className="font-semibold mb-2">ABOUT US</h3>
          <ul>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              COMPANY PROFILE
            </li>
          </ul>
        </div>

        {/* Column 2 - Products */}
        <div>
          <h3 className="font-semibold mb-2">PRODUCTS</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-black cursor-pointer">
              JEWELRY PACKING BOX
            </li>
            <li className="hover:text-black cursor-pointer">JEWELRY DISPLAY</li>
            <li className="hover:text-black cursor-pointer">
              JEWELRY POUCH & BAG
            </li>
            <li className="hover:text-black cursor-pointer">
              JEWELRY BRAND SET
            </li>
            <li className="hover:text-black cursor-pointer">
              JEWELRY CLEANER & OTHER
            </li>
          </ul>
        </div>

        {/* Column 3 - News */}
        <div>
          <h3 className="font-semibold mb-2">NEWS</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-black cursor-pointer">
              INT'L EXHIBITION INFO
            </li>
            <li className="hover:text-black cursor-pointer">DYNAMIC</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="font-semibold mb-2">CONTACT</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-black cursor-pointer">CONTACT US</li>
            <li className="hover:text-black cursor-pointer">MESSAGE</li>
          </ul>
        </div>

        {/* Column 5 - Company Info */}
        <div className="lg:col-span-1 md:col-span-3 col-span-2 space-y-3">
          <h3 className="text-lg font-semibold">
            Delicate Gift Package Co., Ltd.
          </h3>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-1" />
            <span>Mobile: +86-159 5749089</span>
          </div>
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 mt-1" />
            <span>Email: bill@delicatepak.com</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1" />
            <span>
              Address: Room 203, Building C4, Er Kuang Creative Park Office,
              No.213
              <br />
              Huangbiannan Road, Baiyun District, Guangzhou, China
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
