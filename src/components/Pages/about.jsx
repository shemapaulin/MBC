import React from 'react'
import ProjectItem from "./projectItem";


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
            <h1 className="block font-medium text-white text-4xl sm:text-5xl md:text-6xl lg:text-5xl animated-slideInBottom">
              About 
           {/** <TypeAnimation
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
              **/}
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
    <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-amber-950 dark:text-amber-950">
      Frequently Asked Questions About Mubuga Bio Coffee
    </h2>
  </div>
 

  <div class="max-w-5xl mx-auto  dark:text-amber-950">
 
    <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
      <div>
        <h3 class="text-lg font-semibold text-amber-950  dark:text-amber-950">
          When/Why Did Mubuga Bio Coffee Born?
        </h3>
        <p class="mt-2 text-amber-950 dark:text-amber-950 ">
          Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
        </p>
      </div>
      

      <div>
        <h3 class="text-lg font-semibold text-amber-950 dark:text-amber-950">
          What Was The Main Purpose?
        </h3>
        <p class="mt-2 text-amber-950 dark:text-amber-950">
          Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
        </p>
      </div>
   

      <div>
        <h3 class="text-lg font-semibold text-amber-950 dark:text-amber-950">
          Why Mubuga Location?
        </h3>
        <p class="mt-2 text-amber-950 dark:text-amber-950">
          Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
        </p>
      </div>


      <div>
        <h3 class="text-lg font-semibold text-amber-950 dark:text-amber-950">
          What About The Impact?
        </h3>
        <p class="mt-2 text-amber-950 dark:text-amber-950">
          Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
        </p>
      </div>
    

      <div>
        <h3 class="text-lg font-semibold text-amber-950 dark:text-amber-950">
          How Big Is The Production?
        </h3>
        <p class="mt-2 text-amber-950 dark:text-amber-950">
          We've built in discounts at each tier for teams. The time has come to bring those ideas and plans to life.
        </p>
      </div>
     

      <div>
        <h3 class="text-lg font-semibold text-amber-950 dark:text-amber-950">
          Why Charitty Programs?
        </h3>
        <p class="mt-2 text-amber-950 dark:text-amber-950">
          We offer refunds. We aim high at being focused on building relationships with our clients and community.
        </p>
      </div>
     
    </div>
  
  </div>
</div>
{/** second */}

<div id="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-amber-900">Interviews</h1>
      <p className="text-center py-8">
        In the dynamic landscape of technology, my commitment to excellence in
        backend development is unwavering. As a seasoned professional, I
        understand the imperative of staying at the forefront of industry
        advancements. My backend projects serve as a testament to this
        dedication, embodying a synthesis of cutting-edge solutions and
        time-tested principles.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img="/boiintog.PNG" title="Mrs mama Lyna" link="https://codenetbeta.com/" />
        <ProjectItem img="/mubugaint.PNG" title="Kanyandekwe" link="https://game-hub-shema-paulins-projects-954e3218.vercel.app/" />
      </div>
    </div>
    {/**end second */}
    {/**vision */}
    
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl mx-auto">
  
    <div class="grid gap-12">
      <div>
        <h2 class="text-3xl text-amber-900 font-bold lg:text-4xl dark:text-amber-900">
          Our vision
        </h2>
        <p class="mt-3 text-amber-900 dark:text-amber-900">
          For as long as there have been cities, the public square has been a fundamental part of the urban landscape - an open, approachable space to meet and engage with friends and neighbours. Space aims to capture this spirit of bringing people together in an exciting, welcoming environment.
        </p>
      </div>

      <div class="space-y-6 lg:space-y-10">
       
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-amber-900 dark:text-amber-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-amber-900 dark:text-amber-900">
              High quality Co-Living spaces
            </h3>
            <p class="mt-1 text-amber-900 dark:text-amber-900">
              Our fully furnished spaces are designed and purpose-built with Co-Living in mind, featuring high-end finishes and amenities that go far beyond traditional apartment buildings.
            </p>
          </div>
        </div>
       
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-amber-900 dark:text-amber-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-amber-900 dark:text-amber-900">
              Fostering vibrant communities
            </h3>
            <p class="mt-1 text-amber-900 dark:text-amber-900">
              Our passion is bringing people together. Beyond creating beautiful spaces, we provide shared experiences.
            </p>
          </div>
        </div>
      
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-amber-900 dark:text-amber-900" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-amber-900 dark:text-amber-900">
              Simple and all-inclusive
            </h3>
            <p class="mt-1 text-amber-900 dark:text-amber-900">
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

<section className="dark:bg-[#fef9c3] dark:text-amber-900">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-lime-900">
					<h3 className="text-3xl font-semibold">Plantation</h3>
					<span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">process....</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-900">
						<h3 className="text-xl font-semibold tracking-wide">Donec porta enim vel </h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-600">Dec 2020</time>
						<p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]  before:dark:bg-lime-900">
						<h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-600">Jul 2019</time>
						<p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-lime-900">
						<h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-600">Jan 2016</time>
						<p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default About