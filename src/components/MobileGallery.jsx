"use client";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
const MobileList = [
  {
    src: "/assets/images/iphone_01.png",
    alt: "Phone 1",
    speed: 20,
  },
  { src: "/assets/images/iphone_02.png", alt: "Phone 2", speed: 10 },
  { src: "/assets/images/iphone_03.png", alt: "Phone 3", speed: 20 },
  { src: "/assets/images/iphone_04.png", alt: "Phone 4", speed: 10 },
  { src: "/assets/images/iphone_05.png", alt: "Phone 5", speed: 20 },
];
const MobileGallery = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-0 sm:gap-11  justify-center items-center overflow-hidden">
      <ParallaxProvider>
        {MobileList.map(({ src, alt, speed }, idx) => (
          <Parallax key={idx} speed={speed}>
            <Image src={src} width={279} height={279} alt={alt} />
          </Parallax>
        ))}
      </ParallaxProvider>
    </div>
  );
};

export default MobileGallery;
