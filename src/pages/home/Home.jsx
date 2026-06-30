import React, { useEffect, useState } from "react";
import "./home.css";
import HeroSlider from "../../components/HeroSlider";
import SlideProduct from "../../components/slideproducts/SlideProduct";
import SlideProductLoading from "../../components/slideproducts/SlideProductLoading";
import PageTransition from "../../components/PageTransition";
const categories = [
  "smartphones",
  "groceries",
  "kitchen-accessories",
  "mens-watches",
  "mobile-accessories",
  "tops",
  "motorcycle",
  ,
];

const Home = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.log("fetch Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <PageTransition>
      <div>
        <HeroSlider />
        {loading
          ? categories.map((category) => <SlideProductLoading key={category} />)
          : categories.map((category) => (
              <SlideProduct
                key={category}
                title={category.replace("-", " ")}
                data={products[category]}
              />
            ))}
      </div>
    </PageTransition>
  );
};

export default Home;
