// "use client";

// import Image, { StaticImageData } from "next/image";

// interface HeroBoxProps {
//   title: string;
//   subtitle: string;
//   image: StaticImageData | string;
//   bgColor?: string;
// }

// const HeroBox: React.FC<HeroBoxProps> = ({
//   title,
//   subtitle,
//   image,
//   bgColor = "bg-[#e6e6e6]", // light grey like screenshot
// }) => {
//   return (
//     <section className={`w-full ${bgColor} py-0 px-0`}>
//       <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between h-[500px] md:h-[600px] overflow-hidden">
//         {/* Image Section */}
//         <div className="w-full lg:w-2/3 h-full relative">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-contain lg:object-left"
//             priority
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/3 px-6 text-center lg:text-left z-10">
//           <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
//             {title}
//           </h1>
//           <p className="mt-4 inline-block border border-gray-600 px-6 py-2 text-base md:text-lg text-gray-700">
//             {subtitle}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBox;

"use client";

import Image, { StaticImageData } from "next/image";

interface HeroBoxProps {
  image: StaticImageData | string;
  bgColor?: string;
}

const HeroBox: React.FC<HeroBoxProps> = ({
  image,
  bgColor = "bg-[#e6e6e6]",
}) => {
  return (
    <section className={`w-full ${bgColor} py-0 px-0`}>
      <div className="w-full h-[500px] md:h-[600px] relative">
        <Image
          src={image}
          alt="Hero Full Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default HeroBox;
