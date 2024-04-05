import React from 'react'
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <>
    <div className="pb-10">
      <div
        className="relative dark:bg-amber-950 from-violet-600/[.15]  via-transparent z-10 "
      >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 ">
        

          {/* Title */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl animated-slideInTop">
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'About Us',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Mubuga Bio Coffee [2020-2024]',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px', opacity: '1' }} // Adjust opacity here
                repeat={Infinity}
              />
            </h1>
          </div>
          {/* End Title */}

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-white">
              
            </p>
          </div>

        

          
        </div>
      </div>
    </div>
    </>
  )
}

export default About