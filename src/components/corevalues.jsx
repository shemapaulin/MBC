
import { FaShippingFast, FaHandsHelping,FaBalanceScale,FaStamp } from "react-icons/fa";
const corevalues = () => {
  return (
    <>
    <br/>
      <section className=" bg-black  dark:text-white ">
        <div className="container mx-auto flex flex-col ">
          <h2 className="py-4 text-3xl font-bold text-center">
            Our Core Values
          </h2>
          <div className="divide-y dark:divide-gray-300">
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center  justify-center lg:col-span-1 col-span-full">
                <FaShippingFast className="w-16 h-16 text-white" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  Hard Working
                </span>
                <span className="mt-4  dark:text-gray-100">
                  As we're highly ambitioned company, we do our best to deliver the orders as fast as we can. our workers they're well treated so highly encouraged 
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
               <FaBalanceScale className="w-16 h-16 text-white" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  Loyalty
                </span>
                <span className="mt-4  dark:text-gray-100">
                 we're among of trustable companies in country, during partenership with our parterners and also between us and our clients, we go for loyalty  
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
               <FaStamp className="w-16 h-16 text-white" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  Professionalism
                </span>
                <span className="mt-4  dark:text-gray-100">
                 Our profesionalism appears when it comes about quality of coffee and goals or vision of ours  
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
               <FaHandsHelping className="w-16 h-16 text-white" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  Humanity
                </span>
                <span className="mt-4  dark:text-gray-100">
                we improve the livelihood of the local population
         while uplifting the Sector of Mubuga, commonly known by the negative effect of the genocide against the Tutsi in 1994
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default corevalues;
