import React from "react";
import { Helmet } from "react-helmet";
import beans from "../../assets/beans.jpg";

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs | Mubuga bio coffee</title>
        <meta name="description" content="Discover the programs of Mubuga bio coffee including International Coffee Day, Charity Programs, and the Genocide Memorial Program." />
        <meta name="keywords" content="Mubuga bio coffee programs, International Coffee Day, Charity Programs, Genocide Memorial Program" />
      </Helmet>

      <div className="pb-10">
        <div className="relative bg-gradient-to-r from-white/[.15] via-transparent z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl animated-slideInBottom">Programs</h1>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg text-white">Explore our key programs aimed at improving the community and commemorating important events.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">Programs Ahead</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="group" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={beans} alt="Coffee Beans" />
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">International Coffee Day</h3>
              <p className="mt-3 text-white">
                International Coffee Day is a global celebration of coffee's cultural impact and the millions of people involved in its production, from farmers to baristas. Observed on October 1st,
                it honors the beverage enjoyed by people worldwide.
              </p>
            </div>
          </a>

          <a className="group" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={"./5.jpg"} alt="Charity Program" />
              <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium text-white py-1.5 px-3 bg-black/60">Sponsored</span>
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">Charity Programs</h3>
              <p className="mt-3 text-white">In partnership with district and sector leaderships, we help the community.</p>
            </div>
          </a>

          <a className="group" href="#">
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src={"./mubugagm.webp"}
                alt="Genocide Memorial Program"
              />
            </div>
            <div className="mt-7">
              <h3 className="text-xl font-semibold text-white">Genocide Memorial Program</h3>
              <p className="mt-3 text-white">During the Genocide memorial period, as all Rwandans we unite to remember as we contribute in many programs of helping survivors.</p>
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-lime-600">Subscribe</h2>
            <p className="mt-3 text-gray-600 text-black">Subscribe for new programs ahead so that you can be updated anytime.</p>
          </div>

          <form>
            <div className="w-full sm:max-w-lg md:ms-auto">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-500 text-neutral-500">No spam, unsubscribe at any time.</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Programs;
