import React from "react";
import BlogImg from "../assets/img/blog.png";

const Blog = () => {
  return (
    <div className="full-wrapper">
      <div className="wrapper banner-bg">
        <div className="wrapper-fluid blog">
          <div className="blog-iteam">
            <img src={BlogImg} alt="" />
            <h1>Lorum ipsum dolor</h1>
            <p>
              Orciinterdum condimenterdum nullamcorper elit nam curabitur
              laoreet met praesenean et iaculum.
            </p>
          </div>
          <div className="blog-iteam">
            <img src={BlogImg} alt="" />
            <h1>Lorum ipsum dolor</h1>
            <p>
              Orciinterdum condimenterdum nullamcorper elit nam curabitur
              laoreet met praesenean et iaculum.
            </p>
          </div>
          <div className="blog-iteam">
            <img src={BlogImg} alt="" />
            <h1>Lorum ipsum dolor</h1>
            <p>
              Orciinterdum condimenterdum nullamcorper elit nam curabitur
              laoreet met praesenean et iaculum.
            </p>
          </div>
          <div className="clr"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
