import React from "react";
import { Helmet } from "react-helmet";
import HeroComponent from "./HeroComponent";
import LilttleAbt from "./lilttleAbt";
import Corevalues from "./corevalues";
import Testimonial from "./Testimonial";
import Impact from "./impact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Mubuga bio coffee</title>
        <meta name="description" content="Welcome to Mubuga Bio-Coffee. Learn about our mission, core values, impact, and hear from our satisfied customers." />
        <meta name="keywords" content="Mubuga Bio-Coffee, organic coffee, coffee farming, Rwanda, community impact, customer testimonials" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Home",
            description: "Welcome to Mubuga Bio-Coffee. Learn about our mission, core values, impact, and hear from our satisfied customers.",
            url: "https://www.mubugabiocoffee.rw",
            publisher: {
              "@type": "Organization",
              name: "Mubuga Bio-Coffee",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mubugabiocoffee.rw/assets/finalLogo-DHFuXONb.png",
              },
            },
          })}
        </script>
      </Helmet>

      <main>
        <HeroComponent />
        <section id="about">
          <LilttleAbt />
        </section>
        <section id="values">
          <Corevalues />
        </section>
        <section id="testimonials">
          <Testimonial />
        </section>
        <section id="impact">
          <Impact />
        </section>
      </main>
    </>
  );
};

export default Home;
