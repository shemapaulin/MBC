
import { FaYoutube } from 'react-icons/fa'
import p3 from '../assets/p3.jpg'
import { Link } from 'react-router-dom'

const Testimonial = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  lg:py-20" >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
       
        <h2 className="max-w-lg dark:white mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto" data-aos="fade-up">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            
          </span>{' '}
          Testimonies
        </h2>
        <p className="text-base text-white md:text-lg">
          Founders and Farm workers
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="" data-aos="fade-down">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/david.PNG"
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                FOUNDER
              </p>
              <p className="mb-4 text-xs text-gray-100"></p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
                
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <Link to='https://www.youtube.com/watch?v=A2CczIrABwU'>
                  <FaYoutube className='text-red-800 w-5 h-5 ' />
                  </Link>
                </a>
               
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='safi.PNG'
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                FARMER
              </p>
              <p className="mb-4 text-xs text-gray-100"></p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
               
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <Link to='https://www.youtube.com/watch?v=2iaHhbSj_KM'>
                  <FaYoutube className='text-red-800 w-5 h-5 '/>
                  </Link>
                </a>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src='/boiintog.PNG'
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                FOUNDER
              </p>
              <p className="mb-4 text-xs text-gray-100"></p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
                
              </p>
              <div className="flex items-center justify-center space-x-3">
             
                 <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                   <Link to='https://www.youtube.com/watch?v=A2CczIrABwU'>
                  <FaYoutube className='text-red-800 w-5 h-5 '/>
                  </Link>
                </a>
                
               
              </div>
            </div>
          </div>
        </div>
        
       
       
        <div data-aos="fade-down">
          <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
              className="object-cover sm:object-cover w-full h-56 md:h-64 xl:h-80"
              src='/byuku.PNG'
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                FARMER
              </p>
              <p className="mb-4 text-xs text-gray-100"></p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
                
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.youtube.com/watch?v=IdNHuUxN1kU"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <Link to='https://www.youtube.com/watch?v=IdNHuUxN1kU'>
                  <FaYoutube className='text-red-800 w-5 h-5 ' />
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial