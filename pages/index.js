import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Counter from "../src/components/Counter";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";
import Hero1 from "../src/components/home1/Hero1";
import RecentProjects from "../src/components/home1/RecentProjects";
import InfoContact from "../src/components/InfoContact";
import Layout from "../src/layout/Layout";
import MapCustomer from "../src/layout/MapCustomer";
import Hero from "../src/components/home1/Hero";
import MlSlide from "../src/components/meta-learn/Ml-Slide";
import Subject from "../src/components/meta-learn/subjects";

const Index = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .post(`http://smartwork.3i.com.vn/HomePage/GetMainMenu`)
      .then(function (response) {
        // console.log("response1", response.data[2].children);
        setData(response.data[2].children);
        setProduct(response.data[1].children);
        // console.log("content", content);
      });
  }, []);

  // console.log("data", product);

  const img = [
    "http://smartwork.3i.com.vn/uploads/Images/offshore-development_2df89c44.svg",
    "http://smartwork.3i.com.vn/uploads/Images/custom-development_0e355fcb.svg",
    "http://smartwork.3i.com.vn/uploads/Images/outsource-development_fb2b67c4.svg",
    "http://smartwork.3i.com.vn/uploads/Images/software_product_19724006.svg",
    "http://smartwork.3i.com.vn/uploads/Images/web-development_4b066ac7.svg",
    "http://smartwork.3i.com.vn/uploads/Images/database-migration_29dc6527.svg",
    "http://smartwork.3i.com.vn/uploads/Images/app-development_638cc82b.svg",
    "http://smartwork.3i.com.vn/uploads/Images/software-tesing_6fb39535.svg",
  ];

  return (
    <Fragment>
      <Layout header={1} className="home-one" footer={1}>
        {/* <Hero1 /> */}
        <MlSlide />

        <RecentProjects data={product} id={product.id} />

        <Subject />

        {/* <section className="statistics-area-three bgs-cover pb-20 rel z-1 mt-30">
          <div className="container">
            <div className="col-lg-12">
              <div className="statistics-three-content rmb-65 wow fadeInRight delay-0-2s">
                <div
                  className="row justify-content-center justify-content-xl-start"
                  style={{ marginRight: "0" }}
                >
                  <div className="col-xl-12">
                    <div className="section-title text-center mb-60">
                      <span className="border-title mb-15">
                        <div> dịch vụ</div>
                        <span className="triangle"></span>
                      </span>
                    </div>
                  </div>
                  {data.map((data, idx) => (
                    <Link
                      href={{
                        pathname: "/services/[id]",
                        query: { id: data.id },
                      }}
                    >
                      <div
                        className="col-xl-3 col-lg-6 col-md-4 col-sm-6"
                        style={{ marginBottom: " 30px", display: "contents" }}
                      >
                        <div
                          className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-3s home-ser service-card"
                          style={{ "border-radius": "5px" }}
                        >
                          <div
                            style={{ height: "100%"}}
                          >
                            <img
                              alt=""
                              src={img[idx]}
                              style={{ marginLeft: "16%", maxWidth: "67%" }}
                            />
                            <h5
                              style={{ marginTop: "10px", marginLeft: "16%" }}
                            >
                              {data.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="work-process-area  rel z-1 mt-30">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-20 wow fadeInUp delay-0-2s">
                  <span className="border-title mb-15">
                    <div>khách hàng</div>
                    <span className="triangle"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <MapCustomer /> */}

        {/* <InfoContact /> */}
      </Layout>
    </Fragment>
  );
};
export default Index;
