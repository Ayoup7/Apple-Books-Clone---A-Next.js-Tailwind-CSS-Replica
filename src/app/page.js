import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import MobileGallery from "@/components/MobileGallery";
import Filter from "@/components/Filter";
import DetailsSection from "@/components/DetailsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MobileGallery />
      <Filter />
      <DetailsSection />
    </>
  );
}
