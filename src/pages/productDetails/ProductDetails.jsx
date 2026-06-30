import React, { useEffect, useState } from "react";
import { useActionData, useParams } from "react-router-dom";

import "./productDetails.css";

import SlideProduct from "../../components/slideproducts/SlideProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideproducts/SlideProductLoading";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../components/PageTransition";

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

  if (!product) return <p>Product not found</p>;
  return (
    <PageTransition key={id}>
      <div>
        {loading ? (
          <ProductDetailsLoading />
        ) : (
          <div className="item_details">
            <div className="container">
              <ProductImages product={product} />
              <ProductInfo product={product} />
            </div>
          </div>
        )}

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
    </PageTransition>
  );
};

export default ProductDetails;
