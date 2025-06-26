"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#e6e6e6] text-gray-800 text-sm py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-3 text-base">ABOUT US</h3>
          <ul>
            <li className="text-gray-600 hover:text-black cursor-pointer transition">
              COMPANY PROFILE
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-3 text-base">PRODUCTS</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">
              JEWELRY PACKING BOX
            </li>
            <li className="hover:text-black cursor-pointer transition">
              JEWELRY DISPLAY
            </li>
            <li className="hover:text-black cursor-pointer transition">
              JEWELRY POUCH &amp; BAG
            </li>
            <li className="hover:text-black cursor-pointer transition">
              JEWELRY BRAND SET
            </li>
            <li className="hover:text-black cursor-pointer transition">
              JEWELRY CLEANER &amp; OTHER
            </li>
          </ul>
        </div>

        {/* News */}
        <div>
          <h3 className="font-semibold mb-3 text-base">NEWS</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">
              INT&apos;L EXHIBITION INFO
            </li>
            <li className="hover:text-black cursor-pointer transition">
              DYNAMIC
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-base">CONTACT</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">
              CONTACT US
            </li>
            <li className="hover:text-black cursor-pointer transition">
              MESSAGE
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="lg:col-span-1 md:col-span-3 col-span-2 space-y-3">
          <h3 className="text-lg font-semibold">
            Delicate Gift Package Co., Ltd.
          </h3>
          <div className="flex items-start gap-2 text-gray-700">
            <Phone className="w-4 h-4 mt-[2px]" />
            <span>Mobile: +86-159 5749089</span>
          </div>
          <div className="flex items-start gap-2 text-gray-700">
            <Mail className="w-4 h-4 mt-[2px]" />
            <span>Email: bill@delicatepak.com</span>
          </div>
          <div className="flex items-start gap-2 text-gray-700">
            <MapPin className="w-4 h-4 mt-[2px]" />
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
