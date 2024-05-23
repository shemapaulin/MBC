import { FaHandsHelping, FaBalanceScale, FaStamp, FaBolt } from "react-icons/fa";
import CoffeeValueCoverImage from "../assets/coffeeAI.webp";

const CoreValues = () => {
  return (
    <>
      <section className="py-5 px-4 -mt-10 lg:mt-1">
        <div className="container mx-auto flex flex-col lg:flex-row items-center bg-white rounded-lg p-8 text-black">
          <div className="w-full lg:w-1/2 ">
            <img src={CoffeeValueCoverImage} alt="Coffee Values" className="object-cover w-full h-full " />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h2 className="text-2xl lg:text-4xl inline-block px-8 py-1 text-white bg-black rounded-full text-center lg:text-left  mb-12 p-3">Our Core Values</h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-8">
                <FaBolt className="w-16 h-16 text-yellow-500" />
                <div>
                  <h3 className="text-2xl font-bold">Quality</h3>
                  <p className="mt-4 text-gray-700">We are committed to providing high-quality Bio-Coffee that offers exceptional value to our diverse range of customers.</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <FaStamp className="w-16 h-16 text-red-500" />
                <div>
                  <h3 className="text-2xl font-bold">Customer Commitment</h3>
                  <p className="mt-4 text-gray-700">At Mubuga Bio-Coffee Ltd, we build long-term, mutually beneficial relationships with our customers.</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <FaBalanceScale className="w-16 h-16 text-green-500" />
                <div>
                  <h3 className="text-2xl font-bold">Integrity</h3>
                  <p className="mt-4 text-gray-700">We uphold the highest standards of trust, honesty, and ethical principles in all our actions.</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <FaHandsHelping className="w-16 h-16 text-blue-500" />
                <div>
                  <h3 className="text-2xl font-bold">Teamwork</h3>
                  <p className="mt-4 text-gray-700">We work as a unified team, committed to common goals and embracing healthy conflict to move in the same direction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreValues;
