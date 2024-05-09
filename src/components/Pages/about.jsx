
import ProjectItem from "./projectItem";
import { FaPlane,FaLifeRing } from 'react-icons/fa';
import forabout from '../../assets/forabout.jpg';

const About = () => {
  return (
    <>
    <div className="pb-10">
      <div
        className="relative bg-gradient-to-r  from-white/[.15]  via-transparent z-10 "style={{
          backgroundImage: `url(https://res.cloudinary.com/dwhuyfuxn/image/upload/v1715346569/beans_erzgez.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
          WHAT ABOUT MUBUGA BIO COFFEE?
        </h3>
        <p class="mt-2 text-white ">
        Mubuga Bio-Coffee is a company that is investing in organic or Bio-Coffee to improve the livelihood 
        of the local population while uplifting the Sector of Mubuga, commonly known by the negative effect of the genocide
         against the Tutsi in 1994. The Mubuga sector has not effectively risen from the ashes of the genocide against the Tutsi as it can be 
         observed when analysing its socio-economic status. Mubuga Bio Coffee comes as
         a workable solution to contribute to reducing the Rwandan trade deficit, while satisfying the world demand of the Bio-Coffee
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
        The Mubuga sector has not effectively risen from the ashes of the genocide against the Tutsi as 
        it can be observed when analyzing its socio-economic data. A coffee farming project would reunify the locals and reduce the
         poverty while reassuring their brighter future. Also our project 
        comes as a workable solution to contribute to reducing the Rwandan trade deficit, while satisfying the world demand of the Bio Coffee.
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
    

      
     

     
     
    </div>
  
  </div>
</div>
{/** second */}

<div id="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-white">Interviews</h1>
      <p className="text-center py-8">
        
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img="https://res.cloudinary.com/dwhuyfuxn/image/upload/v1715346745/boiintog_mjtlcn.png" title="MRS Marie Claire Umutoniwase" link="https://www.youtube.com/watch?v=A2CczIrABwU" />
        <ProjectItem img="https://res.cloudinary.com/dwhuyfuxn/image/upload/v1715346768/rurangwa_cyta3w.png" title="Mr Rurangwa Raphael" link="https://www.youtube.com/watch?v=cu5L-2ffcS0" />
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
        
      </div>

      <div class="space-y-6 lg:space-y-10">
       
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-white text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-white text-white">
              High quality Co-Living spaces
            </h3>
            <p class="mt-1 text-white text-white">
            We shall provide quality Bio-Coffee that gives outstanding value to our range of customers
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
              We shall provide quality Bio-Coffee in either local or grobal industries
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
          Our soil coverage touches to the 3 sectors (Mubuga, Gishyita and Rwankuba) of districts , that exactly means local life changing because we provide jobs to a lot of men and women plus youths. It helps them to increase thier family Economic.
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
  
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 justify-center sm:flex sm:flex-row sm:items-center">
    <div class="text-center">
      <img class="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover" src="https://res.cloudinary.com/dwhuyfuxn/image/upload/v1715346423/david_ldg5re.jpg" alt="Image Description"/>
      <div class="mt-2 sm:mt-4">
        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg text-neutral-200">
        MR. David Ngoboka
        </h3>
        <p class="text-xs text-gray-600 sm:text-sm lg:text-base text-neutral-400">
          Managing Director
        </p>
      </div>
    </div>
    

    <div class="text-center">
      <img class="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover object-top" src="https://res.cloudinary.com/dwhuyfuxn/image/upload/v1715346571/fififoto_a81j62.jpg"  alt="Image Description"/>
      <div class="mt-2 sm:mt-4">
        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg text-neutral-200">
        MRS. Marie Claire Umutoniwase
        </h3>
        <p class="text-xs text-gray-600 sm:text-sm lg:text-base text-neutral-400">
        Director of Administration and Finance

        </p>
      </div>
    </div>
    

    <div class="text-center">
      <img class="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover object-top" src='https://res.cloudinary.com/dwhuyfuxn/image/upload/v1715346490/founder2_sszz7o.jpg' alt="Image Description"/>
      <div class="mt-2 sm:mt-4">
        <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg text-neutral-200 md:bg-red">
        MR. Etienne Bahunde
        </h3>
        <p class="text-xs text-gray-600 sm:text-sm lg:text-base text-neutral-400">
        Head of Production

        </p>
      </div>
    </div>
    

   
  </div>
</div>



    </>
  )
}

export default About