import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const ButtonDetail = ({ title, img, Id }) => {
  // console.log(img);

  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState(null);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    postData(
      `http://smartwork.3i.com.vn/MobileLogin/GetListCmsItem?cat_id=${Id}`,
      { answer: 1 }
    )
      .then((data) => {
        setDetail(data.Object[0].full_text);
        // console.log(data.Object); // JSON data parsed by `data.json()` call
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log("Id", Id);

    setShow(true);
  };
  // console.log("detail", detail);

  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={handleShow}
        style={{
          marginBottom: "10px",
          marginRight: "10px",
          width: "45%",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "5px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img alt="" src={`/assets/${img}`} width="20px" height="20px" />
          <div
            style={{
              marginLeft: "5px",
              marginBottom: 0,
              fontSize: "14px",
              height: "40px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {" "}
            {title}
          </div>
        </div>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="container" style={{ width: "90%" }}>
            <div className=" row justify-content-center pb-20"></div>
            <div
              className="row justify-content-center pb-20"
              dangerouslySetInnerHTML={{
                __html: detail,
              }}
            ></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ButtonDetail;
