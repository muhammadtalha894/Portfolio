import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import LatestWork from './components/latestwork/LatestWork';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <LatestWork />
      <Contact />
    </div>
  );
};

export default App;
