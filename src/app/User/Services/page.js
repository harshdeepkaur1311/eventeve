import React from "react";

import Header from "@/app/components/Header/page";

export default function ServicesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-8">
        {/* Add margin between Header and main content */}
        <Header />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group relative overflow-hidden bg-white shadow-lg ">
            {/* Image */}
            <img
              src="/images/cake.jpg"
              alt="Cake"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-100 group-hover:bg-opacity-80 transition duration-500"></div>
            {/* Title */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-500 font-[RageItalic]">
              Cake
            </h3>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden bg-white shadow-lg ">
            {/* Image */}
            <img
              src="/images/cake.jpg"
              alt="Cake"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-100 group-hover:bg-opacity-80 transition duration-500"></div>
            {/* Title */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-500 font-[RageItalic]">
              Cake
            </h3>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden bg-white shadow-lg ">
            {/* Image */}
            <img
              src="/images/cake.jpg"
              alt="Cake"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-100 group-hover:bg-opacity-80 transition duration-500"></div>
            {/* Title */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-500 font-[RageItalic]">
              Cake
            </h3>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden bg-white shadow-lg ">
            {/* Image */}
            <img
              src="/images/cake.jpg"
              alt="Cake"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-100 group-hover:bg-opacity-80 transition duration-500"></div>
            {/* Title */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-500 font-[RageItalic]">
              Cake
            </h3>
          </div>

          {/* Card 5 */}
          <div className="group relative overflow-hidden bg-white shadow-lg ">
            {/* Image */}
            <img
              src="/images/cake.jpg"
              alt="Cake"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-100 group-hover:bg-opacity-80 transition duration-500"></div>
            {/* Title */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-500 font-[RageItalic]">
              Cake
            </h3>
          </div>

          {/* Card 6 */}
          <div className="group relative overflow-hidden bg-white shadow-lg ">
            {/* Image */}
            <img
              src="/images/flower.jpg"
              alt="Flower"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-100 group-hover:bg-opacity-80 transition duration-500"></div>
            {/* Title */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition duration-500 font-[RageItalic]">
              Flower
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
}
