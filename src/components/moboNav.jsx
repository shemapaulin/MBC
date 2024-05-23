import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="xl:hidden text-primary relative">
      <div className="text-3xl cursor-pointer absolute top-4 right-4" onClick={toggleMenu}>
        {openMenu ? <IoMdClose /> : <CgMenuRight />}
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 flex flex-col justify-center items-center"
      >
        <ul className="flex flex-col justify-center items-center text-black gap-y-8 text-primary font-Primary font-bold text-3xl cursor-pointer w-full">
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/programs">Programs</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
