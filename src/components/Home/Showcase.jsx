import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// import Img from "dummy/ImgSwiper";
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div
        className="p-0 m-0 home-showcase flex-column"
        style={{
          maxWidth: "100vw",
        }}
      >
        {/* <hr /> */}
        <div>
          <h1>SHOWCASE</h1>
        </div>
        <div className="show w-100 d-flex mx-auto">
          <Swiper
            spaceBetween={6}
            slidesPerView={1}
            loop={true}
            centeredSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {/* {Img.map((val) => {
              return (
                <SwiperSlide>
                  <img src={val.url} alt="" srcset="" />
                </SwiperSlide>
              );
            })} */}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Faq;
