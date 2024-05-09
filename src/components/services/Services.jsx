import './services.scss';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className='services' id='services'>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        Services
      </motion.h1>

      <motion.div
        className='card'
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <div className='services-card'>
          <h2>01</h2>
          <h2 className='card-title'>Web development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
            vitae voluptate sequi illo. Fuga architecto laborum...
          </p>
        </div>
        <div className='services-card'>
          <h2>01</h2>
          <h2 className='card-title'>Web development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
            vitae voluptate sequi illo. Fuga architecto laborum...
          </p>
        </div>
        <div className='services-card'>
          <h2>01</h2>
          <h2 className='card-title'>Web development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
            vitae voluptate sequi illo. Fuga architecto laborum...
          </p>
        </div>
        <div className='services-card'>
          <h2>01</h2>
          <h2 className='card-title'>Web development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
            vitae voluptate sequi illo. Fuga architecto laborum...
          </p>
        </div>
        <div className='services-card'>
          <h2>01</h2>
          <h2 className='card-title'>Web development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
            vitae voluptate sequi illo. Fuga architecto laborum...
          </p>
        </div>
        <div className='services-card'>
          <h2>01</h2>
          <h2 className='card-title'>Web development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum
            vitae voluptate sequi illo. Fuga architecto laborum...
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
