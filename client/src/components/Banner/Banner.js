import { React, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Banner.css";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const updateBanner = async () => {
      let data = await fetch("http://localhost:5000/banners");
      let parsedBanners = await data.json();
      setBanners(parsedBanners);
    };

    updateBanner();
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        showArrows={true}
        useKeyboardArrows={true}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={clickHandler}
              className="btn--left btn-banner"
            >
              PREV
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <button
              type="button"
              onClick={clickHandler}
              className="btn--right btn-banner"
            >
              NEXT
            </button>
          )
        }
      >
        {banners.map((banner) => {
          return (
            <div className="carousel" key={banner.id}>
              <img
                className="d-block w-100 carousel-img"
                src={banner.bannerImageUrl}
                alt={banner.bannerImageAlt}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
