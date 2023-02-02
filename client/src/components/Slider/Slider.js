import { React, useState } from 'react';
import { ReactComponent as LeftArrow } from './leftArrow.svg';
import { ReactComponent as RightArrow } from './rightArrow.svg';

import './Slider.css';

export const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  let length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    length = 0;
  }

  return (
    <div className="slider">
      <div className="icons">
        <div className="arrow_block_left" onClick={prevSlide}>
          <LeftArrow className="left_arrow" />
        </div>
        <div className="arrow_block_right" onClick={nextSlide}>
          <RightArrow className="right_arrow" />
        </div>
      </div>
      {props.slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide_active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img className="image" alt="slide img" src={slide.image}></img>
            )}
          </div>
        );
      })}
    </div>
  );
};
