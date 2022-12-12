import React from "react";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { BsBell, BsStars, BsBookmarkStar } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import axios from "axios";
import qs from "qs";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import Layout from "../src/layout/Layout";

const amount = "2";
const currency = "USD";
const style = { layout: "vertical" };

const UserInfor = () => {
  const [paymentGatewayDisplay, setPaymentGatewayDisplay] = useState(false);

  const handlePaymentGatewayDisplay = () => {
    setPaymentGatewayDisplay(!paymentGatewayDisplay);
    console.log(paymentGatewayDisplay);
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    // useEffect(() => {

    // }, [point]);

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[point, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: point,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

  /////////// Gọi API cho User
  const [Bookdata, setBookdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [new1, setnew] = useState(true);
  const [point, setPoint] = useState();
  const [latchPoint, setLatchPoint] = useState();
  const [linkVnp, setLinkVnp] = useState();
  const [linkMomo, setLinkMomo] = useState();
  const [linkPaypal, setLinkPaypal] = useState();

  // console.log("linkVnp", linkVnp);
  const hanldePoint = () => {
    setLatchPoint(point);
  };

  // const callApiEdit1 = async () => {
  //   console.log("aaaa");
  //   const response = await axios({
  //     method: "post",
  //     url: "https://dieuhanh.vatco.vn/Admin/Payment/CreateOrder",
  //     data: qs.stringify({
  //       purchase_units: [
  //         {
  //           amount: {
  //             value: "10",
  //           },
  //         },
  //       ],
  //     }),
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //     },
  //   });
  // };

  useEffect(() => {
    axios
      .post(
        `https://dieuhanh.vatco.vn/Admin/Payment/VNPayInPut?points=${point}`
      )
      .then(function (response) {
        const link = JSON.parse(response.data.Object);
        console.log("link", link);
        setLinkVnp(link.PaymentUrl);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});

    axios
      .post(`https://dieuhanh.vatco.vn/Admin/Payment/MomoPay?points=${point}`)
      .then(function (response) {
        const link = JSON.parse(response.data.Object);
        setLinkMomo(link.payUrl);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});

    // axios({
    //   method: "post",
    //   url: "https://www.sandbox.paypal.com/v2/checkout/orders",
    //   data: qs.stringify({
    //     purchase_units: [
    //       {
    //         amount: {
    //           value: "10",
    //         },
    //       },
    //     ],
    //   }),
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //   },
    // });
  }, [point]);

  const OpenLinkMomo = () => {
    window.open(linkMomo, "_blank");
    // console.log("open true");
  };

  const OpenLinkVpn = () => {
    window.open(linkVnp, "_blank");
    // console.log("open true");
  };

  const CallApi = async () => {
    setIsLoading(true);

    const response = await axios({
      method: "post",
      url: `https://vnxpedia.3i.com.vn/TravelAPI/BookingTable?Username=${currentUser.UserName}`,
      type: "json",
    });

    if (response.status === 200) {
      setBookdata(response.data.Object);
    }
    setIsLoading(false);
  };
  // console.log("bookdata---", Bookdata);

  ///////// Khởi chạy trang web sẽ đặt Profile hiển thị đầu tiên , call API
  useEffect(() => {
    ShowAttiribute("Payment");
    let VNXuser = localStorage.getItem("VNXUser")
      ? JSON.parse(localStorage.getItem("VNXUser"))
      : null;
    if (VNXuser) {
      setCurrentUser(VNXuser);
      setUseredit(VNXuser);
    } else {
      setCurrentUser(null);
    }
    console.log(currentUser);
  }, []);

  /////// Đây là crumber :
  const [datalink, setlink] = useState(["Home", "User", "Profile"]);

  const [showattribute, setshowatt] = useState(1);
  const [pass, setpass] = useState("********");
  const ShowAttiribute = (a) => {
    setshowatt(a);
    setlink(["Home", "User", `${a}`]);
    if (a == "Booking list") {
      CallApi();
    }
  };
  const Showpass = () => {
    {
      pass == "********" ? setpass(123456) : setpass("********");
    }
  };

  // Edit per value profile
  const [editname, setname] = useState(false);
  const EditName = () => {
    {
      editname ? setname(false) : setname(true);
    }
  };
  const [editgender, setgender] = useState(false);
  const EditGender = () => {
    {
      editgender ? setgender(false) : setgender(true);
    }
  };
  const [editbday, setbday] = useState(false);
  const EditBday = () => {
    {
      editbday ? setbday(false) : setbday(true);
    }
  };
  const [editaddress, setadd] = useState(false);
  const EditAddress = () => {
    {
      editaddress ? setadd(false) : setadd(true);
    }
  };
  const [editphone, setphone] = useState(false);
  const EditPhone = () => {
    {
      editphone ? setphone(false) : setphone(true);
    }
  };
  const [editemail, setemail] = useState(false);
  const EditEmail = () => {
    {
      editemail ? setemail(false) : setemail(true);
    }
  };
  const [editpassword, setpassword] = useState(false);
  const EditPass = () => {
    {
      editpassword ? setpassword(false) : setpassword(true);
    }
  };
  const [editabout, setabout] = useState(false);
  const EditAbout = () => {
    {
      editabout ? setabout(false) : setabout(true);
    }
  };

  const [billd, setbilld] = useState("hidden");
  const [bille, setbille] = useState("hidden");
  const [tourbill, settourbill] = useState(null);

  const ShowbillDetail = (d) => {
    billd == "show" ? setbilld("hidden") : setbilld("show");
    settourbill(d);
  };
  const ShowbillEdit = (d) => {
    bille == "show" ? setbille("hidden") : setbille("show");
    settourbill(d);
  };
  const CloseAll = () => {
    setbilld("hidden");
    setbille("hidden");
  };
  const changetourbill = (a) => {
    settourbill(a);
  };

  ////////user form infor
  const [Useredit, setUseredit] = useState(currentUser);
  // console.log(Useredit);
  const onChangeDate = (date, dateString) => {
    console.log(dateString);
    setUseredit({ ...Useredit, BirthDay: dateString });
  };
  const [value, setValue] = useState(true);
  const onChangeGender = (e) => {
    setValue(e.target.value);
    setUseredit({ ...Useredit, Gender: e.target.value });
  };
  const SubmitEdit = () => {
    // console.log(Useredit);
    callApiEdit();
    setname(false);
    setabout(false);
    setadd(false);
    setbday(false);
    setemail(false);
    setgender(false);
    setphone(false);
    localStorage.setItem(
      "VNXUser",
      JSON.stringify({ ...currentUser, ...Useredit })
    );
    setCurrentUser({ ...currentUser, ...Useredit });
  };

  const callApiEdit = async () => {
    const response = await axios({
      method: "post",
      url: "https://vnxpedia.3i.com.vn/TravelAPI/UpdateInfo",
      data: qs.stringify({
        UserName: currentUser.UserName,
        GivenName: Useredit.FullName ? Useredit.FullName : currentUser.FullName,
        Gender: Useredit.Gender == null ? Useredit.Gender : currentUser.Gender,
        Reason: Useredit.BirthDay ? Useredit.BirthDay : currentUser.BirthDay,
        Description: Useredit.About ? Useredit.About : currentUser.About,
        Note: Useredit.Address ? Useredit.Address : currentUser.Address,
        PhoneNumber: Useredit.PhoneNumber
          ? Useredit.PhoneNumber
          : currentUser.PhoneNumber,
        Email: Useredit.Email ? Useredit.Email : currentUser.Email,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
  };
  const editPicture = (data) => {
    console.log(data);
    var formdata = new FormData();
    formdata.append("UserName", currentUser.UserName);
    formdata.append("GivenName", currentUser.FullName);
    formdata.append("Gender", currentUser.Gender);
    formdata.append("Reason", currentUser.BirthDay);
    formdata.append("Description", currentUser.About);
    formdata.append("Note", currentUser.Address);
    formdata.append("PhoneNumber", currentUser.PhoneNumber);
    formdata.append("Email", currentUser.Email);
    formdata.append("image", data);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://vnxpedia.3i.com.vn/TravelAPI/UpdateInfo", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setCurrentUser({ ...currentUser, Picture: JSON.parse(result).Object });
        localStorage.setItem(
          "VNXUser",
          JSON.stringify({ ...currentUser, Picture: JSON.parse(result).Object })
        );
        setUseredit({ ...currentUser, Picture: JSON.parse(result).Object });
      })
      .catch((error) => console.log("error", error));

    //    setCurrentUser({...currentUser,Picture:`https://vnxpedia.3i.com.vn/uploads/images/${data.name}`});
    //         console.log('User',currentUser);
    setnew(!new1);
    // console.log(currentUser);
  };

  return (
    <Layout header={1} className="home-one" footer={1}>
    <div className="user-max-container">
      <div className="user-main-infor">
        <div className="list-attribute">
          <div className="user-main">
            {currentUser && currentUser.Picture ? (
              <img
                className="user-img"
                alt=""
                src={`https://vnxpedia.3i.com.vn/${currentUser.Picture}`}
              ></img>
            ) : (
              <img
                className="user-img"
                alt="avatar"
                src="https://media.defense.gov/2018/Sep/21/2002043408/1088/820/0/180921-D-BD104-006.JPG"
              ></img>
            )}

            <input
              type="file"
              id="file"
              name="file"
              className="change-image"
              style={{ display: "none !important" }}
              onChange={(e) => editPicture(e.target.files[0])}
            ></input>
            <label className="edit-picture" for="file">
              <RiEdit2Fill
              // className="edit-picture"
              />
            </label>
          </div>

          <button onClick={() => ShowAttiribute("Profile")}>
            <CgProfile className="icon-profile icon-att" />
            Profile
          </button>
          <button onClick={() => ShowAttiribute("Notifications")}>
            <div className="div-noti">
              <BsBell className="icon-noti icon-att"></BsBell>
              <p className="num-noti">4</p>
            </div>
            Notifications
          </button>
          <button onClick={() => ShowAttiribute("Booking list")}>
            <BsBookmarkStar className="icon-booking icon-att" />
            Booking list
          </button>
          <button onClick={() => ShowAttiribute("Wish list")}>
            <BsStars className="icon-wish icon-att" />
            Wish list
          </button>
          <button onClick={() => ShowAttiribute("Payment")}>
            <BsStars className="icon-wish icon-att" />
            Payment
          </button>
        </div>
        <div className="infor-attribute">
          {/* <Crumb data={datalink} /> */}

          {showattribute == "Profile" && (
            <div className="user-profile">
              <div className="user-infor-container">
                <div className="user-infor-main">
                  <h4>Profile Information</h4>
                  <div className="edit-item">
                    <p>
                      Name :{" "}
                      {editname ? (
                        <input
                          placeholder={currentUser.FullName}
                          className="edit-input"
                          onChange={(e) =>
                            setUseredit({
                              ...Useredit,
                              FullName: e.target.value,
                            })
                          }
                        ></input>
                      ) : (
                        `${currentUser.FullName}`
                      )}
                      <RiEdit2Fill onClick={() => EditName()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Gender :{" "}
                      {editgender ? (
                        <Radio.Group
                          onChange={onChangeGender}
                          value={value}
                          className="input-2"
                        >
                          <Radio value={true}>Male</Radio>
                          <Radio value={false}>Female</Radio>
                        </Radio.Group>
                      ) : (
                        "Male"
                      )}{" "}
                      <RiEdit2Fill onClick={() => EditGender()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Birthday :{" "}
                      {editbday ? (
                        <DatePicker
                          onChange={onChangeDate}
                          picker="date"
                          className="input-2"
                        />
                      ) : (
                        currentUser.BirthDay
                      )}
                      <RiEdit2Fill onClick={() => EditBday()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Address :
                      {editaddress ? (
                        <input
                          onChange={(e) =>
                            setUseredit({
                              ...Useredit,
                              Address: e.target.value,
                            })
                          }
                          placeholder=""
                          className="edit-input"
                        ></input>
                      ) : (
                        currentUser.Address
                      )}
                      <RiEdit2Fill onClick={() => EditAddress()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Phone :{" "}
                      {editphone ? (
                        <input
                          onChange={(e) =>
                            setUseredit({
                              ...Useredit,
                              PhoneNumber: e.target.value,
                            })
                          }
                          placeholder={currentUser.PhoneNumber}
                          className="edit-input"
                        ></input>
                      ) : (
                        currentUser.PhoneNumber
                      )}
                      <RiEdit2Fill onClick={() => EditPhone()} />
                    </p>
                  </div>
                  <div className="edit-item">
                    <p>
                      Email :{" "}
                      {editemail ? (
                        <input
                          onChange={(e) =>
                            setUseredit({
                              ...Useredit,
                              Email: e.target.value,
                            })
                          }
                          type="email"
                          placeholder={currentUser.Email}
                          className="edit-input"
                        ></input>
                      ) : (
                        currentUser.Email
                      )}
                      <RiEdit2Fill onClick={() => EditEmail()} />
                    </p>
                  </div>
                  {/* <div className="edit-item">
                    <p>
                      Password :{" "}
                      {editpassword ? (
                        <input
                          type="password"
                          placeholder="password"
                          className="edit-input"
                        ></input>
                      ) : (
                        `*********`
                      )}{" "}
                      <AiOutlineEye
                        className="user-icon1"
                        onClick={() => Showpass()}
                      />
                      <RiEdit2Fill onClick={() => EditPass()} />
                    </p>
                  </div> */}
                </div>
                <div className="about-me">
                  <h4>About me</h4>
                  <p>
                    {editabout ? (
                      <input
                        onChange={(e) =>
                          setUseredit({
                            ...Useredit,
                            About: e.target.value,
                          })
                        }
                        type="text"
                        placeholder={currentUser.About}
                        className="edit-input"
                      ></input>
                    ) : (
                      currentUser.About
                    )}
                    {/* Very handsome but no have money T_T{" "} */}
                    <RiEdit2Fill onClick={() => EditAbout()} />
                  </p>
                </div>
              </div>
              <button className="btn-active" onClick={() => SubmitEdit()}>
                Save
              </button>
              {/* <button
                                className="btn-active"
                                style={{ marginLeft: "10px" }}
                            >
                                Change Password
                            </button> */}
            </div>
          )}

          {showattribute == "Booking list" && (
            <div className="user-booking">
              <TourTable
                edit={ShowbillEdit}
                print={ShowbillDetail}
                data={Bookdata}
              />
            </div>
          )}

          {showattribute == "Notifications" && (
            <div className="notification">
              <p>You don't have any notifications</p>
            </div>
          )}

          {showattribute == "Wish list" && (
            <div className="wwish">
              <p>You don't have any wish</p>
            </div>
          )}

          {showattribute == "Payment" && (
            <div className="purchase-points">
              <div className="number-coin">
                {" "}
                <h4>Nhập số coin</h4>
                <div className="row">
                  <div className="col-sm-6 col-md-6- col-xs-6">
                    <label>Số coin</label>
                    <input
                      type="number"
                      className="coin-input"
                      onChange={(e) => setPoint(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6 col-md-6- col-xs-6">
                    <label>Giá thành</label>
                    <input
                      className="coin-input"
                      type="number"
                      style={{
                        backgroundColor: "#eef1f5",
                      }}
                      value={latchPoint}
                      readOnly
                    />
                  </div>
                  <div className="col-sm-6 col-md-6- col-xs-6">
                    <button
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        borderRadius: "20px",
                        backgroundColor: "#009dcb",
                        fontWeight: 600,
                        color: "#ffff",
                      }}
                      onClick={hanldePoint}
                    >
                      Xác nhận
                    </button>
                  </div>
                  <div className="col-sm-6 col-md-6- col-xs-6">
                    <button
                      style={{
                        width: "100%",
                        marginTop: "20px",
                        borderRadius: "20px",
                        backgroundColor: "#CECECE",
                        fontWeight: 600,
                      }}
                    >
                      Làm lại
                    </button>
                  </div>
                </div>
              </div>
              <div className="checkout-coin">
                <h4>Thanh toán</h4>
                <div className="row">
                  <div
                    className="col-sm-12 mt-bottom-5 table-payment"
                    style={{ display: "flex" }}
                  >
                    <div className="col-sm-4">Sản phẩm</div>
                    <div className="col-sm-9">Giá</div>
                  </div>
                  <div
                    className="col-sm-12 mt-bottom-5 table-payment"
                    style={{
                      display: "flex",
                      borderTop: "1px solid",
                      borderBottom: "1px solid",
                    }}
                  >
                    <div className="col-sm-4">No Item Select</div>
                    <div className="col-sm-9">$0.00</div>
                  </div>
                  <div
                    className="col-sm-12 mt-bottom-5 table-payment"
                    style={{
                      display: "flex",
                      height: "50px",
                      background: "#f4f7f7",
                      paddingTop: "10px",
                    }}
                  >
                    <div
                      className="col-sm-12"
                      style={{
                        textAlign: "-webkit-right",
                        paddingTop: 0,
                      }}
                    >
                      Thành tiền: $<span>0.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-method">
                <h6>Phương thức thanh toán</h6>
                <div
                  className="d-flex"
                  style={{
                    flexWrap: "wrap",
                    alignItems: "center",
                    margin: "0",
                  }}
                >
                  <label
                    class="switch"
                    style={{ margin: "0", marginRight: "5px" }}
                  >
                    <input
                      type="checkbox"
                      className="switch-btn"
                      onClick={handlePaymentGatewayDisplay}
                    />
                    <span class="slider round"></span>
                  </label>
                  <div>Thanh toán với</div>
                </div>

                {paymentGatewayDisplay ? (
                  <div>
                    <div className="d-flex">
                      <div
                        style={{
                          marginRight: "30px",
                          border: "1px solid silver",
                        }}
                      >
                        <button onClick={OpenLinkVpn}>
                          <img
                            alt=""
                            src="/assets/images/metalearn/VNPay.png"
                            width={"219px"}
                            height={"125px"}
                          />
                        </button>
                      </div>
                      <div style={{ border: "1px solid silver" }}>
                        <button onClick={OpenLinkMomo}>
                          <img
                            alt=""
                            src="/assets/images/metalearn/Momo1.png"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="mt-10" style={{ maxWidth: "600px" }}>
                      <PayPalScriptProvider options={{ "client-id": "test" }}>
                        <ButtonWrapper
                          currency={currency}
                          showSpinner={false}
                        />
                      </PayPalScriptProvider>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {tourbill !== null && (
        <div>
          <div className={`bill-container bc1 ${bille}`}>
            <BillEdit close={CloseAll} data={tourbill} set={changetourbill} />
          </div>
          <div className={`bill-container bc2 ${billd}`}>
            <BillDetail close={CloseAll} data={tourbill} />
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default UserInfor;
