import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import beans from "../assets/beans.webp";
import coverImage1 from "../assets/coverphoto.webp";

const HeroComponent = () => {
  const slides = [
    {
      image: beans,
      title: "Empowering Communities",
      description: "Supporting local farmers and uplifting the community through sustainable coffee production.",
      link: "/About",
      linkText: "Learn More",
      textAlign: "text-center",
    },
    {
      image: coverImage1,
      title: "Experience the Richness",
      description: "Savor the exquisite taste of Mubuga bio coffee, where quality meets sustainability.",
      link: "/Contact",
      linkText: "Contact Now",
      textAlign: "text-center",
    },
    {
      image: beans,
      title: "Organic Excellence",
      description: "Our bio coffee is grown organically, ensuring the best quality and flavor.",
      link: "/Gallery",
      linkText: "View Gallery",
      textAlign: "text-center",
    },
  ];

  return (
    <div id="hero">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} className="relative h-96 sm:h-80 md:h-96">
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full space-y-4 ${slide.textAlign}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">{slide.title}</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white">{slide.description}</p>
              <Link
                to={slide.link}
                className="group inline-flex items-center gap-x-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium rounded-lg py-3 px-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                {slide.linkText}
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="bg-black text-white py-16 px-4 lg:px-0 ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div
            className="lg:col-span-4 bg-cover bg-center h-64 lg:h-auto hidden lg:block"
            style={{
              backgroundImage: `url(${beans})`,
              backgroundBlendMode: "multiply",
            }}
            role="img"
            aria-label="Coffee beans"
          ></div>

          <div className="lg:col-span-8 p-6 lg:p-12 bg-white text-black rounded-lg shadow-lg flex flex-col justify-between">
            <div className="mb-10">
              <span className="animated-slideInTop inline-block px-3 py-1 text-xs font-bold text-white bg-black rounded-full">Purpose</span>
              <p className="mt-4 text-2xl">
                Mubuga bio coffee is investing in Bio-Coffee to improve the livelihood of the local population while uplifting the sector of Mubuga, commonly known by the negative effect of the
                genocide against the Tutsi in 1994....
              </p>
            </div>
            <div className="mt-6 lg:mt-0 text-center lg:text-left">
              <Link
                to="/Gallery"
                className="animated-slideInLeft group inline-flex items-center gap-x-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium rounded-lg py-3 px-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                View Gallery
                <svg
                  className="flex-shrink-0 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroComponent;
