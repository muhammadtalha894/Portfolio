import './about.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='about-con'>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        id='about/me'
      >
        About me
      </motion.h1>
      <main className='about'>
        <motion.img
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          src='/talha2.JPG'
          alt=''
        />
        <motion.div
          className='about-right'
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
            debitis unde, quidem reprehenderit laboriosam nostrum est quaerat
            asperiores adipisci, consequuntur voluptatem voluptate suscipit ut
            placeat dolore a nobis harum nesciunt. Sunt vitae, delectus fugit
            deserunt impedit quam qui! Pariatur?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eius,
            itaque quos rerum illum aut sint ea aspernatur laudantium modi.
          </p>

          <div className='skills'>
            <div className='about-skills'>
              <h3>HTML & CSS</h3> <div style={{ width: '50%' }}></div>
            </div>
            <div className='about-skills'>
              <h3>JAVASCRIPT</h3> <div style={{ width: '60%' }}></div>
            </div>
            <div className='about-skills'>
              <h3>REACT JS</h3> <div style={{ width: '75%' }}></div>
            </div>
            <div className='about-skills'>
              <h3>NODE JS</h3> <div style={{ width: '65%' }}></div>
            </div>
          </div>
        </motion.div>
      </main>
      <motion.div
        className='about-exp'
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div>
          <h2>0</h2>
          <span>Year of Expereince</span>
        </div>
        <div>
          <h2>10+</h2>
          <span>Project Completed</span>
        </div>
        <div style={{ border: 'none' }}>
          <h2>0</h2>
          <span>happay clients</span>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
