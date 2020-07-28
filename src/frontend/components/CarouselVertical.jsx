import React from 'react';
import '../assets/styles/components/CarouselVertical.scss';

const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">
      {children}
    </div>
  </section>
);

export default Carousel;