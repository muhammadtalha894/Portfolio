import './latestwork.scss';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const LatestWork = () => {
  const previewBtn = useRef();
  const codeBtn = useRef();

  return (
    <div className='latestwork' id='portfolio'>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        My latest work
      </motion.h1>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='cards'
      >
        <div className='latestwork-card'>
          <img src='/pizza.png' alt='' />
          <div className='latestwork-btn'>
            <span>Preview</span>
            <span>Code</span>
          </div>
        </div>
        <div className='latestwork-card'>
          <img src='/realstate.png' alt='' />
          <div className='latestwork-btn'>
            <span>Preview</span>
            <span>Code</span>
          </div>
        </div>

        <div className='latestwork-card'>
          <img src='/blog.png' alt='' />
          <div className='latestwork-btn'>
            <span>Preview</span>
            <span>Code</span>
          </div>
        </div>
        <div className='latestwork-card'>
          <img src='/portfolio.png' alt='' />
          <div className='latestwork-btn'>
            <span>Preview</span>
            <span>Code</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LatestWork;
