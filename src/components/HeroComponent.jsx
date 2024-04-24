
import mbcimg from "../assets/cofeplanter2.jpg";
import { TypeAnimation } from "react-type-animation";
import beans from '../assets/beans.jpg'


const HeroComponent = () => {
  
  return (
    <>
    <div className="pb-10">
      <div
        className="relative bg-gradient-to-r from-violet-600/[.15]  via-transparent z-10 "
        style={{
          backgroundImage: `url(${mbcimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 ">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="group inline-block bg-amber-950 border border-white/[.05] p-1 ps-4 rounded-full shadow-md animated-slideInRight"
              href="../figma.html" 
            >
              <p className="me-2 inline-block text-white text-sm text-bold font-medium">
                New Charity Program Coming soon...
              </p>
              <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                <svg
                  className="flex-shrink-0 size-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round" // corrected from stroke-linecap
                  />
                </svg>
              </span>
            </a>
          </div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-amber-950 text-4xl sm:text-5xl md:text-6xl lg:text-5xl animated-slideInTop">
              Mubuga <a className="text-white animated-slideInBottom">Bio</a> Coffee
            </h1>
          </div>
          {/* End Title */}

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-white">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Plantaion of the best coffee in Africa for changing lives of Society',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'we turn the coffee taste of your expectations into the satisfaction ',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px', opacity: '1' }} // Adjust opacity here
                repeat={Infinity}
              />
            </p>
          </div>

          {/* Buttons */}
          <div className="text-center">
            <a
              className="animated-slideInLeft group inline-flex justify-center items-center gap-x-3 text-center bg-amber-950 from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-amber-900/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Book Now
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round" // corrected from stroke-linecap
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          {/* End Buttons */}

          
        </div>
      </div>
    </div>

<div className="bg-yellow-100  dark:text-gray-900 border-lg">
<div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
<div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4" style={{ 
backgroundImage: `url(${beans})`, 
backgroundPosition: 'center center', 
backgroundBlendMode: 'multiply', 
backgroundSize: 'cover' 
}}></div>

    <div className="flex flex-col p-3 col-span-full row-span-full lg:col-span-8 lg:p-10">
        <div className="flex justify-start">
            <span className=" animated-slideInTop px-2 py-1 text-xs rounded-full text-sm font-medium text-bold bg-amber-950 dark:text-gray-50">Purpose</span>
        </div>
        
        <p className="flex-1 pt-2 text-2xl text-amber-950">Mubuga Bio-Coffee is a company that is investing in Bio-Coffee
         to improve the livelihood of the local population
         while uplifting the Sector of Mubuga, commonly known by the negative effect of the genocide against the Tutsi in 1994….</p>
       
         <div className="text-center">  
          <a
              className="animated-slideInLeft group inline-flex  gap-x-3 text-center bg-amber-950 from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-amber-900/50 border border-transparent text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href='/Garelly'
            >
             
              View Garelly

              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round" // corrected from stroke-linecap
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              
            </a>
        
          </div>
          
        
    </div>
</div>
</div>

</>
 
  );
 
};

export default HeroComponent;
