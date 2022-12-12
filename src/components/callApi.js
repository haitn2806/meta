import axios from "axios";
// import { useState } from "react";

// export const callApi = ({ id }) => {
//   const [content, setContent] = useState();
//   useEffect(() => {
// axios
//   .post(`http://smartwork.3i.com.vn/HomePage/GetItem?id=${id}`)
//   .then(function (response) {
//     setContent(response.data);
//     console.log("response", response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   }, []);

//   return content;
// };

import { useState, useEffect } from "react";
const useFetch = (url, options = null) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post(url)
      .then(function (response) {
        setData(response);
        response;
        console.log("response", response.data);
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [url, options]);
  return { data };
};
export default useFetch;
