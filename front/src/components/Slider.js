import React from "react";
import SlideShow from "react-slick";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://i.ytimg.com/vi/gTeNTl74ajk/maxresdefault.jpg',
        'https://territoriosgastronomicos.uai.com.br/wp-content/uploads/sites/3/2019/10/queijo-dinho-e1571686635829-1280x720.jpg',
        'https://i.pinimg.com/originals/59/93/74/599374087b244af8c4c5efacbaea8ea6.jpg',
        'https://bhaz.com.br/wp-content/uploads/2019/10/queijo-minas-1280x720.jpg',
      ]
    }
  }
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      centerPadding: "20%",

      // fade: true,
      slidesToShow: 1,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear",
      dots: true,
      responsive: [{
          breakpoint: 997,
          settings: {
            centerPadding: "20px",
          }
        }]
    }
    return (
      <div className="slider">
        <div>
          <SlideShow {...settings}>
            {this.state.images.map((image, i) => (
              <img src={image} key={i}></img>
            ))}
          </SlideShow>
        </div>
      </div>
    );
  }
}