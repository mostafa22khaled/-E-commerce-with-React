import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideproducts/Product";
import "./categoryPage.css";
import SlideProductLoading from "../../components/slideproducts/SlideProductLoading";
import PageTransition from "../../components/PageTransition";

const CategoryPage = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [category]);
  console.log(categoryProducts);
  return (
    <PageTransition key={category}>
      <div className="category_products">
        {loading ? (
          <SlideProductLoading key={category} />
        ) : (
          <div className="container">
            <div className="top_slide">
              <h2>
                {category}: {categoryProducts.limit}
              </h2>
              <p>lorem slide_products top_slide container</p>
            </div>
            <div className="products">
              {categoryProducts.products.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default CategoryPage;
