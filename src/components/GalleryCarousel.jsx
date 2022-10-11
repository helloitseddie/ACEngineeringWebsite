import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryCarousel = ({images}) => {
  //   slider settings
  const settings = {
    dots: true,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {images.length > 1 && images.map((image, i) => (
          <div className="item" data-index={i} key={i}>
            <div className="gallery-item ">
              <div className="img-holder">
                <img
                  src={image.url}
                  alt={i}
                  className="img-meta w-100 tran5s"
                  style={{width: "100%"}}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default GalleryCarousel;