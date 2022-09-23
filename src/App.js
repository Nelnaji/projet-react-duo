import { useState } from "react";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";
import "./General.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Panier from "./Pages/Panier/Panier";
import Contact from "./Pages/Contact/Contact";
import Favourite from "./Pages/Favourite/Favourite";
import Products from "./Pages/Products/Products";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
// import component UI styling
import "./UI/Hero.css";

function App() {
  const [cart, setCart] = useState([]);
  const [numberCart, setNumberCart] = useState(0);
  const [favourite, setFavourite] = useState([]);
  const [numberLikes, setNumberLikes] = useState(0);
  const [heartLike, setHeartLike] = useState(false);

  const handleCLickLike = (itemLike) => {
    setFavourite([...favourite, itemLike]);

    if (itemLike.heart === false) {
      favourite.push(itemLike);
      setNumberLikes(favourite.length);
      itemLike.heart = true;

      console.log(favourite);
    } else if (itemLike.heart === true) {
      favourite.pop(itemLike);
      setNumberLikes(favourite.length);
      itemLike.heart = false;

      console.log(favourite);
    }
  };

  const handleClick = (item) => {
    if (item.quantity === 0) {
      item.quantity = +1;
      setCart([...cart, item]);
      cart.push(item);
    } else if (item.quantity >= 1) {
      item.quantity = item.quantity + 1;
    }

    // for each cart element push them into an array
    let arrayOfNumber = [];
    cart.forEach((e) => {
      arrayOfNumber.push(e.quantity);
    });
    // the reduce method is used to have the summ of all the quantities. I can use the same logic for the total amount aswell

    setNumberCart(arrayOfNumber.reduce((a, b) => a + b, 0));
  };

  // const sum = [1, 2, 3, 5].reduce((partialSum, a) => partialSum + a, 0);

  return (
    <Router>
      <Nav cartCounter={numberCart} likeCounter={numberLikes} fullCart={cart} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              handleClick={handleClick}
              handleCLickLike={handleCLickLike}
              heartLike={heartLike}
              setHeartLike={setHeartLike}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/panier" element={<Panier monCart={cart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/favourite"
          element={
            <Favourite
              myFavourites={favourite}
              handleCLickLike={handleCLickLike}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              handleClick={handleClick}
              handleCLickLike={handleCLickLike}
              heartLike={heartLike}
              setHeartLike={setHeartLike}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
