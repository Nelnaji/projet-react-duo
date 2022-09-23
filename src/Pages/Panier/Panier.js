import { useState } from "react";
import "./Panier.css";

const Panier = ({ monCart }) => {
  const myQs = monCart.map((item) => {
    const storeQ = item.quantity;
    return storeQ;
  });

  const [myQ, setMyQ] = useState(myQs);
  console.log(myQ);
  const myItems = monCart.map((item) => (
    <div className="cart__item-container" key={item.id} item={item}>
      <div className="image-text-container">
        <div className="image-container">
          <img className="element__image" src={item.src} alt={item.name} />
        </div>
        <div>{item.name}</div>
      </div>
      <div>{item.price} €</div>
      <div className="quantity-box">
        <span className="minus-quantity">-</span>
        <span className="item-quantity">{item.quantity}</span>
        <span className="plus-quantity">+</span>
      </div>
      <div>total : {item.quantity.toFixed(2) * item.price.toFixed(2)}€</div>
    </div>
  ));

  return (
    <section className="panier__section">
      {/* debut de l'entête de la section */}
      <div className="section-hero products-hero">
        <div className="hero-text-container">
          <h2 className="hero-title">CART</h2>
        </div>
      </div>

      <div className="cart__container">
        <div className="cart__categories-container">
          <h4 className="cart__categories-title">PRODUCT</h4>
          <h4 className="cart__categories-title">PRICE</h4>
          <h4 className="cart__categories-title">QUANTITY</h4>
          <h4 className="cart__categories-title">TOTAL</h4>
        </div>
        <div className="cart__elements-container">{myItems}</div>

        <span>Total To pay</span>
      </div>
    </section>
  );
};

export default Panier;
