import { useState } from "react";
import "./header.css";
import { NavLink, useNavigate, useSearchParams } from "react-router";
export function Header({ cart }) {
  // const [search, setSearch] = useState();
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search");

  const [search, setSearch] = useState(searchText || "");
  const navigate = useNavigate();

  const updateSearchInpute = (event) => {
    setSearch(event.target.value);
  };

  const searchProduct = () => {
    navigate(`/?search=${search}`);
  };

  let totalQuenty = 0;
  cart.forEach((cartItem) => {
    totalQuenty += cartItem.quantity;
  });
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <h2 className="logo">Your Stor</h2>
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={search}
            onChange={updateSearchInpute}
          />

          <button className="search-button">
            <img
              className="search-icon"
              src="images/icons/search-icon.png"
              onClick={searchProduct}
            />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuenty}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
