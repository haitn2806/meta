// import React, { useEffect, useState } from "react";
// import Hero1 from "../../src/components/home1/Hero1";
// import Layout from "../../src/layout/Layout";
// import PageBanner from "../../src/layout/PageBanner";
// import { useRouter } from "next/router";
// import axios from "axios";
// // import b from "../b.json";

// import callApi from "../../src/components/callApi";
// import useFetch from "../../src/components/callApi";
// import Content from "../../src/components/Content";

// const ServiceDetailsid = ({}) => {
//   const router = useRouter();

//   axios
//     .post(`http://smartwork.3i.com.vn/HomePage/GetMainMenu`)
//     .then(function (response) {
//       console.log("GetMainMenu", response.data[0].multiple_language);
//       setLoad(true);
//     })
//     .catch(function (error) {
//       console.log(error).finally(() => setIsLoading(false));
//     });

//   const [content, setContent] = useState();
//   const [load, setLoad] = useState(false);

//   useEffect(() => {
//     axios
//       .post(`http://smartwork.3i.com.vn/HomePage/GetItem?id=${router.query.id}`)
//       .then(function (response) {
//         setContent(response.data);
//         setLoad(true);
//       })
//       .catch(function (error) {
//         console.log(error).finally(() => setIsLoading(false));
//       });
//   }, [router.query.id]);

//   return (
//     <Layout header={1} className="home-one" footer={1}>
//       <div style={{ marginTop: "98px" }}>
//         {" "}
//         <Content data={content} />
//       </div>
//     </Layout>
//   );
// };

// export default ServiceDetailsid;

import { useContext, useState } from "react";
import { number, string } from "prop-types";
import axios from "axios";
import qs from "qs";
import Layout from "../../src/layout/Layout";
import React, { useRef } from "react";

const ServiceDetailsid = () => {
  const [rating, setRating] = useState(0);

  const [Email, setEmail] = useState("");
  const [Comment, setComment] = useState("");
  const [Image, setImage] = useState();

  const [lgFeedback, setLgFeedback] = useState({
    title: "Write your feedback",
    email: "Email",
    content: "Content",
    iamges: "Images",
    submit: "Send Messages",
  });

  const form = useRef();

  const onSubmit = async (values, actions) => {
    console.log("values", values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const handelSubmit = (e) => {
    // if (User.username == null) {
    //   navigate("/LogIn", { replace: true });
    // } else {
    e.preventDefault();
    console.log("rating", rating);
    callApi();
    callApiSendAdmin();
    // }
  };

  const callApi = async () => {
    const response = await axios({
      method: "post",
      url: "https://backend.vnxpedia.com/TravelAPI/InsertFeedback",
      data: qs.stringify({
        Name: "User.username.UserName",
        Email: Email,
        Comment: Comment,
        Rate: rating,
        Date: String(new Date()),
        Image: Image,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
  };

  const callApiSendAdmin = async () => {
    const response = await axios({
      method: "post",
      url: "https://backend.vnxpedia.com/TravelAPI/SendMailFeedback",
      data: qs.stringify({
        header: `You have new feedback from ${Email}`,
        content: `Comment : ${Comment}
            Rating : ${rating}`,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
  };

  return (
    <Layout header={1} className="home-one" footer={1}>
      <div className="feedback-write ">
        <h2 className="feedback-title">{lgFeedback.title}</h2>
        <form
          ref={form}
          onSubmit={(e) => handelSubmit(e)}
          autoComplete="off"
          className=" text-center  fadeInRight delay-0-2s"
        >
          <div className="spacer"></div>
          <div className="form-group">
            <label for="fullName" className="form-label">
              {lgFeedback.email}
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              name="message1"
            />
          </div>
          {/* <div className="form-group">
            <label for="fullName" className="form-label"></label>
            <input
              name="message2"
              style={{ display: "none" }}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              rating={rating}
            ></input>
          </div> */}
          <div className="form-group">
            <label for="name" className="form-label">
              {lgFeedback.content}
            </label>
            <textarea
              className="feedback-content--write"
              name="message"
              rows="4"
              cols="50"
              onChange={(e) => setComment(e.target.value)}
            />
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="name" className="form-label">
              {lgFeedback.iamges}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </div>
          <div className="">
            {/* <button className="theme-btn home-one" type="submit" value="Send">
              Submit
            </button> */}
            <button type="submit" className="theme-btn" value="Send">
              {lgFeedback.submit} <i className="fas fa-angle-double-right" />
            </button>
            {/* <button disabled={isSubmitting} type="submit">
              Submit
            </button> */}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ServiceDetailsid;
