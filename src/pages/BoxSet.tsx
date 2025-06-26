"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";

interface BoxSetProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSet: (string | StaticImageData)[];
  highlight?: string;
  processText?: string;
}

const BoxSet: React.FC<BoxSetProps> = ({
  title,
  subtitle,
  description,
  imageSet,
  highlight,
  processText = "Customized Exclusive LOGO",
}) => {
  return (
    <section className="w-full py-12 px-4 lg:px-16 flex items-start flex-wrap lg:flex-nowrap">
      {/* Left side - Main Image */}
      <div className="w-full lg:w-1/2">
        {imageSet[0] && (
          <div className="relative w-full aspect-[4/3] mx-auto">
            <Image
              src={imageSet[0]}
              alt="Main Jewelry Box"
              fill
              className="object-contain rounded-md"
            />
          </div>
        )}

        {highlight && (
          <div className="mt-4 w-full text-center">
            <p className="inline-block border px-4 py-2 text-sm text-gray-600">
              {highlight}
            </p>
          </div>
        )}
      </div>

      {/* Right side - Text + 2 Thumbnails */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center gap-6 mt-9">
        <div className="w-full flex flex-col items-center">
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              {title}
            </h2>
            {subtitle && <p className="text-lg text-gray-500">{subtitle}</p>}
          </div>

          {description && (
            <div className="bg-black text-white text-sm px-32 py-2 rounded-sm mt-4">
              {description}
            </div>
          )}

          <div className="border border-gray-300 px-6 py-4 text-center mt-4">
            <div className="flex items-center justify-center">
              <div className="w-8 border-b border-gray-300" />
              <span className="mx-2 text-sm uppercase text-gray-500 tracking-widest">
                Processs
              </span>
              <div className="w-8 border-b border-gray-300" />
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-800">
              {processText}
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          {imageSet.slice(1, 3).map((img, idx) => (
            <div
              key={idx}
              className="relative w-64 h-48 sm:w-72 sm:h-56 lg:w-80 lg:h-64"
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxSet;
