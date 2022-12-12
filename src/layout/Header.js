import Link from "next/link";
import { sideBarToggle } from "../utils";
import MobileMenu from "./MobileMenu";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import Flags from "../components/Falgs";
// import start from "./record";
const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    default:
      return <DefaultHeader />;
  }
};
export default Header;

const Header1 = () => {
  const [show, setShow] = useState(false);
  const [store, setStore] = useState();
 
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const test = localStorage.getItem("VNXUser")
      ? JSON.parse(localStorage.getItem("VNXUser"))
      : null;

    setStore(test);
    console.log("store", store);
  }, []);

  console.log("1", store);
  const logout = () => {
    setStore(null);
    console.log("2", store);
  };

  let menuRef = useRef();

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
        // console.log("a", show);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const [ showVideo, setShowVideo] = useState("hidden")
  const start = async () => {
   
    const video = document.querySelector("video");
    video
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        mediaSource: "screen",
      },
    });
    const data = [];
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => {
      data.push(e.data);
    };
   mediaRecorder.start()
    mediaRecorder.onstop = (e) => {
      setShowVideo("hidden" ? "" : "hidden")
      document.querySelector("video").src = URL.createObjectURL(
        new Blob(data, {
          type: data[0].type,
        })
      );
    };
  };
  return (
    
    <header className="main-header header-two">
      
      {/*Header-Upper*/}
      <div className="header-upper" ref={menuRef}>
   
        <div
          className="container clearfix header-mobile"
          // style={{ maxWidth: "100%" }}
        >
          <input type="file" accept="image/*" capture="environment"/>
          <div
          
            className="header-inner rel d-flex align-items-center"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.53) 0px 9px 15px",
              justifyContent: "space-around",
            }}
          >
            
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      className="logo"
                      src="/assets/images/metalearn/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
               
            </div>
            <div className="nav-outer clearfix meta-header-search">
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">
                      <a>
                        <img
                          src="/assets/images/metalearn/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  
                </div>
              </nav>
        
              <div className="nav-search py-15" style={{ display: "flex" }}>
              
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    width: "100%",
                  }}
                  className="search-header"
                >
                  <input
                    className="input-header"
                    placeholder="Tìm khoá học, giảng viên"
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
                <button onClick={start} className=" m-lg-2"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-camera-video-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
