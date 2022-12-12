import React, { useState, useEffect, memo } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import ButtonDetail from "./ButtonDetail";

function Detail({ data, title }) {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState([]);

  // console.log("resp===", data);
  // const handleClose = () => {
  //   setShow(false);
  // };
  // const [id, setId] = useState(265);
  // const [c, setc] = useState(314);

  // useEffect(() => {
  //   axios
  //     .post(
  //       `http://smartwork.3i.com.vn/MobileLogin/GetListCmsItem?cat_id=${c}`,
  //       {
  //         firstName: "Fred",
  //         lastName: "Flintstone",
  //       }
  //     )
  //     .then(function (response) {
  //       setDetail(response.data.Object);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [c]);

  // const handleShow = () => {
  //   setId(id);

  //   setShow(true);
  // };

  return (
    <section
      style={{ width: "45%", minWidth: "350px", padding: "0", margin: "2%" }}
      className=" prod-response"
    >
      <div className="justify-content-center row mt-30 mb-30">
        <h4 className="" style={{ textAlign: "center" }}>
          {title}
        </h4>
        <div style={{ paddingLeft: "0" }}>
          {data.map((a, id) => (
            <>
              <ButtonDetail key={id} title={a.Title} img={a.Image} Id={a.Id} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Detail);
