import beans from '../assets/beans.jpg'
import hiro1 from '../assets/hiro1.jpg'


const HeroComponent = () => {
  
  return (
    <>
    <div className="pb-10  ">
      <div
        className="relative bg-gradient-to-r from-violet-600/[.15] h-90 via-transparent z-10 object-bottom" 
        style={{
          backgroundImage: `url(${hiro1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 ">
          

         

          <br/>
          <br/>
          <br/>

          {/* Buttons */}
          <div className="text-center ">
            <a
              className="animated-slideInLeft group inline-flex justify-center items-center gap-x-3 text-center bg-black from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-black/50 border border-transparent text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="/contact"
            >
              Contact Now
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

          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>

<div className="bg-black  dark:text-white border-lg">
<div className="container grid grid-cols-12 mx-auto dark:bg-white">
<div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4" style={{ 
backgroundImage: `url(${beans})`, 
backgroundPosition: 'center center', 
backgroundBlendMode: 'multiply', 
backgroundSize: 'cover' 
}}></div>

    <div className="flex flex-col p-3 col-span-full row-span-full lg:col-span-8 lg:p-10">
        <div className="flex justify-start">
            <span className=" animated-slideInTop px-2 py-1 text-xs rounded-full text-sm font-medium text-bold bg-black dark:text-gray-50">Purpose</span>
        </div>
        
        <p className="flex-1 pt-2 text-2xl text-black">Mubuga Bio-Coffee is a company that is investing in Bio-Coffee
         to improve the livelihood of the local population
         while uplifting the Sector of Mubuga, commonly known by the negative effect of the genocide against the Tutsi in 1994….</p>
       
         <div className="text-center">  
          <a
              className="animated-slideInLeft group inline-flex  gap-x-3 text-center bg-black from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-amber-900/50 border border-transparent text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
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
