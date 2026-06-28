import React, { useEffect, useState } from "react";
import { useActionData, useParams } from "react-router-dom";
import { FaCartArrowDown, FaRegHeart, FaShare, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import "./productDetails.css";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import SlideProduct from "../../components/slideproducts/SlideProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideproducts/SlideProductLoading";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
  const [loadingRelated, setLoadingRelated] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(`error fetch ${error}`);
      }
    };
    fetchProduct();
  }, [id]);
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`).then(
      (res) =>
        res
          .json()
          .then((data) => {
            setRelated(data.products);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoadingRelated(false)),
    );
  }, [product?.category]);

  if (loading) return <ProductDetailsLoading />;
  if (!product) return <p>Product not found</p>;
  return (
    <div>
      <div className="item_details">
        <div className="container">
          <div className="img_items">
            <div className="bag_img">
              <img id="bag_img" src={product.images[0]} />
            </div>
            <div className="small_img">
              {product.images.map((img, index) => (
                <div className="sm_img">
                  {" "}
                  <img
                    key={index}
                    src={img}
                    onClick={() =>
                      (document.getElementById("bag_img").src = img)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="details_item">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="price">{product.price}</p>
            <h5>
              Availability: <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
              Brand: <span>{product.brand}</span>
            </h5>
            <p className="description">{product.description}</p>
            <h5 className="stock">
              <span>
                {" "}
                Hurry UP! Only {product.stock} products left in stock
              </span>
            </h5>
            <button className="btn">
              Add to cart <TiShoppingCart />
            </button>
            <div className="icons">
              <span>
                <FaRegHeart />
              </span>
              <span>
                <FaShare />
              </span>
            </div>
          </div>
        </div>
      </div>
      {loadingRelated ? (
        <SlideProductLoading />
      ) : (
        <SlideProduct
          key={product.category}
          title={product.category.replace("-", " ")}
          data={related}
        />
      )}
    </div>
  );
};

export default ProductDetails;
