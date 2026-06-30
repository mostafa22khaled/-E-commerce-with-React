import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideproducts/Product";
const Favorite = () => {
  const { favorite } = useContext(CartContext);
  return (
    <PageTransition>
      <div className="category_products favoritePage">
        <div className="container">
          <div className="top_slide">
            <h2>Your favorites</h2>
          </div>
          {favorite.length === 0 ? (
            <p>No favorite Products yet</p>
          ) : (
            <div className="products">
              {favorite.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Favorite;
