import React from "react";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <>
      <div className="w-full lg:h-48">
        <img
          src="https://images.olx.com.pk/thumbnails/245178240-800x600.webp"
          alt="Front of men's Basic Tee in black."
          className="w-full h-full object-cover lg:w-full lg:h-full"
        />
      </div>
    </>
  );
};

export default Banner;
