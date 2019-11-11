import React from 'react'
import Slider from 'react-slick';

const defaultSliderProps = {
  arrows: true,
  infinite: true,
  speed: 500,
  swipe: false
}

const CustomSlider = ({ children, ...props }) => {
  return (
    <Slider {...defaultSliderProps} {...props}>
      {children}
    </Slider>
  )
}

export default CustomSlider
