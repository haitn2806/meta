import Link from "next/link";
import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";
import SideBar from "./SideBar";
import { sideBarToggle } from "../utils";

const MobileMenu = ({ logo }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg d-block d-lg-none mobile-header">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo my-15">
            <Link href="/">
              <a>
                <img
                  src={logo ? logo : "/assets/images/metalearn/logo.png"}
                  alt="Logo"
                  title="Logo"
                  className="logo"
                />
              </a>
            </Link>
          </div>
          <Accordion.Toggle
            eventKey="nav"
            as="button"
            className="navbar-toggle"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="nav" className="navbar-collapse clearfix">
          <ul className="navigation clearfix" style={{ height: "100vh" }}>
            <li className="dropdown">
              <Link href="/">TRANG CHỦ</Link>
            </li>
            <li className="dropdown">
              <a onClick={() => activeMenuSet("products")}>SẢN PHẨM</a>

              <ul style={activeLi("products")}>
                <li>
                  <Link href="/products">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="http://smartwork.3i.com.vn/uploads/images/image_9c0a1908.png"
                        width={"20px"}
                        height={"20px"}
                        style={{
                          marginRight: "10px",
                          marginLeft: "20px",
                          marginLeft: "20px",
                        }}
                      />{" "}
                      HỆ ĐIỀU HÀNH DOANH NGHIỆP SMARTWORK{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/products/2707">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHkFmhDBOWQTOBf9IJvQsOANGwZlaWCICWQ&usqp=CAU"
                        width={"20px"}
                        height={"20px"}
                        style={{
                          marginRight: "10px",
                          marginLeft: "20px",
                          marginLeft: "20px",
                        }}
                      />{" "}
                      HỆ THỐNG QUẢN LÝ SẢN XUÂT{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/products/2708">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://icons.veryicon.com/png/o/business/oa-office-icon/dispatch-management.png"
                        width={"20px"}
                        height={"20px"}
                        style={{
                          marginRight: "10px",
                          marginLeft: "20px",
                          marginLeft: "20px",
                        }}
                      />{" "}
                      HỆ THỐNG QUẢN LÝ CÔNG VĂN VÀ VĂN BẢN EDMS{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/products/2709">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/4222/4222002.png"
                        width={"20px"}
                        height={"20px"}
                        style={{
                          marginRight: "10px",
                          marginLeft: "20px",
                          marginLeft: "20px",
                        }}
                      />{" "}
                      HỆ THỐNG QUẢN LÝ KHO, CHỨNG TỪ VÀ SỐ HOÁ{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/products/2710">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/6600/6600563.png"
                        width={"20px"}
                        height={"20px"}
                        style={{
                          marginRight: "10px",
                          marginLeft: "20px",
                          marginLeft: "20px",
                        }}
                      />{" "}
                      HỆ THỐNG QUẢN LÝ GIÁO DỤC THÔNG MINH SMART EDUCATION{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/products/2711">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://www.clipartmax.com/png/small/67-676376_banner-img2-hospital-management-system-icon.png"
                        width={"20px"}
                        height={"20px"}
                        style={{
                          marginRight: "10px",
                          marginLeft: "20px",
                          marginLeft: "20px",
                        }}
                      />{" "}
                      HỆ THỐNG QUẢN LÝ PHÒNG KHÁM SMART SURGERY{" "}
                    </p>
                  </Link>
                </li>
              </ul>
              {/* <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("products")}
              >
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            <li className="dropdown">
              <a onClick={() => activeMenuSet("services")}>DỊCH VỤ</a>

              <ul style={activeLi("services")}>
                <li>
                  <Link href="/services/2712">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/2154/2154319.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      PHÁT TRIỂN PHẦN MỀM QUỐC TaaẾ{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/2714">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/2752/2752488.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      PHÁT TRIỂN PHẦN MỀM TUỲ BIẾN{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/2715">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/3347/3347960.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      DỊCH VỤ PHẦN MỀM OUTSOURCE{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/2716">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/1311/1311450.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      PHÁT TRIỂN SẢN PHẨM PHẦN MỀM{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/2717">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/1197/1197511.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      PHÁT TRIỂN ỨNG DỤNG WEB{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/2718">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://as1.ftcdn.net/v2/jpg/04/39/84/44/1000_F_439844480_2qas07Z0dqxYn8C8vtVjnKIwwCK7VILN.jpg"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      DỊCH VỤ DI CHUYỂN CSDL{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/2719">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/3289/3289961.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      PHÁT TRIỂN ỨNG DỤNG DI ĐỘNG{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/services/2720">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/9044/9044512.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      KIỂM THỬ PHẦN MỀM QUỐC TẾ{" "}
                    </p>
                  </Link>
                </li>
              </ul>
              {/* <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("services")}
              >
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            <li className="dropdown">
              <a onClick={() => activeMenuSet("technology")}>CÔNG NGHỆ</a>

              <ul style={activeLi("technology")}>
                <li>
                  <Link href="/technology/2727">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0y6NEkTMNuPhX1nyifrlxoNkyLrSgBBByDQ84Wd1ryhG_2rmKJYKpbmQuuYx-qpsfiUk&usqp=CAU"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      ASP.NET{" "}
                    </p>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link href="technology/2738">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://pic.clubic.com/v1/images/1505717/raw"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      PHP{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/technology/27">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://www.pikpng.com/pngl/m/430-4309640_js-logo-nodejs-logo-clipart.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      NODEJS{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/technology/2736">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://styles.redditmedia.com/t5_320ze/styles/communityIcon_qomtlzo996u61.jpg"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      IONIC{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/technology/2737">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://www.sqlfr.com/wp-content/uploads/2022/04/sql-1024x572.jpg"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      ỨNG DỤNG VỀ CSDL VÀ BIGDATA{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/technology/2752">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/2091/2091665.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      PHÁT TRIỂN CỦA BLOCKCHAIN{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/technology/2763">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn1.iconfinder.com/data/icons/startup-set-1/64/testing-test-comparison-computer-technology-website-experiment-512.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      KIẾN THỨC QUY TRÌNH TEST PHẦN MỀM{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/technology/2743">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      JAVA{" "}
                    </p>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/technology/2720">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/6091/6091352.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      IOT{" "}
                    </p>
                  </Link>
                </li>
              </ul>
              {/* <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("technology")}
              >
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            <li className="dropdown">
              <a onClick={() => activeMenuSet("careers")}>TUYỂN DỤNG</a>

              <ul style={activeLi("careers")}>
                <li>
                  <Link href="/careers/2724">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/4412/4412932.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      TUYỂN DỤNG LẬP TRÌNH .NET CORE{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/careers/2725">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/4419/4419547.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      TUYỂN DỤNG LẬP TRÌNH NODEJS{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/careers/2726">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/2574/2574733.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      TUYỂN DỤNG LẬP TRÌNH PYTHON{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/careers/2734">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/1918/1918557.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      TUYỂN DỤNG TESTER{" "}
                    </p>
                  </Link>
                </li>
              </ul>
              {/* <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("careers")}
              >
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            <li className="dropdown">
              <a onClick={() => activeMenuSet("about-us")}>GIỚI THIỆU</a>

              <ul style={activeLi("about-us")}>
                <li>
                  <Link href="/about-us/2730">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/7542/7542177.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      GIỚI THIỆU CHUNG{" "}
                    </p>
                  </Link>
                </li>
              </ul>
              {/* <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("about-us")}
              >
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            <li className="dropdown">
              <a onClick={() => activeMenuSet("contact")}>LIÊN HỆ</a>

              <ul style={activeLi("contact")}>
                <li>
                  <Link href="/contact/2733">
                    <p
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderBottom: "1px dashed",
                        width: "90%",
                      }}
                    >
                      <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/3249/3249834.png"
                        width={"20px"}
                        height={"20px"}
                        style={{ marginRight: "10px", marginLeft: "20px" }}
                      />{" "}
                      LIÊN HỆ{" "}
                    </p>
                  </Link>
                </li>
              </ul>
              {/* <div
                className="dropdown-btn"
                onClick={() => activeMenuSet("contact")}
              >
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
export default MobileMenu;
