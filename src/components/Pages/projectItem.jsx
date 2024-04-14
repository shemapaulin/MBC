import React from 'react'

const projectItem = ({ img, title, link }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-lime-900 rounded-xl group hover:bg-gradient-to-r from-lime-500 to-[#001b5e]">
    <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
    <div className="hidden group-hover:block absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center"></p>
          <a href={link}>
              <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold  cursor-pointer text-lg" >Watch</p>
          </a>
    </div>
  </div>
  )
}

export default projectItem