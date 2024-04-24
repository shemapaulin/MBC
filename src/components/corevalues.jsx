
import { FaShippingFast, FaHandsHelping,FaBalanceScale,FaStamp } from "react-icons/fa";
const corevalues = () => {
  return (
    <>
    <br/>
      <section className=" bg-amber-950  dark:text-gray-100 ">
        <div className="container mx-auto flex flex-col ">
          <h2 className="py-4 text-3xl font-bold text-center">
            Our Core Values
          </h2>
          <div className="divide-y dark:divide-gray-300">
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center  justify-center lg:col-span-1 col-span-full">
                <FaShippingFast className="w-16 h-16 text-lime-600" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  Hard Working
                </span>
                <span className="mt-4  dark:text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam facilis, voluptates error alias dolorem praesentium
                  sit soluta iure incidunt labore explicabo eaque, quia
                  architecto veritatis dolores, enim cons equatur nihil ipsum.
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
               <FaBalanceScale className="w-16 h-16 text-lime-600" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  Loyalty
                </span>
                <span className="mt-4  dark:text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam facilis, voluptates error alias dolorem praesentium
                  sit soluta iure incidunt labore explicabo eaque, quia
                  architecto veritatis dolores, enim cons equatur nihil ipsum.
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
               <FaStamp className="w-16 h-16 text-lime-600" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  Professionalism
                </span>
                <span className="mt-4  dark:text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam facilis, voluptates error alias dolorem praesentium
                  sit soluta iure incidunt labore explicabo eaque, quia
                  architecto veritatis dolores, enim cons equatur nihil ipsum.
                </span>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
               <FaHandsHelping className="w-16 h-16 text-lime-600" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                <span className="text-xl font-bold md:text-2xl">
                  Humanity
                </span>
                <span className="mt-4  dark:text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam facilis, voluptates error alias dolorem praesentium
                  sit soluta iure incidunt labore explicabo eaque, quia
                  architecto veritatis dolores, enim cons equatur nihil ipsum.
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
