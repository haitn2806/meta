import React from "react";
import Slider from "react-slick";
import { productSlide } from "../../sliderProps";

const MlSlide = () => {
  return (
    <div className="container pt-130">
      <div className="ml-slide-content">
        <div className="slide-left">
          <div className="slide-left-content">
            <div className="children-content-slide">
              <div className="name-content-slide">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
                  width={"40px"}
                />
                &nbsp; Lập trình
              </div>
            </div>
            <div className="children-content-slide">
              <div className="name-content-slide">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/897/897368.png"
                  width={"40px"}
                />
                &nbsp; Toán
              </div>
            </div>{" "}
            <div className="children-content-slide">
              <div className="name-content-slide">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/8017/8017848.png"
                  width={"40px"}
                />
                &nbsp; Ngữ Văn
              </div>
            </div>{" "}
            <div className="children-content-slide">
              <div className="name-content-slide">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/4178/4178684.png"
                  width={"40px"}
                />
                &nbsp; Sinh học
              </div>
            </div>{" "}
            <div className="children-content-slide">
              <div className="name-content-slide">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/2995/2995101.png"
                  width={"40px"}
                />
                &nbsp; Âm nhạc
              </div>
            </div>
            <div className="children-content-slide">
              <div className="name-content-slide">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/869/869196.png"
                  width={"40px"}
                />
                &nbsp; Địa lý
              </div>
            </div>
            <div className="children-content-slide">
              <div className="name-content-slide">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/1825/1825357.png"
                  width={"40px"}
                />
                &nbsp; Lịch sử
              </div>
            </div>
            <div className="children-content-slide">
              <div className="name-content-slide">
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/5309/5309804.png"
                  width={"40px"}
                />
                &nbsp; Tiếng Anh
              </div>
            </div>
          </div>
        </div>
        <div className="slide-right">
          {/* <Slider {...productSlide}>
            <div>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/3703/3703689.png"
              />
            </div>
            <div>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/3703/3703689.png"
              />
            </div>
            <div>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/3703/3703689.png"
              />
            </div>
            <div>
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/3703/3703689.png"
              />
            </div>
          </Slider> */}
          <iframe className="slide-right-content" src="https://www.youtube.com/embed/5QFJFWNlchs" title="Dở khóc, dở cười trước những rủi ro khi mua hàng online VTV24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default MlSlide;
