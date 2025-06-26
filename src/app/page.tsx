import Navbar from "../pages/Navbar";
import HeroSection from "@/pages/HeroSection";
import WhyChooseUs from "@/pages/WhyChooseUs";
import CertificateSection from "@/pages/CertificateData";
import BoxSet from "@/pages/BoxSet";
import image1 from "@/assets/Jewelry Packing Box.jpg";
import image2 from "@/assets/Jewelry Packing Box 1.jpg";
import image3 from "@/assets/Jewelry Packing Box 2.jpg";
import HeroBox from "@/pages/HeroBox";
import heroImg from "@/assets/HeroBox.jpg";

import boxImage1 from "@/assets/Jewelry Display 1.jpg";
import boxImage2 from "@/assets/Jewelry Display 2.jpg";
import boxImage3 from "@/assets/Jewelry Display 3.jpg";

import displayImage from "@/assets/displayset.jpg";
import paperImage from "@/assets/paper image.jpg";

import pouchBox from "@/assets/Pouch & Bag 1.jpg";
import pouchBox2 from "@/assets/Pouch & Bag 2.jpg";
import pouchBox3 from "@/assets/Pouch & Bag 3.png";

import cleanAndOther from "@/assets/Cleaner & Other 1.jpg";
import cleanAndOther2 from "@/assets/Cleaner & Other 2.jpg";
import cleanAndOther3 from "@/assets/Cleaner & Other 3.jpg";

import waterClean from "@/assets/waterclean.jpg";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <CertificateSection />
      <BoxSet
        title="Jewelry Packing Box"
        subtitle="Rounded Jewelry Storage Box"
        description="A Variety of Colors and Styles to Choose"
        // highlight="Jewelry Box With Rounded Corners"
        processText="Custom Branding Options Available"
        imageSet={[image1, image2, image3]}
      />
      <HeroBox
        // title="JEWELRY PLASTIC BOX"
        // subtitle="Sets, Customizable Materials / Colors / Styles"
        image={heroImg}
        bgColor="bg-[#f4f4f4]" // changeable
      />
      <BoxSet
        title="Jewelry Display"
        subtitle="ENVIRONMENTAL PROTECTION,NO SMELL"
        description="FLOCKING PROTECTIVE LAYER"
        // highlight="Jewelry Box With Rounded Corners"
        processText="DRAWER TYPE BOX"
        imageSet={[boxImage1, boxImage2, boxImage3]}
      />
      <HeroBox
        // title="JEWELRY PLASTIC BOX"
        // subtitle="Sets, Customizable Materials / Colors / Styles"
        image={displayImage}
        bgColor="bg-[#f4f4f4]" // changeable
      />
      <BoxSet
        title="Jewelry Pouch & Bag"
        subtitle="ENVIRONMENTAL PROTECTION,NO SMELL"
        description="CONCAVE-CONVEX EMBOSSING"
        // highlight="Jewelry Box With Rounded Corners"
        processText="DRAWER TYPE BOX"
        imageSet={[pouchBox, pouchBox2, pouchBox3]}
      />
      <HeroBox
        // title="JEWELRY PLASTIC BOX"
        // subtitle="Sets, Customizable Materials / Colors / Styles"
        image={paperImage}
        bgColor="bg-[#f4f4f4]" // changeable
      />
      <BoxSet
        title="Jewelry Cleaner & Other"
        subtitle="ENVIRONMENTAL PROTECTION,NO SMELL"
        description="CONCAVE-CONVEX EMBOSSING"
        // highlight="Jewelry Box With Rounded Corners"
        processText="RIBBON HAND ROPE"
        imageSet={[cleanAndOther, cleanAndOther2, cleanAndOther3]}
      />
      <HeroBox
        // title="JEWELRY PLASTIC BOX"
        // subtitle="Sets, Customizable Materials / Colors / Styles"
        image={waterClean}
        bgColor="bg-[#f4f4f4]" // changeable
      />
      <Footer />
    </>
  );
}
