import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Mubuga bio coffee</title>
        <meta name="description" content="Get in touch with Mubuga bio coffee through our contact form. We're here to answer any questions you have about our organic coffee and community programs." />
        <meta name="keywords" content="Mubuga bio coffee contact, organic coffee, community programs, get in touch" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mubuga bio coffee",
            url: "https://www.mubugabiocoffee.rw",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+250123456789",
              contactType: "Customer Service",
              areaServed: "RW",
              availableLanguage: "en",
            },
          })}
        </script>
      </Helmet>

      <div className="grid max-w-screen-xl pt-20 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white text-lime-600 mt-24 mb-24">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            <div className="text-lime-600">Send Us Your Message via the Form Beside...</div>
          </div>
          <img src="/contact.svg" alt="Contact Us" className="p-6 h-52 md:h-64" />
        </div>
        <form noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input id="name" type="text" placeholder="Your Full Name" className="w-full p-3 rounded border border-black bg-gray-100 text-black" required />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input id="email" type="email" placeholder="Your Email Address" className="w-full p-3 rounded border border-black bg-gray-100 text-black" required />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea id="message" rows="3" placeholder="Your Message" className="w-full p-3 rounded border border-black bg-gray-100 text-black" required></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-lime-600 text-gray-50">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
