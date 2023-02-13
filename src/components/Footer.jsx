import React from "react";

export const Footer = () => {
  const d = new Date();
  return (
    <footer>
      <div className="full-wrapper">
        <div className="wrapper">
          <div className="footer">
            <div className="footer-content">
              <h1>CONTACT DETAILS</h1>
              <p>
                Convallisijusto vestas mus pellentum aenean sapibulum in aliquam
                volut pat integest nulla.
                <span>Tel: xxxxx xxxxxxxxxx</span>
                <span>Fax: xxxxx xxxxxxxxxx</span>
                <span>Email: contact@mydomain.com</span>
              </p>
            </div>
            <div className="footer-content">
              <h1>QUICK LINKS</h1>
              <ul>
                <li>
                  <a href="#">Link Text Here</a>
                </li>
                <li>
                  <a href="#">Link Text Here</a>
                </li>
                <li>
                  <a href="#">Link Text Here</a>
                </li>
                <li>
                  <a href="#">Link Text Here</a>
                </li>
              </ul>
            </div>
            <div className="footer-content">
              <h1>CONTACT DETAILS</h1>
              <h2>Blog Post Title</h2>
              <p>
                Posted by Admin on 00.00.0000
                <span>
                  Vestibulumaccumsan egestibulum eu justo convallis augue estas
                  aenean elit intesque sed facilispede estibulum.
                </span>
                <a href="#">Read More »</a>
              </p>
            </div>
            <div className="footer-content">
              <h1>CONTACT DETAILS</h1>
              <div className="contact-form">
                <form action="#">
                  <input type="text" placeholder="Name" name="name" />
                  <input type="mail" placeholder="Mail" name="mail" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="clr"></div>
          <div className="copyright">
            <div className="copy-left">
              <h1>
                Copyright © {d.getFullYear()} - All Rights Reserved - UTOPIC
                FLOWERS
              </h1>
            </div>
            <div className="copy-right">
              <h1>
                Template by <a href="https://www.srdreamlab.com">SR DreamLab</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
