"use client";

import React from "react";
// import { CheckCircle, Layers, Zap, ShieldCheck } from "lucide-react";
import Layout from "./Layout";

const features = [
  {
    id: 1,
    title: "ONE-STOP SERVICE",
    description:
      "DELICATE IS A GLOBAL JEWELRY SUPPLIER OFFERING FREE SAMPLES. ONE-STOP PURCHASING FOR ALL YOUR NEED.",
  },
  {
    id: 2,
    title: "OEM&ODM",
    description:
      "WE PROVIDE HIGH-END CUSTOMIZED SERVICES, FREE DESIGN DRAFT, WELCOME TO CONSULT.",
  },
  {
    id: 3,
    title: "STICK TO 100%",
    description: `100% HIGH-END CUSTOMIZATION.\n100% CUSTOMER DISSATISFACTION FULL COMPENSATION.\n100% OF ALL INSPECTION.\n100% ENVIRONMENT-FRIENDLY MATERIALS.`,
  },
  {
    id: 4,
    title: "STRENGTH",
    description:
      "3 AUTOMATIC PRODUCTION LINES.\n2 HIGH-END MANUAL PRODUCTION LINES.\nFACTORY EMPLOYEES 100+.\n3000 SQUARE PLANT.",
  },
];

const WhyChooseUs = () => {
  return (
    <Layout>
      <section className="w-full py-10 px-6 md:px-16 flex flex-col md:flex-row items-stretch gap-10 bg-white">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 uppercase">
            Why Choose Us ?
          </h2>
          {features.map((item) => (
            <div key={item.id} className="flex gap-4">
              {/* Number Box */}
              <div className="w-10 h-10 bg-orange-500 text-white rounded-sm flex items-center justify-center font-bold text-lg">
                {item.id}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-orange-500 text-lg font-bold uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-1 text-sm whitespace-pre-line uppercase">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Taller Video */}
        <div className="md:w-1/2 bg-[#eaffff] p-4 rounded-lg relative flex min-h-[520px]">
          <video
            className="w-full h-full rounded-md object-cover"
            src="https://cdn.pixabay.com/video/2023/08/01/174086-850404739_large.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-orange-500 font-bold text-2xl">
              Customer Praise
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
