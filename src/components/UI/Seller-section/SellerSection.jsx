import React from "react";
import "./SellerSection.css";
import ava01 from "../../../images/ava-01.png";
import { SELLER__DATA } from "../../../data/data";

const SellerSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="seller__section__title">
              <h3>Top Seller</h3>
            </div>
          </div>
          {SELLER__DATA.map((item, index) => (
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4"
              key={item.id}
            >
              <div className="single__seller__card d-flex align-items-center gap-2">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="ava-01" />
                </div>
                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid}</h6>
                  <h6></h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerSection;
