import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

//Icons and assets
import { MenuIcon, X } from "lucide-react";
import assets from "../assets";

// Store imports
import { useThemeStore } from "../store";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink'));
  const Links = ["shop", "the brand", "archives"];

  const {theme} = useThemeStore();

  const setLink = (link) => {
    setActiveLink(link)
    localStorage.setItem("activeLink", link)
  }

  const linkElements = Links.map((link) => {
    const route =
      link === "the brand"
        ? "/"
        : `/${link.replace(/\s+/g, "-").toLowerCase()}`;
    return (
      <Link
        className={`relative h-full flex items-center text-neutral-400 
        hover:text-neutral-600
        transition-all
        duration-100
        uppercase
        after:transition-all after:duration-300 after:ease-in-out
        after:content-[''] after:absolute after:bottom-0 after:left-0
        after:w-full after:h-[2px]
        ${
          activeLink === link
            ? "after:bg-neutral-900 dark:after:bg-white text-neutral-900 dark:text-white"
            : "after:bg-transparent"
        }`}
        to={route}
        key={link}
        onClick={() => setLink(link)}
      >
        {link}
      </Link>
    );
  });

  function handleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="sticky top-0 z-20"
    >
      <div
        className="flex items-center justify-between h-16 lg:h-20 font-bold text-neutral-400 bg-[white]/60 dark:bg-[black]/0 backdrop-blur-2xl
       border-b dark:border-b-neutral-800 border-b-neutral-200 px-5 lg:px-15 text-sm tracking-tight"
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <Link to={"/"}>

        <img src={theme === 'light' ? assets.pcblack : assets.pcbwhite} alt="pencilboy.png" className="w-10" />

          </Link>
        </div>
        <nav className="space-x-10 text-sm h-full items-center hidden lg:flex">
          {linkElements}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <p>CART</p>
        </div>
        <div className="block lg:hidden" onClick={handleMenu}>
          <MenuIcon />
        </div>
      </div>

      {/*Sidebar for mobile screens*/}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 right-0 bg-[black]/50 w-screen h-screen z-30 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-5 bg-white dark:bg-neutral-800 w-1/2 h-full absolute top-0 right-0 z-50"
            >
              <div
                className="my-1 mb-3 w-full flex justify-end"
                onClick={() => setIsMenuOpen(false)}
              >
                <X />
              </div>
              <div className="space-y-5 tracking-wider">{linkElements}</div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
