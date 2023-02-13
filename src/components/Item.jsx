import React from "react";
import ItemImg from "../assets/img/iteam.png";

const Item = () => {
  return (
    <div className="full-wrapper">
      <div className="wrapper">
        <div className="iteam">
          <div className="main-iteam">
            <div className="iteam-images">
              <img src={ItemImg} alt="" />
            </div>
            <div className="iteam-content">
              <h1>Lorum ipsum dolor</h1>
              <p>
                Orciinterdum condimenterdum nullamcorper elit nam curabitur
                laoreet met praesenean et iaculum. Metridiculis conseque quis
                iaculum aen ean nunc aenean quis nam nis.
              </p>
            </div>
          </div>
          <div className="main-iteam">
            <div className="iteam-images">
              <img src={ItemImg} alt="" />
            </div>
            <div className="iteam-content">
              <h1>Lorum ipsum dolor</h1>
              <p>
                Orciinterdum condimenterdum nullamcorper elit nam curabitur
                laoreet met praesenean et iaculum. Metridiculis conseque quis
                iaculum aen ean nunc aenean quis nam nis.
              </p>
            </div>
          </div>
          <div className="main-iteam">
            <div className="iteam-images">
              <img src={ItemImg} alt="" />
            </div>
            <div className="iteam-content">
              <h1>Lorum ipsum dolor</h1>
              <p>
                Orciinterdum condimenterdum nullamcorper elit nam curabitur
                laoreet met praesenean et iaculum. Metridiculis conseque quis
                iaculum aen ean nunc aenean quis nam nis.
              </p>
            </div>
          </div>
          <div className="clr"></div>
        </div>
      </div>
    </div>
  );
};

export default Item;
