import "./Cards.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function Cards({
  item,
  handleClick,
  handleCLickLike,
  heartLike,
}) {
  const {
    id,
    name,
    tag,
    price,
    status,
    src,
    saleAmount,
    heart,
    size,
    color,
    quantity,
    description,
  } = item;
  const [productDetails, setProductDetails] = useState(false);
  const [heartLikeIcon, setHeartLikeIcon] = useState(false);
  const [itemQ, setItemQ] = useState(quantity);

  const productDetailsHandler = () => {
    setProductDetails(true);
  };

  const closeModal = () => {
    setProductDetails(false);
  };
  const sendData = () => {
    handleClick(item);
  };

  const sendDataLike = () => {
    if (heart === false) {
      setHeartLikeIcon(true);
    } else if (heart === true) {
      setHeartLikeIcon(false);
    }
    handleCLickLike(item);
  };
  let myStatus;

  if (status === "new") {
    myStatus = <div className="new__product">NEW</div>;
  } else if (status === "old") {
    myStatus = <div className="old__product">OLD</div>;
  } else if (status === "sale" && saleAmount > 0) {
    myStatus = <div className="sale__product">{`${saleAmount}% off`}</div>;
  }

  let heartIcon;

  if (heartLikeIcon === false) {
    heartIcon = (
      <AiOutlineHeart className="element__icon-like" onClick={sendDataLike} />
    );
  } else if (heartLikeIcon === true) {
    heartIcon = (
      <AiFillHeart className="element__icon-like" onClick={sendDataLike} />
    );
  }

  let card = (
    <div>
      <div className="img__container">
        <img
          className="img__element"
          src={src}
          alt={name}
          onClick={productDetailsHandler}
        />
        {myStatus}
        {heartIcon}

        <p className="add-cart" onClick={sendData}>
          ADD TO CART
        </p>
      </div>
      <div className="text__element-container">
        <span className="element__name">{name}</span>
        <span className="element__price">{price} €</span>
      </div>
    </div>
  );

  const productCard = (
    <div className="overlay-window-container">
      <div className="close-modal-plop" onClick={closeModal}></div>
      <div className="modal__window-container">
        <AiOutlineClose className="close-modal" onClick={closeModal} />
        <div className="modal__img-container">
          <img className="modal__img" src={src} alt={name} />
        </div>
        <div className="modal__content-container">
          <h3>{name}</h3>
          <span>Details : {description}</span>
          <span>Category: {tag}</span>
          <span>Status : {status}</span>
          <span>Price : {price} €</span>

          <form className="form-product-details">
            <label for="sizes">Choose a size:</label>
            <select id="sizes" name="sizes">
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>

            <label for="colours">Choose a colour:</label>
            <select id="colours" name="colours">
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="red">Red</option>
            </select>
          </form>

          <span className="add-cart-modal" onClick={sendData}>
            ADD TO CART
          </span>
        </div>
      </div>
    </div>
  );

  return <div>{productDetails === false ? card : productCard}</div>;
}
