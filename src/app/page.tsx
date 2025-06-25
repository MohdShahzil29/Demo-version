import Image from "next/image";
import Navbar from "../pages/Navbar";
import HeroSection from "@/pages/HeroSection";
import WhyChooseUs from "@/pages/WhyChooseUs";
import CertificateSection from "@/pages/CertificateData";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <CertificateSection />
    </>
  );
}
