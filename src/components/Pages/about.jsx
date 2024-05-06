
import ProjectItem from "./projectItem";
import { FaPlane,FaLifeRing } from 'react-icons/fa';



const About = () => {
  return (
    <>
    <div className="pb-10">
      <div
        className="relative bg-gradient-to-r  from-white/[.15]  via-transparent z-10 "
      >

        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 ">
        

          {/* Title */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl animated-slideInBottom">
              About 
      
            </h1>
            <h1 className='animated-slideInTop text-lime-900 block font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl'>Us</h1> 
          </div>
          {/* End Title */}

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-white">
              
            </p>
          </div>

        

          
        </div>
      </div>
    </div>

    {/**faq */}
    
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-white">
      Frequently Asked Questions About Mubuga Bio Coffee
    </h2>
  </div>
 

  <div class="max-w-5xl mx-auto  text-amber-950">
 
    <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
      <div>
        <h3 class="text-lg font-semibold text-white ">
          When/Why Did Mubuga Bio Coffee Born?
        </h3>
        <p class="mt-2 text-white ">
          Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
        </p>
      </div>
      

      <div>
        <h3 class="text-lg font-semibold text-white">
          Which is your target market?
        </h3>
        <p class="mt-2 text-white">
         Our highest target market is local or grobal industries which finalize the production of coffee
        </p>
      </div>
   

      <div>
        <h3 class="text-lg font-semibold text-white">
          Why Mubuga Location?
        </h3>
        <p class="mt-2 text-white">
          Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
        </p>
      </div>


      <div>
        <h3 class="text-lg font-semibold text-white">
          What About The Impact so far?
        </h3>
        <p class="mt-2 text-white">
          Our impact so far is very uncomparable, due to the job we provide for people and also the production we deliver to the market 
        </p>
      </div>
    

      <div>
        <h3 class="text-lg font-semibold text-white">
          How Big Is The Production?
        </h3>
        <p class="mt-2 text-white">
          We've built in discounts at each tier for teams. The time has come to bring those ideas and plans to life.
        </p>
      </div>
     

     
     
    </div>
  
  </div>
</div>
{/** second */}

<div id="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-white">Interviews</h1>
      <p className="text-center py-8">
        In the dynamic landscape of technology, my commitment to excellence in
        backend development is unwavering. As a seasoned professional, I
        understand the imperative of staying at the forefront of industry
        advancements. My backend projects serve as a testament to this
        dedication, embodying a synthesis of cutting-edge solutions and
        time-tested principles.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img="/boiintog.PNG" title="XXXX" link="https://codenetbeta.com/" />
        <ProjectItem img="/mubugaint.PNG" title="XXXX" link="https://game-hub-shema-paulins-projects-954e3218.vercel.app/" />
      </div>
    </div>
    {/**end second */}
    {/**vision */}
    
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl mx-auto">
  
    <div class="grid gap-12">
      <div>
        <h2 class="text-3xl text-white font-bold lg:text-4xl text-white">
          Our vision
        </h2>
        <p class="mt-3 text-white text-white">
          For as long as there have been cities, the public square has been a fundamental part of the urban landscape - an open, approachable space to meet and engage with friends and neighbours. Space aims to capture this spirit of bringing people together in an exciting, welcoming environment.
        </p>
      </div>

      <div class="space-y-6 lg:space-y-10">
       
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-white text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-white text-white">
              High quality Co-Living spaces
            </h3>
            <p class="mt-1 text-white text-white">
              Our fully furnished spaces are designed and purpose-built with Co-Living in mind, featuring high-end finishes and amenities that go far beyond traditional apartment buildings.
            </p>
          </div>
        </div>
       
        <div class="flex">
          <FaPlane class="flex-shrink-0 mt-2 size-6 text-white text-white" />
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-white text-white">
              Our Production Overseas 
            </h3>
            <p class="mt-1 text-white text-white">
              Our passion is bringing people together. Beyond creating beautiful spaces, we provide shared experiences.
            </p>
          </div>
        </div>
      
        <div class="flex">
          <FaLifeRing class="flex-shrink-0 mt-2 size-6 text-white text-white" />
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-white text-white">
              Local Life Changing
            </h3>
            <p class="mt-1 text-white text-white">
              We worry about the details so that our residents don't have to. From our online application process to simple, all-inclusive billing we aim to make the living experience as effortless as possible.
            </p>
          </div>
        </div>
        
      </div>
    </div>
 
  </div>
</div>

    {/**end vision */}

{/**steps*/}





<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
  
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-white">Our leadership</h2>
  </div>
  
  <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-center sm:flex sm:flex-row sm:items-center">
    <div class="text-center">
      <img class="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover" src="/founder3.JPG" alt="Image Description"/>
      <div class="mt-2 sm:mt-4">
        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg text-neutral-200">
        Mr NGOBOKA David
        </h3>
        <p class="text-xs text-gray-600 sm:text-sm lg:text-base text-neutral-400">
          XXXX
        </p>
      </div>
    </div>
    

    <div class="text-center">
      <img class="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover " src="/"  alt="Image Description"/>
      <div class="mt-2 sm:mt-4">
        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg text-neutral-200">
        Mrs MUTONIWASE Marie Claire
        </h3>
        <p class="text-xs text-gray-600 sm:text-sm lg:text-base text-neutral-400">
          XXXX
        </p>
      </div>
    </div>
    

    <div class="text-center">
      <img class="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover object-top" src='/founder2.JPG' alt="Image Description"/>
      <div class="mt-2 sm:mt-4">
        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg text-neutral-200 md:bg-red">
         Mr BAHUNDE Etiene
        </h3>
        <p class="text-xs text-gray-600 sm:text-sm lg:text-base text-neutral-400">
          XXXX
        </p>
      </div>
    </div>
    

   
  </div>
</div>



    </>
  )
}

export default About