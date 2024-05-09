import './hero.scss';
import { motion } from 'framer-motion';

const Hero = () => {
  function handleOnResume() {
    window.open('My_Resume.pdf', '_blank');
  }
  function handleOnWhatsApp() {
    window.open('https://wa.me/+923152790501?text=Hello%20there', '_blank');
  }
  return (
    <div className='hero'>
      <motion.img
        src='/hero.jpg'
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 10, opacity: 1 }}
        transition={{ duration: 0.2 }}
        alt=''
        className='hero-img'
      />
      <motion.h1
        className='hero-h1'
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <span>I'm Muhammad Talha,</span> mern stack developer based in Pakistan.
      </motion.h1>
      <motion.p
        className='hero-p'
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        I'm mern stack developer from karachi, Pakistan Lorem ipsum dolor sit
        amet consectetur Lorem ipsum dolor sit. Lorem ipsum dolor sit.
      </motion.p>
      <div className='hero-btn'>
        <motion.span
          onClick={handleOnWhatsApp}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          Connet with me
        </motion.span>
        <motion.span
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0 }}
          className='resume-btn'
          onClick={handleOnResume}
        >
          {' '}
          My resume
        </motion.span>
      </div>
    </div>
  );
};

export default Hero;
