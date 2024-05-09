import './navbar.scss';

import { RiMenu3Line } from 'react-icons/ri';

import { IoMdClose } from 'react-icons/io';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const menuref = useRef();

  const openMenu = () => {
    menuref.current.style.right = '0';
  };
  const closeMenu = () => {
    menuref.current.style.right = '-350px';
  };
  return (
    <div className='navbar'>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className='navbarH1'
      >
        Talh <span>a</span>
      </motion.h1>

      <RiMenu3Line className='nav-mob-open' onClick={openMenu} />

      <ul ref={menuref} className='nav-menu'>
        <IoMdClose className='nav-mob-close' onClick={closeMenu} />
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about/me'>About Me</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.6 }}
      >
        Connect With Me
      </motion.div>
    </div>
  );
};

export default Navbar;
