import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { motion } from 'framer-motion';

// Import your images
import banner1 from '../assets/logos/home_img/kids.jpg';
import banner2 from '../assets/logos/home_img/kids.jpg';
import banner3 from '../assets/logos/home_img/kids.jpg';

const slideImages = [
  {
    url: banner1,
    caption: "Slide 1: Patna"
  },
  {
    url: banner2,
    caption: "Slide 2: Prayagraj"
  },
  {
    url: banner3,
    caption: "Slide 3: Guwahati"
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="slide-container"
      style={{ margin: '0 auto', maxWidth: '1360px' }}
    >
      <Slide
        indicators
        arrows
        duration={3000} // auto slide every 3 seconds
        transitionDuration={800} // transition effect duration
        easing="ease"
      >
        {slideImages.map((slide, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundImage: `url(${slide.url})`,
                height: '402px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              {/* Bouncy animated caption */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  delay: 0.3,
                }}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  padding: '20px',
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                }}
              >
                {slide.caption}
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slide>
    </motion.div>
  );
};

export default Home;
