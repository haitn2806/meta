import Link from "next/link";
import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";
import a from "./../../../public/assets/images/3i/slide1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

// import required modules

const Hero1 = () => {
  const [hide, setHide] = useState(false);

  const props = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  // console.log("a", hide);

  return (
    <div className="hero-slide" onClick={() => setHide(!hide)}>
      <div className={hide ? "hide-slide" : "description-on-swiper"}>
        <div class="container swiper-description-text">
          <h1 class="box-title">
            LEADING SOFTWARE OUTSOURCING COMPANY IN VIETNAM
          </h1>
          <div
            class="box-description"
            onclick="window.open('https://saigontechnology.com/blog/sao-khue-biggest-award-of-vietnam-software-industry','_blank');"
            style={{ cursor: "pointer" }}
          >
            <h2>
              Certification of Excellence in Software Outsourcing - by Vietnam
              Software Association
            </h2>
          </div>
          <div class="box-service">
            <div class="group-introduce">
              <div class="custom-service-first item-service">
                <div class="circle-service">
                  <p class="number">30</p>
                </div>
                <span class="title-service">SOFTWARE ENGINEERS</span>
              </div>
              <div class="custom-service-mid item-service">
                <div class="circle-service">
                  <p class="number">1</p>
                </div>
                <span class="title-service">YEARS IN BUSINESS</span>
              </div>
              <div class="custome-service-last item-service">
                <div class="circle-service">
                  <p class="number">2</p>
                </div>
                <span
                  class="title-service-last"
                  style={{
                    width: "134px",
                    lineHeight: "10px",
                  }}
                >
                  SOFTWARE OUTSOURCING DEVELOPMENT CENTERS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        pagination={{
          clickable: true,
        }}
        cssMode={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/slide3i1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/slide3i2.jpg" height="500px" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/6(3).png" height="500px" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/2.png" height="500px" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/3.png" height="500px" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/4.png" height="500px" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/slide3i4.jpg" height="500px" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/slide3i5.jpg" height="500px" />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/slide3i6.jpg" height="500px" />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/slide3i7.jpg" height="500px" />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/6.png" height="500px" />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide></SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="/assets/images/3i/slide11.png" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
export default Hero1;
