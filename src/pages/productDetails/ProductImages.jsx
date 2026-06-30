import React from "react";

const ProductImages = ({ product }) => {
  return (
    <div className="img_items">
      <div className="bag_img">
        <img id="bag_img" src={product.images[0]} />
      </div>
      <div className="small_img">
        {product.images.map((img, index) => (
          <div className="sm_img" key={index}>
            <img
              src={img}
              onClick={() => (document.getElementById("bag_img").src = img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
