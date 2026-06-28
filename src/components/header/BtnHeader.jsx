import React, { useEffect } from "react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/About" },
  { title: "Accessories", link: "/Accessories" },
  { title: "BLog", link: "/Blog" },
  { title: "Contact", link: "/Contact" },
];

const BtnHeader = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="button_header">
      <div className="container">
        <div className="nav">
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <CiMenuBurger />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>
            <div
              className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}
            >
              {categories.map((category) => (
                <Link key={category.slug} to={category.slug}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav_links">
            {NavLinks.map((lnk) => (
              <li
                key={lnk.link}
                className={location.pathname === lnk.link ? "active" : ""}
              >
                <Link to={lnk.link}>{lnk.title}</Link>
              </li>
            ))}
          </div>
        </div>
        <div className="sign_reg_icons">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BtnHeader;
