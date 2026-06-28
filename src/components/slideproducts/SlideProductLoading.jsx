import React from "react";

const SlideProductLoading = () => {
  return (
    <div className="loading_slideProduct">
      <div className="slide_products slide">
        <div className="container">
          <div className="top_slide">
            <h2 className="skeltion"></h2>
            <p className="skeltion"></p>
          </div>
          <div className="product_loading">
            <div className="product">
              <div className="img-product skeltion skeltion"></div>
              <div className="content skeltion"></div>
              <div className="content skeltion"></div>
            </div>
            <div className="product">
              <div className="img-product skeltion"></div>
              <div className="content skeltion"></div>
              <div className="content skeltion"></div>
            </div>
            <div className="product">
              <div className="img-product skeltion"></div>
              <div className="content skeltion"></div>
              <div className="content skeltion"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideProductLoading;
