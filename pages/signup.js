import React, { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [showCfpassword, setShowCfpassword] = useState(false);

  return (
    <div className="ml-form">
      <div className="login-form">
        <Link href="/" style={{ cursor: "pointer" }}>
          <img
            src="assets/images/metalearn/meta4.png"
            height={"100px"}
            width={"336px"}
            style={{ display: "flex", margin: "auto", cursor: "pointer" }}
          />
        </Link>
        <h3 style={{ textAlign: "center" }}>Create new Account</h3>
        <form style={{ marginBottom: "20px" }}>
          <div className="login-user">
            <label>Email</label>
            <input placeholder="Email" />
          </div>

          <div className="login-user">
            <label>Tên đăng nhập</label>
            <input placeholder="Tên đăng nhập" />
          </div>

          <div className="login-user">
            <label>Phone</label>
            <input placeholder="Phone" />
          </div>
          <div className="login-password">
            <label>Mật khẩu</label>
            <input placeholder="Mật khẩu" />
            {showpassword ? (
              <i
                class="fa fa-eye-slash"
                style={{
                  top: " 64%",
                  right: "16px",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={() => setShowpassword(!showpassword)}
              ></i>
            ) : (
              <i
                class="fa fa-eye"
                style={{
                  top: " 64%",
                  right: "16px",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={() => setShowpassword(!showpassword)}
              ></i>
            )}
          </div>

          <div className="login-password">
            <label>Xác nhận mật khẩu</label>
            <input placeholder="Xác nhận mật khẩu" />
            {showCfpassword ? (
              <i
                class="fa fa-eye-slash"
                style={{
                  top: " 64%",
                  right: "16px",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={() => setShowCfpassword(!showCfpassword)}
              ></i>
            ) : (
              <i
                class="fa fa-eye"
                style={{
                  top: " 64%",
                  right: "16px",
                  position: "absolute",
                  cursor: "pointer",
                }}
                onClick={() => setShowCfpassword(!showCfpassword)}
              ></i>
            )}
            {/* <i class="fa fa-eye"></i> */}
          </div>
          <button className="login-btn">Đăng ký</button>
        </form>
        {/* <div>Hoặc đăng nhập bằng</div> */}
        <div className="social-network">
          <button style={{ backgroundColor: "#1877f2" }}>
            <img
              alt=""
              width={"25px"}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
            />
            Facebook
          </button>
          <button style={{ backgroundColor: "#ff0909" }}>
            {" "}
            <img
              alt=""
              width={"25px"}
              src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
            />{" "}
            Google
          </button>
        </div>
        {/* <div className="last-forn-login">
          <div>Quên mật khẩu?</div>
          <div>Đăng ký</div>
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
