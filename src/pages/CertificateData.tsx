"use client";

import React from "react";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

import cert1 from "@/assets/11.jpg";
import cert2 from "@/assets/12.jpg";
import cert3 from "@/assets/11.jpg";
import cert4 from "@/assets/12.jpg";
import cert5 from "@/assets/11.jpg";

const certificateData = [
  {
    title: "ADHERE TO 100%",
    subtitle: "HIGH-END CUSTOMIZATION",
  },
  {
    title: "ADHERE TO 100%",
    subtitle: "FULL INSPECTION",
  },
  {
    title: "ADHERE TO 100%",
    subtitle: "ENVIRONMENT-FRIENDLY",
  },
];

const certImages = [cert1, cert2, cert3, cert4, cert5];

const CertificateSection = () => {
  return (
    <section className="relative w-full bg-orange-500 text-white overflow-hidden">
      {/* White Curve with Orange Shadow Overlay */}
      <div className="absolute top-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="orangeShadow" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <path
            fill="url(#orangeShadow)"
            d="M1440 0 C1200 60 900 40 720 80 C540 120 300 20 0 100 L0 0 L1440 0 Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          OUR CERTIFICATE
        </h2>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {certificateData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-left">
              <div className="bg-white p-1 rounded-full">
                <BadgeCheck className="text-orange-500 w-6 h-6" />
              </div>
              <div className="leading-tight">
                <p className="font-bold uppercase text-sm">{item.title}</p>
                <p className="text-xs">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-2 min-w-max">
            {certImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[220px] h-[300px] bg-white border border-gray-300 shadow-md rounded"
              >
                <Image
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-full object-contain"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
