
import { FaHandHoldingHeart, FaHandsHelping,FaBalanceScale,FaStamp,FaBolt } from "react-icons/fa";
 
const corevalues = () => {
  return (
    <>
    <br/>
      <section className=" bg-black  text-white ">
        <div className="container mx-auto flex flex-col ">
          <h2 className="py-4 text-3xl font-bold text-center">
            Our Core Values
          </h2>
          <div className="divide-y divide-gray-300">
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center  justify-center lg:col-span-1 col-span-full">
                <FaBolt className="w-16 h-16 text-white" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                Quality
                </span>
                <span className="mt-4  text-gray-100">
                We shall provide quality Bio-Coffee that gives outstanding value to our range of customers 
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <FaStamp className="w-16 h-16 text-white" />
              
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                Customer Commitment
                </span>
                <span className="mt-4  text-gray-100">
                MUBUGA BIO COFFEE Ltd develops long-term and mutually beneficial relationships between our customers and us  
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
              <FaBalanceScale className="w-16 h-16 text-white" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                Integrity 
                </span>
                <span className="mt-4  text-gray-100">
                MUBUGA BIO COFFEE Ltd upholds the highest standard of trust, honesty, moral and ethical principles
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
               <FaHandsHelping className="w-16 h-16 text-white" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                Team Work
                </span>
                <span className="mt-4  text-gray-100">
                We are one team with commitment and healthy conflict, pulling in the same direction.
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
