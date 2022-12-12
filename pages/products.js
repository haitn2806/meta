import { useState, useEffect } from "react";
import Layout from "../src/layout/Layout";
import axios from "axios";
import { productSlide } from "../src/sliderProps";

import Detail from "../src/components/Detail";
import Slider from "react-slick";

const test = () => {
  const [c, setc] = useState();

  useEffect(() => {
    axios
      .post(`http://smartwork.3i.com.vn/MobileLogin/GetTreeCategoryData`, {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        setc(response.data);
        // console.log("resp123", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  var obj = new Object();
  Array.prototype.push.apply(obj, c);

  var arr = [];

  for (let i = 0; i < obj.length; i++) {
    for (let j = i; j < obj.length; j++) {
      if (obj[i].ParentId != null && obj[i].ParentId == obj[j].ParentId) {
        arr.push(obj[j]);
      }
    }
  }
  var uniq = [...new Set(arr)];

  let obj1 = uniq.reduce((res, curr) => {
    if (res[curr.ParentId]) res[curr.ParentId].push(curr);
    else Object.assign(res, { [curr.ParentId]: [curr] });

    return res;
  }, {});

  // console.log(obj1[0]);

  const name = [
    "Nhân sự",
    "Khách hàng",
    "Hợp đồng/Đơn hàng",
    "Dự án",
    "Kho dữ liệu & số hóa",
    "Quản trị dịch vụ",
    "Danh mục chung",
    "Bán hàng",
    "Điều hành trung tâm",
    "Tài sản & Mua sắm vận hành",
    "Bảo dưỡng sửa chữa tài sản",
    "Quỹ",
    "Quản lý nội dung",
    "Nhà cung cấp",
    "Báo cáo thống kê",
    "Thông báo",
    "Quản trị người dùng",
    "Quản lý công văn",
    "Kho chứng từ",
  ];

  return (
    <Layout header={1} className="home-one" footer={1}>
      <div
        className=" d-flex align-content-start flex-wrap "
        style={{ paddingTop: "82px" }}
      >
        <div className=" pb-70 rel z-1 " style={{ width: "100%" }}>
          <Slider {...productSlide} className="">
            <div className="product-slide style-two  fadeInUp ">
              <div className="project-iamge">
                <img
                  src="/assets/images/3i/slide-product-1 (1).jpg"
                  alt="Project"
                  style={{ width: "100%", maxHeight: "1000px" }}
                />
              </div>
            </div>
            <div className="product-slide style-two  fadeInUp ">
              <div className="project-iamge">
                <img
                  src="/assets/images/3i/slide-product-1 (2).jpg"
                  alt="Project"
                  style={{ width: "100%", maxHeight: "1000px" }}
                />
              </div>
            </div>
            <div className="product-slide style-two  fadeInUp ">
              <div className="project-iamge">
                <img
                  src="/assets/images/3i/slide-product-1 (3).jpg"
                  alt="Project"
                  style={{ width: "100%", maxHeight: "1000px" }}
                />
              </div>
            </div>
            <div className="product-slide style-two  fadeInUp ">
              <div className="project-iamge">
                <img
                  src="/assets/images/3i/slide-product-1 (4).jpg"
                  alt="Project"
                  style={{ width: "100%", maxHeight: "1000px" }}
                />
              </div>
            </div>
            <div className="product-slide style-two  fadeInUp ">
              <div className="project-iamge">
                <img
                  src="/assets/images/3i/slide-product-1 (5).jpg"
                  alt="Project"
                  style={{ width: "100%", maxHeight: "1000px" }}
                />
              </div>
            </div>
            <div className="product-slide style-two  fadeInUp ">
              <div className="project-iamge">
                <img
                  src="/assets/images/3i/slide-product-1 (6).jpg"
                  alt="Project"
                  style={{ width: "100%", maxHeight: "1000px" }}
                />
              </div>
            </div>
            <div className="product-slide style-two  fadeInUp ">
              <div className="project-iamge">
                <img
                  src="/assets/images/3i/slide-product-1 (7).jpg"
                  alt="Project"
                  style={{ width: "100%", maxHeight: "1000px" }}
                />
              </div>
            </div>
          </Slider>
        </div>

        <div style={{ margin: "auto ", marginTop: "45px" }} className="mt-10">
          {/* <div style={{}}>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              HỆ ĐIỀU HÀNH DOANH NGHIỆP SMARTWORK
            </h3>
          </div> */}

          {/* <img
            alt=""
            src="http://smartwork.3i.com.vn/uploads/images/image_9c0a1908.png"
          /> */}

          {/* <table
            border="0"
            cellpadding="2"
            cellspacing="2"
            style={{ border: "0px solid white", padding: "20px" }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    padding: "10px",
                  }}
                >
                  <img
                    alt=""
                    sizes="100vw"
                    src="undefined"
                    srcset="https://api.asm.skype.com/v1/objects/0-ea-d8-340c22a7513c6e4d15143c9d50ff30d9/views/imgpsh_fullsize_anim"
                    width="850"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                  />
                </td>
                <td
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    padding: "10px",
                  }}
                >
                  <figure class="easyimage easyimage-full">
                    <img
                      alt=""
                      sizes="100vw"
                      src="undefined"
                      srcset="/assets/images/3i/product1.png"
                      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                      width="850"
                    />
                  </figure>
                </td>
                <td
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    padding: "10px",
                  }}
                >
                  <figure class="easyimage easyimage-full">
                    <img
                      alt=""
                      sizes="100vw"
                      src="undefined"
                      srcset="https://api.asm.skype.com/v1/objects/0-ea-d4-0c84dff92bf3c3fcdede16b16bd15df5/views/imgpsh_fullsize_anim"
                      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                      width="850"
                    />
                  </figure>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: "0px",
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: "0px",
                  }}
                >
                  &nbsp;
                </td>
                <td
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: "0px",
                  }}
                >
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>

        <div className="container">
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            DANH MỤC CHỨC NĂNG SMARTWORK
          </h3>

          <div
            className="container d-flex align-content-start flex-wrap  "
            // style={{ padding: "0" }}
          >
            {Object.keys(obj1).map((data, i) => (
              <Detail title={name[i]} data={obj1[data]} id={obj1[data][0]} />
            ))}

            {/* <Detail title="Điều hành trung tâm" data={a1} />
            <Detail title={"Dự án"} data={a2} />
            <Detail title={"Thông báo"} data={a3} />
            <Detail title={"Nhân sự"} data={a4} />
            <Detail title={"Khách hàng"} data={a5} />
            <Detail title={"Kho dữ liệu & số hoá"} data={a6} />
            <Detail title={"Quản lý dịch vụ"} data={a7} />
            <Detail title={"Danh mục chung"} data={a8} />
            <Detail title={"Bán hàng"} data={a9} />
            <Detail title={"Tài sản & Mua sắm vận hành"} data={a10} />
            <Detail title={"Bản dưỡng và sửa chữa tài sản"} data={a11} /> */}
            {/* <Detail title={"Quỹ"} data={a13} />
            <Detail title={"Quản lý nội dung"} data={a14} />
            <Detail title={"Nhà cung cấp"} data={a15} />
            <Detail title={"Báo cáo thống kê"} data={a16} />
            <Detail title={"Quản lý người dùng"} data={a17} />
            <Detail title={"Hợp đồng/Đơn hàng"} data={a18} />
            <Detail title={"Quản lý công văn"} data={a19} />
            <Detail title={"Kho chứng từ"} data={a20} /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default test;

{
  /* <ModalExample />; */
}
