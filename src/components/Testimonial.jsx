import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import david from "../assets/david.webp";
import boiintog from "../assets/boiintog.webp";
import byuku from "../assets/byuku.webp";
import safi from "../assets/safi.webp";

const Testimonial = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-3xl uppercase font-bold leading-none text-white sm:text-4xl md:mx-auto" data-aos="fade-up">
          <span className="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="1d4040f3-9f3e-4ac7-b117-7d4009658ced" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width="52" height="24" />
            </svg>
          </span>{" "}
          Testimonials
        </h2>
        <p className="text-base text-white md:text-lg ml-2">Hear from our founders and farm workers.</p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 ">
        {[
          {
            name: "Mr Ngoboka David",
            role: "Founder",
            image: david,
            link: "https://www.youtube.com/watch?v=A2CczIrABwU",
          },
          {
            name: "Mrs Safi",
            role: "Farmer",
            image: safi,
            link: "https://www.youtube.com/watch?v=2iaHhbSj_KM",
          },
          {
            name: "Mrs. Mutoniwase Marie Claire",
            role: "Founder",
            image: boiintog,
            link: "https://www.youtube.com/watch?v=A2CczIrABwU",
          },
          {
            name: "Mr Byukusenge",
            role: "Farmer",
            image: byuku,
            link: "https://www.youtube.com/watch?v=IdNHuUxN1kU",
          },
        ].map((person, index) => (
          <div key={index} data-aos="fade-up" className=" border-2 border-gray-100 overflow-hidden">
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img className="object-cover w-full h-56 md:h-64 xl:h-80" src={person.image} alt={person.name} />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">{person.role.toUpperCase()}</p>
                <p className="mb-4 text-lg text-gray-100">{person.name}</p>
                <div className="flex items-center justify-center space-x-3">
                  <Link to={person.link} target="__blank" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
                    <FaYoutube className="text-red-800 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
