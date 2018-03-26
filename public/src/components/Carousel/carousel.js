import React, { Component } from 'react';
import Slider from 'react-slick';
import { SlideImage } from './carousel-styles';

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <svg className="carousel-arrow-prev" onClick={onClick}>
      <polygon points="20,40 0,20 20,0 21,0 1,20 21,40"></polygon>
    </svg>
  );
}

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
      <svg className="carousel-arrow-next" onClick={onClick}>
        <polygon points="20,40 40,20 20,0 19,0 39,20 19,40"></polygon>
      </svg>
  );
}

export default class Carousel extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0);
  }

  render() {
    var settings = {
      dots: true,
      dotsClass: 'slick-dots',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };
    const slideUrls = ['../img/carousel_1.png', '../img/carousel_2.png', '../img/carousel_3.png', '../img/carousel_4.png'];
    const Slides = slideUrls.map((url) => {
      return <div key={url}><SlideImage url={url} /></div>
    });
    return (
      <Slider ref="slick" {...settings}>
        {Slides}
      </Slider>
    );
  }
}