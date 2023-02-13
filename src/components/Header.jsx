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
                    <i className="fa fa-search">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
                      </svg>
                    </i>
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
