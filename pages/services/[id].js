import React, { useEffect, useState } from "react";
import Hero1 from "../../src/components/home1/Hero1";
import Layout from "../../src/layout/Layout";
import PageBanner from "../../src/layout/PageBanner";
import { useRouter } from "next/router";
import axios from "axios";

import callApi from "../../src/components/callApi";
import useFetch from "../../src/components/callApi";
import Content from "../../src/components/Content";

const ServiceDetailsid = ({}) => {
  const router = useRouter();

  const [content, setContent] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .post(`http://smartwork.3i.com.vn/HomePage/GetItem?id=${router.query.id}`)
      .then(function (response) {
        console.log("response", response.data);
        setContent(response.data);
        console.log("content", content);
        setLoad(true);
      })
      .catch(function (error) {
        console.log(error).finally(() => setIsLoading(false));
      });
  }, [router.query.id]);

  // console.log("content1", content);

  return (
    <Layout header={1} className="home-one" footer={1}>
      <div style={{ marginTop: "98px" }}>
        {" "}
        <Content data={content} />
      </div>
    </Layout>
  );
};

export default ServiceDetailsid;
