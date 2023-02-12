import React from "react";

const Header = () => {
  return (
    <header>
      <div className="full-wrapper">
        <div className="wrapper-fluid">
          <div className="nav">
            <div className="search-container">
              <form action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                  {" "}
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>{" "}
                </button>
              </form>
            </div>
          </div>
          <div className="clr"></div>
          <div className="head">
            <div className="logo">
              <h1>
                U<span>TOPIC</span> F<span>LOWERS</span>
              </h1>
              <h2>Free PSD Website Template</h2>
            </div>

            <div className="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">STYLE DEMO</a>
                </li>
                <li>
                  <a href="#">FULL WIDTH</a>
                </li>
                <li>
                  <a href="#">DROPDOWN</a>
                </li>
                <li>
                  <a href="#">PORTFOLIO</a>
                </li>
                <li>
                  <a href="#">GALLERY</a>
                </li>
              </ul>
            </div>
            <div className="clr"></div>
          </div>
        </div>
      </div>

      <div className="full-wrapper">
        <div className="wrapper banner-bg">
          <div className="banner-text">
            <h1>
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              non diam erat. In fringilla massa ut nisi ullamcorper pellentesque
              „
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
