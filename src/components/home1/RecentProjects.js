import Link from "next/link";
import Slider from "react-slick";
import { projectThreeActive } from "../../sliderProps";

const RecentProjects = ({ data }) => {
  return (
    <section
      className="project-area-three  pt-30 rel z-1 container"
      id="project"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg10">
            <div className="section-title text-center mb-50  fadeInUp ">
              {/* <h2>Information - Intelligent - Innovation </h2> */}
              <span className="border-title mb-15">
                <div> DANH SÁCH KHOÁ HỌC</div>
                <span className="triangle"></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <input /> */}
      <div
        className="nav-search pb-15"
        style={{ display: "flex", marginLeft: "20px", marginTop: "-20px" }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "50%",
            marginBottom: "20px",
          }}
          className="search-header"
        >
          <input
            className="input-header"
            placeholder="Tìm khoá học"
            // style={{position: "relative",}}
          />{" "}
          <button
            className="far fa-search"
            style={{
              position: "absolute",
              top: "27%",
              right: "1.5%",
              "font-size": "20px",
            }}
            onClick={() => setShow(!show)}
          />
        </div>
      </div>
      <div className="list-product">
        <div
          className="ml-project-item style-two  fadeInUp "
          style={{ position: "relative" }}
        >
          <div>
            <div className="project-iamge">
              <div style={{ height: "100%" }}>
                <img
                  style={{ objectFit: "cover" }}
                  src="assets/images/about/about-one.jpg"
                  height="250px"
                  width="100%"
                  alt="Project"
                />
              </div>
            </div>
            <div className="course-content">
              <h6 className="name-course">
                {" "}
                Learning Python for Data Analysis and VisualizationData Analysis
                and VisualizationData Analysis and Visualization{" "}
              </h6>
              <div className="author-course">Dr. Angela Yu</div>
              <div className="stars-buyer">
                <div className="percent-stars">4</div>
                <div className="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div className="buyer">(4079)</div>
              </div>
              <div className="course-price">₫2,199,000</div>
              <div className="box-sale">Bestseller</div>
            </div>
          </div>
          <div className="box-description">
            <h5 className="box-name">
              Learning Python for Data Analysis and Visualization
            </h5>
            <div className="sale-date">
              <div className="box-sale">Bestseller</div>
              <div className="box-date"> Updated September 2019</div>
            </div>
            <div className="time-level">
              <span>21 total hourss</span>
              <span>All Level</span>
              <span>Subtitles</span>
            </div>
            <h6 className="description">
              Learn python and how to use it to analyze,visualize and present
              data. Includes tons of sample code and hours of video!
            </h6>
            <ul className="list-card">
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
            </ul>
            <div className="addcart-wishlist">
              <div className="box-cart">Add to cart</div>

              <button className="far fa-heart heart"></button>
            </div>
          </div>
        </div>
        <div
          className="ml-project-item style-two fadeInUp "
          style={{ position: "relative" }}
        >
          <div>
            <div className="project-iamge">
              <div style={{ height: "100%" }}>
                <img
                  style={{ objectFit: "cover" }}
                  src="assets/images/background/video-bg.jpg"
                  height="250px"
                  width="100%"
                  alt="Project"
                />
              </div>
            </div>
            <div className="course-content">
              <h6 className="name-course">
                {" "}
                Art Fundamentals: Foundations of Painting and Drawing Course{" "}
              </h6>
              <div className="author-course">Dr. Angela Yu</div>
              <div className="stars-buyer">
                <div className="percent-stars">5</div>
                <div className="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div className="buyer">(4079)</div>
              </div>
              <div className="course-price">₫3,199,000</div>
              <div className="box-sale">Bestseller</div>
            </div>
          </div>
          <div className="box-description">
            <h5 className="box-name">
              Learning Python for Data Analysis and Visualization
            </h5>
            <div className="sale-date">
              <div className="box-sale">Bestseller</div>
              <div className="box-date"> Updated September 2019</div>
            </div>
            <div className="time-level">
              <span>21 total hourss</span>
              <span>All Level</span>
              <span>Subtitles</span>
            </div>
            <h6 className="description">
              Learn python and how to use it to analyze,visualize and present
              data. Includes tons of sample code and hours of video!
            </h6>
            <ul className="list-card">
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
            </ul>
            <div className="addcart-wishlist">
              <div className="box-cart">Add to cart</div>

              <button className="far fa-heart heart"></button>
            </div>
          </div>
        </div>
        <div
          className="ml-project-item style-two fadeInUp "
          style={{ position: "relative" }}
        >
          <div>
            <div className="project-iamge">
              <div style={{ height: "100%" }}>
                <img
                  style={{ objectFit: "cover" }}
                  src="assets/images/about/about.jpg"
                  height="250px"
                  width="100%"
                  alt="Project"
                />
              </div>
            </div>
            <div className="course-content">
              <h6 className="name-course">
                {" "}
                Art for Kids & Beginners: 15 Easy Drawing & Painting Lessons{" "}
              </h6>
              <div className="author-course">Dr. Angela Yu</div>
              <div className="stars-buyer">
                <div className="percent-stars">4</div>
                <div className="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div className="buyer">(4079)</div>
              </div>
              <div className="course-price">₫299,000</div>
              <div className="box-sale">Bestseller</div>
            </div>
          </div>
          <div className="box-description">
            <h5 className="box-name">
              Learning Python for Data Analysis and Visualization
            </h5>
            <div className="sale-date">
              <div className="box-sale">Bestseller</div>
              <div className="box-date"> Updated September 2019</div>
            </div>
            <div className="time-level">
              <span>21 total hourss</span>
              <span>All Level</span>
              <span>Subtitles</span>
            </div>
            <h6 className="description">
              Learn python and how to use it to analyze,visualize and present
              data. Includes tons of sample code and hours of video!
            </h6>
            <ul className="list-card">
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
            </ul>
            <div className="addcart-wishlist">
              <div className="box-cart">Add to cart</div>

              <button className="far fa-heart heart"></button>
            </div>
          </div>
        </div>
        <div
          className="ml-project-item style-two fadeInUp "
          style={{ position: "relative" }}
        >
          <div>
            <div className="project-iamge">
              <div style={{ height: "100%" }}>
                <img
                  style={{ objectFit: "cover" }}
                  src="assets/images/about/best-skills.jpg"
                  height="250px"
                  width="100%"
                  alt="Project"
                />
              </div>
            </div>
            <div className="course-content">
              <h6 className="name-course">
                {" "}
                The Ultimate Drawing Course - Beginner to Advanced{" "}
              </h6>
              <div className="author-course">Dr. Angela Yu</div>
              <div className="stars-buyer">
                <div className="percent-stars">4</div>
                <div className="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div className="buyer">(4079)</div>
              </div>
              <div className="course-price">₫2,199,000</div>
              <div className="box-sale">Bestseller</div>
            </div>
          </div>
          <div className="box-description">
            <h5 className="box-name">
              The Ultimate Drawing Course - Beginner to Advanced
            </h5>
            <div className="sale-date">
              <div className="box-sale">Bestseller</div>
              <div className="box-date"> Updated September 2019</div>
            </div>
            <div className="time-level">
              <span>21 total hourss</span>
              <span>All Level</span>
              <span>Subtitles</span>
            </div>
            <h6 className="description">
              Learn python and how to use it to analyze,visualize and present
              data. Includes tons of sample code and hours of video!
            </h6>
            <ul className="list-card">
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
            </ul>
            <div className="addcart-wishlist">
              <div className="box-cart">Add to cart</div>

              <button className="far fa-heart heart"></button>
            </div>
          </div>
        </div>
        <div
          className="ml-project-item style-two fadeInUp "
          style={{ position: "relative" }}
        >
          <div>
            <div className="project-iamge">
              <div style={{ height: "100%" }}>
                <img
                  style={{ objectFit: "cover" }}
                  src="assets/images/about/statictics.jpg"
                  height="250px"
                  width="100%"
                  alt="Project"
                />
              </div>
            </div>
            <div className="course-content">
              <h6 className="name-course">
                {" "}
                Learning Python for Data Analysis and Visualization{" "}
              </h6>
              <div className="author-course">Dr. Angela Yu</div>
              <div className="stars-buyer">
                <div className="percent-stars">4</div>
                <div className="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div className="buyer">(4079)</div>
              </div>
              <div className="course-price">₫2,199,000</div>
              <div className="box-sale">Bestseller</div>
            </div>
          </div>
          <div className="box-description">
            <h5 className="box-name">
              Learning Python for Data Analysis and Visualization
            </h5>
            <div className="sale-date">
              <div className="box-sale">Bestseller</div>
              <div className="box-date"> Updated September 2019</div>
            </div>
            <div className="time-level">
              <span>21 total hourss</span>
              <span>All Level</span>
              <span>Subtitles</span>
            </div>
            <h6 className="description">
              Learn python and how to use it to analyze,visualize and present
              data. Includes tons of sample code and hours of video!
            </h6>
            <ul className="list-card">
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
            </ul>
            <div className="addcart-wishlist">
              <div className="box-cart">Add to cart</div>

              <button className="far fa-heart heart"></button>
            </div>
          </div>
        </div>
        <div
          className="ml-project-item style-two fadeInUp "
          style={{ position: "relative" }}
        >
          <div>
            <div className="project-iamge">
              <div style={{ height: "100%" }}>
                <img
                  style={{ objectFit: "cover" }}
                  src="assets/images/about/ww-do-two1.jpg"
                  height="250px"
                  width="100%"
                  alt="Project"
                />
              </div>
            </div>
            <div className="course-content">
              <h6 className="name-course">
                {" "}
                Learning Python for Data Analysis and Visualization{" "}
              </h6>
              <div className="author-course">Dr. Angela Yu</div>
              <div className="stars-buyer">
                <div className="percent-stars">4</div>
                <div className="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div className="buyer">(4079)</div>
              </div>
              <div className="course-price">₫2,199,000</div>
              <div className="box-sale">Bestseller</div>
            </div>
          </div>
          <div className="box-description">
            <h5 className="box-name">
              Learning Python for Data Analysis and Visualization
            </h5>
            <div className="sale-date">
              <div className="box-sale">Bestseller</div>
              <div className="box-date"> Updated September 2019</div>
            </div>
            <div className="time-level">
              <span>21 total hourss</span>
              <span>All Level</span>
              <span>Subtitles</span>
            </div>
            <h6 className="description">
              Learn python and how to use it to analyze,visualize and present
              data. Includes tons of sample code and hours of video!
            </h6>
            <ul className="list-card">
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
            </ul>
            <div className="addcart-wishlist">
              <div className="box-cart">Add to cart</div>

              <button className="far fa-heart heart"></button>
            </div>
          </div>
        </div>
        <div
          className="ml-project-item style-two fadeInUp "
          style={{ position: "relative" }}
        >
          <div>
            <div className="project-iamge">
              <div style={{ height: "100%" }}>
                <img
                  style={{ objectFit: "cover" }}
                  src="assets/images/about/ww-do-two2.jpg"
                  height="250px"
                  width="100%"
                  alt="Project"
                />
              </div>
            </div>
            <div className="course-content">
              <h6 className="name-course">
                {" "}
                Learning Python for Data Analysis and Visualization{" "}
              </h6>
              <div className="author-course">Dr. Angela Yu</div>
              <div className="stars-buyer">
                <div className="percent-stars">4</div>
                <div className="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div className="buyer">(4079)</div>
              </div>
              <div className="course-price">₫2,199,000</div>
              <div className="box-sale">Bestseller</div>
            </div>
          </div>
          <div className="box-description">
            <h5 className="box-name">
              Learning Python for Data Analysis and Visualization
            </h5>
            <div className="sale-date">
              <div className="box-sale">Bestseller</div>
              <div className="box-date"> Updated September 2019</div>
            </div>
            <div className="time-level">
              <span>21 total hourss</span>
              <span>All Level</span>
              <span>Subtitles</span>
            </div>
            <h6 className="description">
              Learn python and how to use it to analyze,visualize and present
              data. Includes tons of sample code and hours of video!
            </h6>
            <ul className="list-card">
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
            </ul>
            <div className="addcart-wishlist">
              <div className="box-cart">Add to cart</div>

              <button className="far fa-heart heart"></button>
            </div>
          </div>
        </div>
        <div
          className="ml-project-item style-two fadeInUp "
          style={{ position: "relative" }}
        >
          <div>
            <div className="project-iamge">
              <div style={{ height: "100%" }}>
                <img
                  style={{ objectFit: "cover" }}
                  src="assets/images/about/ww-do-two3.jpg"
                  height="250px"
                  width="100%"
                  alt="Project"
                />
              </div>
            </div>
            <div className="course-content">
              <h6 className="name-course">
                {" "}
                Learning Python for Data Analysis and Visualization{" "}
              </h6>
              <div className="author-course">Dr. Angela Yu</div>
              <div className="stars-buyer">
                <div className="percent-stars">4</div>
                <div className="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div className="buyer">(4079)</div>
              </div>
              <div className="course-price">₫2,199,000</div>
              <div className="box-sale">Bestseller</div>
            </div>
          </div>
          <div className="box-description">
            <h5 className="box-name">
              Learning Python for Data Analysis and Visualization
            </h5>
            <div className="sale-date">
              <div className="box-sale">Bestseller</div>
              <div className="box-date"> Updated September 2019</div>
            </div>
            <div className="time-level">
              <span>21 total hourss</span>
              <span>All Level</span>
              <span>Subtitles</span>
            </div>
            <h6 className="description">
              Learn python and how to use it to analyze,visualize and present
              data. Includes tons of sample code and hours of video!
            </h6>
            <ul className="list-card">
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
              <li>
                <i class="fa fa-check" style={{ marginRight: "10px" }}></i>
                Have an intermediate skill level of Python programming.
              </li>
            </ul>
            <div className="addcart-wishlist">
              <div className="box-cart">Add to cart</div>

              <button className="far fa-heart heart"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RecentProjects;
