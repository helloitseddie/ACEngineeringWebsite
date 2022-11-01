import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetWindow from "./getWindow";

const GalleryCarousel = ({ images }) => {
  //   slider settings
  const settings = {
    dots: true,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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

  const { width } = GetWindow();

  return (
    <>
      <Slider
        {...settings}
        style={{ height: width < 700 ? 250 : 450, alignItems: "center" }}
      >
        {images.length > 1 &&
          images.map((image, i) => (
            <div
              className="item"
              data-index={i}
              key={i}
              style={{ height: width < 700 ? 250 : 450 }}
            >
              <div
                className="gallery-item"
                style={{
                  height: width < 700 ? 250 : 450,
                }}
              >
                <div
                  className="img-holder"
                  style={{
                    height: width < 700 ? 250 : 450,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={image.url}
                    alt={i}
                    className="img-meta w-100 tran5s"
                    style={{
                      height: width < 700 ? 250 : 450,
                      width: "100%",
                    }}
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
