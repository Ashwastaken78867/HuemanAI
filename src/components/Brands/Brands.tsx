import React from "react";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";

const logos = [img1, img2, img3, img4,  img7, img8];

export const Brands: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f9fb] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
          Trusted by Enterprise{" "}
          <span className="text-primary">Hospitality Groups</span> Worldwide
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join the global property portfolios that have eliminated tech-fragmentation with HuemanAI.
          Our partners achieve significant lifts in Revenue, Total revenue, and GSS by replacing
          disconnected silos with a single, unified Conversational AI-First intelligence core.
        </p>

        {/* Partner label */}
        <div className="mt-10 text-xs tracking-widest text-gray-400 uppercase">
          Our Partners
        </div>
      </div>

      {/* Logos Marquee */}
      <div className="mt-10 overflow-hidden">
        <div className="flex gap-16 animate-marquee w-max">
          {[...logos, ...logos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Partner logo"
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;