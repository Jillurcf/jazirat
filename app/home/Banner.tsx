import React from 'react';
import { Carousel } from 'antd';

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: "60vh", 
  objectFit: 'cover', // Ensures the image covers the container without distortion
};

const Banner: React.FC = () => {
  const images = [
    '/BannerImg5.jpg',
    '/BannerImg1.jpg',
    '/BannerImg2.jpg',
    '/BannerImg3.jpg',
    '/BannerImg4.jpg',
    '/BannerImg7.jpg',
  ];

  return (
    <Carousel arrows autoplay autoplaySpeed={5000}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Banner ${index + 1}`} style={imgStyle} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
