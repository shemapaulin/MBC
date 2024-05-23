import React from "react";
import { Helmet } from "react-helmet";
import ProjectItem from "./projectItem";
import beans from "../../assets/beans.webp";
import boiintog from "../../assets/boiintog.webp";
import rurangwa from "../../assets/rurangwa.webp";
import david from "../../assets/david.webp";
import fififoto from "../../assets/fififoto.webp";
import founder from "../../assets/founder2.webp";
import { FaPlane, FaLifeRing } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Mubuga Bio Coffee</title>
        <meta name="description" content="Discover the mission, vision, and team behind Mubuga Bio Coffee, committed to sustainable organic coffee production." />
        <meta name="keywords" content="Mubuga Bio Coffee, organic coffee, coffee farming, Rwanda, community impact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mubuga Bio Coffee",
            url: "https://www.mubugabiocoffee.rw",
            logo: "https://www.mubugabiocoffee.rw/assets/finalLogo-DHFuXONb.webp",
            sameAs: ["https://www.facebook.com/mubugabiocoffee", "https://www.instagram.com/mubugabiocoffee", "https://www.linkedin.com/company/mubugabiocoffee"],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+250123456789",
                contactType: "Customer Service",
                areaServed: "RW",
                availableLanguage: ["en", "fr"],
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-r from-white/10 to-transparent pb-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-9 space-y-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-snug mt-4">About Us</h1>
          <p className="text-xl sm:text-2xl text-gray-100 font-semibold">Mubuga Bio Coffee - Crafting Sustainable Excellence</p>
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 py-16 -mt-12">
        <h3 className="text-3xl md:text-5xl text-left text-white mb-10 mt-10 font-bold">Interviews</h3>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem img={boiintog} title="MRS Marie Claire Umutoniwase" link="https://www.youtube.com/watch?v=A2CczIrABwU" />
          <ProjectItem img={rurangwa} title="Mr Rurangwa Raphael" link="https://www.youtube.com/watch?v=cu5L-2ffcS0" />
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 py-16 bg-white rounded-lg">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl text-black">Our Vision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-white">
          <div className="flex items-start">
            <FaLifeRing className="flex-shrink-0 mt-1 mr-4 text-4xl text-black" />
            <div>
              <h3 className="text-xl font-semibold text-black">High-Quality Co-Living Spaces</h3>
              <p className="mt-2 text-black">Deliver exceptional value with our premium organic coffee offerings.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaPlane className="flex-shrink-0 mt-1 mr-4 text-4xl text-black" />
            <div>
              <h3 className="text-xl font-semibold text-black">Global Production Reach</h3>
              <p className="mt-2 text-black">Supply superior bio coffee to local and global industries.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaLifeRing className="flex-shrink-0 mt-1 mr-4 text-4xl text-black" />
            <div>
              <h3 className="text-xl font-semibold text-black">Local Life Impact</h3>
              <p className="mt-2 text-black">Empower local communities through job creation and economic stability.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Leadership</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <LeaderCard img={david} name="MR. David Ngoboka" position="Managing Director" />
          <LeaderCard img={fififoto} name="MRS. Marie Claire Umutoniwase" position="Director of Administration and Finance" />
          <LeaderCard img={founder} name="MR. Etienne Bahunde" position="Head of Production" />
        </div>
      </div>

      <div className="max-w-[full] mx-auto px-4 py-10 bg-white">
        <div className="max-w-2xl mx-auto text-center mb-12 -mt-5">
          <h2 className="text-3xl md:text-4xl text-black leading-snug mt-3">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-7xl mx-auto text-black">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6">
            <div>
              <h3 className="text-lg font-semibold text-black">What is Mubuga Bio Coffee?</h3>
              <p className="mt-2 text-black">
                Mubuga bio coffee is a company that is investing in organic or bio coffee to improve the livelihood of the local population while uplifting the Sector of Mubuga, commonly known by the
                negative effect of the genocide against the Tutsi in 1994. The Mubuga sector has not effectively risen from the ashes of the genocide against the Tutsi as it can be observed when
                analysing its socio-economic status. Mubuga Bio Coffee comes as a workable solution to contribute to reducing the Rwandan trade deficit, while satisfying the world demand of the bio
                coffee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Why Mubuga location?</h3>
              <p className="mt-2">
                The Mubuga sector has not effectively risen from the ashes of the genocide against the Tutsi as it can be observed when analyzing its socio-economic data. A coffee farming project
                would reunify the locals and reduce the poverty while reassuring their brighter future. Also our project comes as a workable solution to contribute to reducing the Rwandan trade
                deficit, while satisfying the world demand of the Bio Coffee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Who are our target markets?</h3>
              <p className="mt-2">Our primary markets include local and global coffee processing industries.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">What has been our impact?</h3>
              <p className="mt-2">Our contributions are significant, providing employment and quality coffee to the market.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LeaderCard = ({ img, name, position }) => {
  return (
    <div className="text-center">
      <img className="rounded-full mx-auto h-40 w-40 object-cover object-center mb-4" src={img} alt={name} />
      <div>
        <h3 className="text-lg font-medium text-white">{name}</h3>
        <p className="text-sm text-neutral-400">{position}</p>
      </div>
    </div>
  );
};

export default About;
