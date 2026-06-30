import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestion([]);
  };
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestion([]);
      return;
    }
    const fetchSuggestion = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
        );
        const data = await res.json();
        setSuggestion(data.products.slice(0, 5) || []);
      } catch (error) {
        console.log(error);
        setSuggestion([]);
      }
    };

    const debonuce = setTimeout(() => {
      fetchSuggestion();
    }, 300);
    return () => clearTimeout(debonuce);
  }, [searchTerm]);

  /*search input empty */
  useEffect(() => {
    setSuggestion([]);
  }, [location]);
  return (
    <div className="searchBox_container">
      <form onSubmit={handelSubmit} className="search_box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search For Products"
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {suggestion.length > 0 && (
        <ul className="suggestions">
          {suggestion.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <li>
                <img src={item.images[0]} />
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
