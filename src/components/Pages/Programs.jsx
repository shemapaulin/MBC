

const Programs = () => {
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
              Programs
      
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



<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">Programs Ahead</h2>
    
  </div>


  
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <a className="group" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://res.cloudinary.com/dwhuyfuxn/image/upload/v1715347468/kabiri_o3nyez.jpg"/>
       
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold   text-white ">
        International Coffee Day
        </h3>
        <p className="mt-3 text-white">
        International Coffee Day is a global celebration of coffee's cultural impact and the millions of people involved in its production,
         from farmers to baristas. Observed on October 1st, it honors the beverage enjoyed by people worldwide.
        </p>
        
      </div>
    </a>
   
    <a className="group" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/5.jpg"/>
        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium  text-white py-1.5 px-3 bg-black/60">
          Sponsored
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-white ">
          Charity Programs
        </h3>
        <p className="mt-3 text-white">
         In partenership with district and sector leaderships, we help community. 
        </p>
        
      </div>
    </a>
    
    <a className="group" href="#">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/mubugagm.webp"/>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-white ">
          Genocide Memorial Program
        </h3>
        <p className="mt-3 text-white">
          During the Genocide memorial period, as all Rwandans we unite to remember as we contribute in many programs of helping servivors.
        </p>
        
      </div>
    </a>
   
  </div>
</div>



<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto bg-white">
  <div class="grid md:grid-cols-2 gap-8">
    <div class="max-w-md">
      <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-lime-600 text-lime-600">Subscribe</h2>
      <p class="mt-3 text-gray-600  text-black">
        Subscribe For New Programs Ahead So that you can be updated anytime....
      </p>
    </div>

    <form>
      <div class="w-full sm:max-w-lg md:ms-auto">
        <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div class="w-full">
            <label for="hero-input" class="sr-only">Search</label>
            <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600" placeholder="Enter your email" />
          </div>
          <a class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Subscribe
          </a>
        </div>
        <p class="mt-3 text-sm text-gray-500 text-neutral-500">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
  </div>
</div>


    </>
  )
}

export default Programs