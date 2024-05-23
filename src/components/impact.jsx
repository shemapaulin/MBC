import React from "react";
import impact from "../assets/impact.webp";

const Impact = () => {
  return (
    <section className="bg-white text-black py-16 px-4 lg:px-0">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
        <div className="relative h-80 lg:h-auto bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url(${impact})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl lg:text-6xl text-center">Mubuga Bio Coffee's Impact</h1>
            <p className="text-white text-lg lg:text-xl mt-4 max-w-lg text-center">We strive to exceed your expectations and create meaningful impact through sustainable coffee farming.</p>
          </div>
        </div>
        <div className="space-y-8">
          <div data-aos="fade-right">
            <h2 className="text-3xl lg:text-4xl mb-2">Bio Coffee</h2>
            <p className="text-lg lg:text-xl">
              Coffee is Rwanda's leading cash crop. While Rwanda's coffee is highly regarded globally, the country's supply falls short of meeting the demand. Mubuga Bio Coffee aims to bridge this gap
              by producing high-quality bio coffee.
            </p>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl lg:text-4xl mb-2">Environmental Protection at the Forefront</h2>
            <p className="text-lg lg:text-xl">
              Mubuga Bio Coffee is committed to environmental protection. Located in a mountainous area, we prioritize sustainable farming practices to prevent soil erosion and minimize environmental
              impact.
            </p>
          </div>
          <div data-aos="fade-right">
            <h2 className="text-3xl lg:text-4xl mb-2">Empowering Women and Youth</h2>
            <p className="text-lg lg:text-xl">
              We aim to empower unemployed youth and women by forming self-governed cooperatives. By providing training and income-generating opportunities, we strive to uplift communities and foster
              unity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
