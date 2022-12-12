import React from "react";

const Content = ({ data }) => {
  console.log("data", data);

  if (data == null) {
    return;
  }

  return (
    <div className="container" style={{ width: "90%" }}>
      <h3 className=" row justify-content-center pb-20 pt-40">{data.title}</h3>
      <div
        className="row justify-content-center pb-20"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
};

export default Content;