</svg></button>
              </div>
              {/* Main Menu End*/}
              
            </div>
           
            <div className="menu-btns ml-header-right">
              
              {store == null ? (
                <>
                  <button
                    className="far fa-shopping-cart"
                    style={{
                      backgroundColor: "#fff",
                      "margin-right": "40px",
                      "font-size": "20px",
                    }}
                    onClick={() => setShow(!show)}
                  />
                  <Link href="/signup">
                    <button className="ml-header-signup">Đăng ký</button>
                  </Link>
                  <Link href="/login">
                    <button className="ml-header-login">Đăng nhập</button>
                  </Link>
                  <Flags />
                </>
              ) : (
                <div className="header-user">
                  <p>My learning</p>
                  <button className="far fa-shopping-cart"></button>
                  <button className="far fa-shopping-cart"></button>
                  <button className="far fa-shopping-cart"></button>
                  <div>
                    <Link href="info-user">
                      <img
                        alt=""
                        src="http://localhost:3000/assets/images/about/about-one.jpg"
                        height={"40px"}
                      />
                    </Link>
                  </div>
                  <div onClick={logout}>logout</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <button onClick={()=>setShowVideo("hidden")} className={showVideo}>X</button>
        <video controls width={500} className={showVideo} height={500}></video>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header2 = () => {
  return (
    <header className="main-header">
      <div className="header-top-wrap bgc-secondary text-white py-5">
        <div className="container">
          <div className="header-top">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="top-left text-center text-lg-start">
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="top-right text-center text-lg-end">
                  <ul>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <a href="callto:+000(123)45699">+000 (123) 456 99</a>
                    </li>
                    <li>
                      <select className="select" name="language" id="language">
                        <option value="English">English</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Arabic">Arabic</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="/assets/images/metalearn/logo.png"
                      alt="Logo"
                      title="Logo"
                      style={{ width: "20px", height: "20px" }}
                      className="logo dark-logo"
                    />
                    <img
                      className="light-logo logo"
                      src="/assets/images/logos/logo-white.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">
                      <a>
                        <img
                          src="/assets/images/metalearn/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                {/* <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div> */}
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search py-15">
              <button className="far fa-search" />
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="hide"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required=""
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="/contact">
                <a className="theme-btn">
                  Download Now <i className="fas fa-angle-double-right" />
                </a>
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar d-none d-lg-block">
                <button onClick={() => sideBarToggle()}>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const DefaultHeader = () => {
  return (
    <header className="main-header header-three menu-absolute">
      {/*Header-Upper*/}
      {/* <div className="header-top">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="top-left text-center text-lg-start">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Faqs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="top-right text-center text-lg-end">
              <ul>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="far fa-phone" />{" "}
                  <a href="callto:+000(123)45699">+000 (123) 456 99</a>
                </li>
                <li>
                  <select className="select" name="language" id="language">
                    <option value="English">English</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Arabic">Arabic</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="/assets/images/metalearn/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">
                      <a>
                        <img
                          src="/assets/images/metalearn/logo.png"
                          alt="Logo"
                          title="Logo"
                          width="150px"
                          height="50px"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                {/* <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div> */}
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            {/* <div className="menu-btns">
              <Link href="/contact">
                <a className="login">Log in</a>
              </Link>
              <Link href="/contact">
                <a className="theme-btn">
                  Sign up Free <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Menu = () => {
  const [ showVideo, setShowVideo] = useState("hidden")
  return (
    <ul className="navigation clearfix">
      <li className="dropdown">
        <Link href="/">TRANG CHỦ</Link>
      </li>
      <li className="dropdown">
        <a>SẢN PHẨM</a>
        <ul className="ul-first">
          <li>
            <Link href="/products">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="http://smartwork.3i.com.vn/uploads/images/image_9c0a1908.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHkFmhDBOWQTOBf9IJvQsOANGwZlaWCICWQ&usqp=CAU"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://icons.veryicon.com/png/o/business/oa-office-icon/dispatch-management.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/4222/4222002.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/6600/6600563.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://www.clipartmax.com/png/small/67-676376_banner-img2-hospital-management-system-icon.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                HỆ THỐNG QUẢN LÝ PHÒNG KHÁM SMART SURGERY{" "}
              </p>
            </Link>
          </li>
        </ul>
        {/* <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>
      <li className="dropdown">
        <a>DỊCH VỤ</a>
        <ul>
          <li>
            <Link href="/services/2712">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/2154/2154319.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                PHÁT TRIỂN PHẦN MỀM QUỐC TẾ{" "}
              </p>
            </Link>
          </li>
          <li>
            <Link href="/services/2714">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/2752/2752488.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/3347/3347960.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/1311/1311450.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/1197/1197511.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://as1.ftcdn.net/v2/jpg/04/39/84/44/1000_F_439844480_2qas07Z0dqxYn8C8vtVjnKIwwCK7VILN.jpg"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/3289/3289961.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/9044/9044512.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                KIỂM THỬ PHẦN MỀM QUỐC TẾ{" "}
              </p>
            </Link>
          </li>
        </ul>
        {/* <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>
      <li className="dropdown">
        <a>CÔNG NGHỆ</a>
        <ul>
          <li>
            <Link href="/technology/2727">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0y6NEkTMNuPhX1nyifrlxoNkyLrSgBBByDQ84Wd1ryhG_2rmKJYKpbmQuuYx-qpsfiUk&usqp=CAU"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                ASP.NET{" "}
              </p>
            </Link>
          </li>
          <li>
            <Link href="/technology/2738">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://pic.clubic.com/v1/images/1505717/raw"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                PHP{" "}
              </p>
            </Link>
          </li>
          <li>
            <Link href="/technology/2740">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://www.pikpng.com/pngl/m/430-4309640_js-logo-nodejs-logo-clipart.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://styles.redditmedia.com/t5_320ze/styles/communityIcon_qomtlzo996u61.jpg"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://www.sqlfr.com/wp-content/uploads/2022/04/sql-1024x572.jpg"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/2091/2091665.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn1.iconfinder.com/data/icons/startup-set-1/64/testing-test-comparison-computer-technology-website-experiment-512.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/6091/6091352.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                IOT{" "}
              </p>
            </Link>
          </li>
        </ul>
        {/* <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>
      <li className="dropdown">
        <a>TUYỂN DỤNG</a>
        <ul>
          <li>
            <Link href="/careers/2724">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/4412/4412932.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/4419/4419547.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/2574/2574733.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
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
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/1918/1918557.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                TUYỂN DỤNG TESTER{" "}
              </p>
            </Link>
          </li>
        </ul>
        {/* <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>
      <li className="dropdown">
        <a>GIỚI THIỆU</a>
        <ul>
          <li>
            <Link href="/about-us/2730">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/7542/7542177.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                GIỚI THIỆU CHUNG{" "}
              </p>
            </Link>
          </li>
        </ul>
        {/* <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>
      <li className="dropdown">
        <a>LIÊN HỆ</a>
        <ul>
          <li>
            <Link href="/contact/2733">
              <p
                style={{
                  cursor: "pointer",
                  color: "black",
                  borderBottom: "1px dashed",
                }}
              >
                <img
                  alt=""
                  src="https://cdn-icons-png.flaticon.com/512/3249/3249834.png"
                  width={"20px"}
                  height={"20px"}
                  style={{ marginRight: "10px" }}
                />{" "}
                LIÊN HỆ{" "}
              </p>
            </Link>
          </li>
        
        </ul>
    
        {/* <div className="dropdown-btn">
          <span className="fas fa-chevron-down" />
        </div> */}
      </li>   
 
    </ul>
    
  );
};
