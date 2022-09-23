import { useState, useEffect, useRef } from "react";
import "./Nav.css";
import logo from "../../images/logo.webp";
import { NavLink } from "react-router-dom";
// Icons imports
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

export default function Nav({ cartCounter, fullCart, likeCounter }) {
  // this will add the active-link className when active
  const classNameFunc = ({ isActive }) => (isActive ? "active-link" : "");

  const [dropDown, setDropDown] = useState(false);
  const priceArray = [];
  fullCart.forEach((element) => {
    priceArray.push(element.quantity * element.price);
  });

  const closeDropdown = () => {
    setDropDown(false);
  };

  // the toFixed method will limit the decimals to 2
  const totalPrice = priceArray.reduce((a, b) => a + b, 0).toFixed(2);
  console.log(likeCounter);

  const myDropDown = (
    <div className="dropdown-major">
      <div className="close-dropdown" onClick={closeDropdown}></div>
      <div className="dropdown-popup-container">
        <div className="dropdown-popup">
          {fullCart.map((item) => {
            return (
              <div key={item.id} className="item__popup-container">
                <div className="item__pop-img-container">
                  <img className="popup-img" src={item.src} alt={item.name} />
                </div>
                <div className="text__popup-container">
                  <p className="popup-text">{item.name}</p>
                  <p className="popup-text">
                    {item.quantity}x {item.price}€
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total-price-popup">Total : {totalPrice}</div>
        <NavLink className="dropdown__link" to="/panier">
          GO TO CART
        </NavLink>
      </div>
    </div>
  );

  const dropDownHandler = () => {
    if (dropDown === false) {
      setDropDown(true);
    } else if (dropDown === true) {
      setDropDown(false);
    }
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <NavLink to="/">
          <img className="nav__img" src={logo} alt="Fashe" />
        </NavLink>
      </div>
      <div className="nav__bar">
        <ul className="nav__ul">
          <li>
            <NavLink className={classNameFunc} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={classNameFunc} to="/products">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className={classNameFunc} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={classNameFunc} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav__icons">
        <div className="nav__icons__heart">
          <NavLink className={`${classNameFunc} link-icon`} to="/favourite">
            <AiOutlineHeart className="icon" />
            {likeCounter === 0 ? (
              <span className="no-display"></span>
            ) : (
              <span className="like-number">{likeCounter}</span>
            )}
          </NavLink>
        </div>
        <div className="nav__icons__line"></div>
        <div className="nav__icons__bag">
          <span className={`${classNameFunc} link-icon`}>
            <BsHandbag className="icon" onClick={dropDownHandler} />

            {dropDown === true ? myDropDown : <div className="fantomas"></div>}
            {cartCounter === 0 ? (
              <span className="no-display"></span>
            ) : (
              <span className="cart-number">{cartCounter}</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
