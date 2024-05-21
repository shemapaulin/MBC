import React from "react";
import { Helmet } from "react-helmet";
import ProjectItem from "./projectItem";
import beans from "../../assets/beans.jpg";
import boiintog from "../../assets/boiintog.png";
import rurangwa from "../../assets/rurangwa.png";
import david from "../../assets/david.jpg";
import fififoto from "../../assets/fififoto.jpeg";
import founder from "../../assets/founder2.jpg";
import { FaPlane, FaLifeRing } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Mubuga bio coffee</title>
        <meta name="description" content="Learn more about Mubuga bio coffee, our mission, vision, and the team behind our organic coffee production." />
        <meta name="keywords" content="Mubuga bio coffee, organic coffee, coffee farming, Rwanda, coffee production, community impact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mubuga bio coffee",
            url: "https://www.mubugabiocoffee.rw",
            logo: "https://www.mubugabiocoffee.rw/assets/finalLogo-DHFuXONb.png",
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

      <div className="pb-10">
        <div
          className="relative bg-gradient-to-r from-white/[.15] via-transparent z-10"
          style={{
            backgroundImage: `url(${beans})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl animated-slideInBottom">About</h1>
              <h1 className="animated-slideInTop block font-medium text-lime-900 text-4xl sm:text-5xl md:text-6xl lg:text-5xl">Us</h1>
            </div>
            {/* End Title */}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-white">Frequently Asked Questions About Mubuga Bio Coffee</h2>
        </div>
        <div className="max-w-5xl mx-auto text-amber-950">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold text-white">WHAT ABOUT MUBUGA BIO COFFEE?</h3>
              <p className="mt-2 text-white">
                Mubuga bio coffee is a company that is investing in organic or bio coffee to improve the livelihood of the local population while uplifting the Sector of Mubuga, commonly known by the
                negative effect of the genocide against the Tutsi in 1994. The Mubuga sector has not effectively risen from the ashes of the genocide against the Tutsi as it can be observed when
                analysing its socio-economic status. Mubuga Bio Coffee comes as a workable solution to contribute to reducing the Rwandan trade deficit, while satisfying the world demand of the bio
                coffee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Which is your target market?</h3>
              <p className="mt-2 text-white">Our highest target market is local or global industries which finalize the production of coffee.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Why Mubuga Location?</h3>
              <p className="mt-2 text-white">
                The Mubuga sector has not effectively risen from the ashes of the genocide against the Tutsi as it can be observed when analyzing its socio-economic data. A coffee farming project
                would reunify the locals and reduce the poverty while reassuring their brighter future. Also our project comes as a workable solution to contribute to reducing the Rwandan trade
                deficit, while satisfying the world demand of the Bio Coffee.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">What About The Impact so far?</h3>
              <p className="mt-2 text-white">Our impact so far is very incomparable, due to the jobs we provide for people and also the production we deliver to the market.</p>
            </div>
          </div>
        </div>
      </div>
      {/* End FAQ Section */}

      {/* Interviews Section */}
      <div id="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-10">Interviews</h1>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem img={boiintog} title="MRS Marie Claire Umutoniwase" link="https://www.youtube.com/watch?v=A2CczIrABwU" />
          <ProjectItem img={rurangwa} title="Mr Rurangwa Raphael" link="https://www.youtube.com/watch?v=cu5L-2ffcS0" />
        </div>
      </div>
      {/* End Interviews Section */}

      {/* Vision Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl text-white">Our Vision</h2>
            </div>
            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 size-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-white">High quality Co-Living spaces</h3>
                  <p className="mt-1 text-white">We shall provide quality bio coffee that gives outstanding value to our range of customers.</p>
                </div>
              </div>
              <div className="flex">
                <FaPlane className="flex-shrink-0 mt-2 size-6 text-white" />
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Our Production Overseas</h3>
                  <p className="mt-1 text-white">We shall provide quality bio coffee in either local or global industries.</p>
                </div>
              </div>
              <div className="flex">
                <FaLifeRing className="flex-shrink-0 mt-2 size-6 text-white" />
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Local Life Changing</h3>
                  <p className="mt-1 text-white">
                    Our soil coverage touches the three sectors (Mubuga, Gishyita, and Rwankuba) of districts, meaning local life-changing impact because we provide jobs to many men, women, and
                    youths, helping them improve their family's economic situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Vision Section */}

      {/* Leadership Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">Our Leadership</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <div className="text-center">
            <img className="rounded-xl sm:h-48 lg:h-60 mx-auto object-cover" src={david} alt="MR. David Ngoboka - Managing Director" />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium sm:text-base lg:text-lg text-neutral-200">MR. David Ngoboka</h3>
              <p className="text-xs sm:text-sm lg:text-base text-neutral-400">Managing Director</p>
            </div>
          </div>
          <div className="text-center">
            <img className="rounded-xl sm:h-48 lg:h-60 mx-auto object-cover object-top" src={fififoto} alt="MRS. Marie Claire Umutoniwase - Director of Administration and Finance" />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium sm:text-base lg:text-lg text-neutral-200">MRS. Marie Claire Umutoniwase</h3>
              <p className="text-xs sm:text-sm lg:text-base text-neutral-400">Director of Administration and Finance</p>
            </div>
          </div>
          <div className="text-center">
            <img className="rounded-xl sm:h-48 lg:h-60 mx-auto object-cover object-top" src={founder} alt="MR. Etienne Bahunde - Head of Production" />
            <div className="mt-2 sm:mt-4">
              <h3 className="text-sm font-medium sm:text-base lg:text-lg text-neutral-200">MR. Etienne Bahunde</h3>
              <p className="text-xs sm:text-sm lg:text-base text-neutral-400">Head of Production</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Leadership Section */}
    </>
  );
};

export default About;
