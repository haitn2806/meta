import React, { useState, useContext } from "react";
import Link from "next/link";
import { UserContext } from "../src/layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import qs from "qs";

const Login = () => {
  const User = useContext(UserContext);
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  // const navigate = useNavigate();
  const router = useRouter();
  const [showFPass, setShowFPass] = useState("hidden");
  const handleShowFP = () => {
    {
      showFPass == "show" ? setShowFPass("hidden") : setShowFPass("show");
    }
  };

  const handleLogin = (e) => {
    console.log("a");
    e.preventDefault();
    callApi();
  };
  const callApi = async () => {
    const response = await axios({
      method: "post",
      url: "https://vnxpedia.3i.com.vn/TravelAPI/LoginXpedia",
      data: qs.stringify({
        UserName: username,
        Password: pass,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    if (response.data.Error === true) {
      console.log("response", response);
      // toastError("Có lỗi xảy ra!");
    } else {
      // User.change(response.data);
      // toastSuccess("Đăng nhập thành công");
      localStorage.setItem("VNXUser", JSON.stringify(response.data));
      router.push("/");
    }
  };
  const [emailforgot, setemailforgot] = useState("");
  const callApiForgotPass = async () => {
    const response = await axios({
      method: "post",
      url: "https://vnxpedia.3i.com.vn/TravelAPI/ForgotPassword",
      data: qs.stringify({
        Email: emailforgot,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    console.log(response.data);
    console.log(emailforgot);
    if (response.data.Error) {
      toast.error("Error!");
    } else toast.success("Please check your mail!");
  };
  const handleSubmitFP = () => {
    callApiForgotPass();
  };

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
        <div style={{ textAlign: "center" }}>
          <h2>Welcome back</h2>
          <h5>Please log into your account</h5>
        </div>
        <form style={{ marginBottom: "20px" }}>
          <div className="login-user">
            <label>Tên đăng nhập</label>
            <input
              placeholder="Tên đăng nhập"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-password">
            <label>Mật khẩu</label>
            <input
              placeholder="Mật khẩu"
              onChange={(e) => setPass(e.target.value)}
            />
            <i
              class="fa fa-eye-slash"
              style={{
                top: " 64%",
                right: "16px",
                position: "absolute",
                cursor: "pointer",
              }}
            ></i>
            {/* <i class="fa fa-eye"></i> */}
          </div>
          <button
            className="login-btn"
            onClick={(e) => handleLogin(e)}
            // onClick={() => router.push("/")}
          >
            Đăng nhập
          </button>
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
        <div className="last-forn-login">
          <div>Quên mật khẩu?</div>
          <div>Đăng ký</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
