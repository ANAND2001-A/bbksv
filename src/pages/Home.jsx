import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// Import your images
import banner1 from '../assets/school.jpg';
import banner2 from '../assets/school1.jpg';
import banner3 from '../assets/school.jpg';

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

const Slider = () => {
  return (
    <div className="slide-container" style={{ margin: '0 auto', maxWidth: '1360px' }}>
      <Slide indicators arrows>
        {slideImages.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.url})`,
                height: '402px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Optionally add caption */}
              {/* <div style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#fff',
                padding: '20px',
                textAlign: 'center',
                fontSize: '1.5rem',
              }}>{slide.caption}</div> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
