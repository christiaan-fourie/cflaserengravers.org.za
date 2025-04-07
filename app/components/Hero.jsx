import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[60vh] md:h-[100vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/hero_section_paralax.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to CF Laser Engravers
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Precision and creativity brought to life.
          </p>
        </div>
      </div>
    </div>
  );
}
