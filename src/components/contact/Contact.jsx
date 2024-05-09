import './contact.scss';
import { FaPhoneVolume, FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import {} from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        Get in touch
      </motion.h1>

      <motion.div
        className='contact-flex'
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className='contact-info'>
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde natus
            non similique fugiat quis laudantium, rem ad modi quia debitis, quae
            harum itaque magnam reiciendis.
          </p>

          <div className='info'>
            <span>
              <FaPhoneVolume className='icon' />
            </span>
            <span>+923152790501</span>
          </div>
          <div className='info'>
            <span>
              <MdEmail className='icon' />
            </span>
            <span>talhatam178@gmail.com</span>
          </div>
          <div className='info'>
            <span>
              <FaLocationDot className='icon' />
            </span>
            <span>Karachi, Pakistan</span>
          </div>
        </div>

        <div className='contact-form'>
          <div>
            <label>Your Name</label>
            <input type='text' id='name' />
          </div>
          <div>
            <label>Your Email</label>
            <input type='email' id='email' />
          </div>
          <div>
            <label>Write Your Message Here</label>
            <textarea rows='12' id='message'></textarea>
          </div>

          <button>Submit now</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
