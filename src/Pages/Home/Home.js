import { useState } from "react";
import CarouselComponent from "../../components/Carousel/Carousel";
import img2 from "../../images/products/banner-05.webp";
import "./Home.css";
import img3 from "../../images/hero/master-slide-01_1920x570.webp";
import Cards from "../../components/Cards/Cards";

import myProducts from "../../Data/data.json";
const Home = ({ handleClick, handleCLickLike, setHeartLike, heartLike }) => {
  const all = myProducts
    .slice(0, 4)
    .map((item) => (
      <Cards
        key={item.id}
        item={item}
        handleClick={handleClick}
        handleCLickLike={handleCLickLike}
        heartLike={heartLike}
        setHeartLike={setHeartLike}
      />
    ));

  const [filterProductHome, setFilterProductHome] = useState(all);

  const sale = myProducts
    .filter((item) => item.status === "sale")
    .slice(0, 4)
    .map((item) => (
      <Cards
        key={item.id}
        item={item}
        handleClick={handleClick}
        heartLike={heartLike}
        setHeartLike={setHeartLike}
      />
    ));
  const old = myProducts
    .filter((item) => item.status === "old")
    .slice(0, 4)
    .map((item) => (
      <Cards
        key={item.id}
        item={item}
        handleClick={handleClick}
        heartLike={heartLike}
        setHeartLike={setHeartLike}
      />
    ));

  const newest = myProducts
    .filter((item) => item.status === "new")
    .slice(0, 4)
    .map((item) => (
      <Cards
        key={item.id}
        item={item}
        handleClick={handleClick}
        heartLike={heartLike}
        setHeartLike={setHeartLike}
      />
    ));

  const filterAll = () => {
    setFilterProductHome(all);
  };
  const filterNew = () => {
    setFilterProductHome(newest);
  };
  const filterOld = () => {
    setFilterProductHome(old);
  };
  const filterSale = () => {
    setFilterProductHome(sale);
  };

  return (
    <div>
      <div>
        <CarouselComponent />
      </div>
      {/* start the comming soon section */}
      <div className="comingsoon">
        <div className="comingsoon__col1">
          <div className="comingsoon__img">
            <img className="img__1" src={img2} alt="" />
          </div>
          <div className="comingsoon__text">COMMING SOON</div>
        </div>

        <div className="comingsoon__col1">
          <div className="comingsoon__img">
            <img className="img__1" src={img2} alt="" />
          </div>
          <div className="comingsoon__text">COMMING SOON</div>
        </div>

        <div className="comingsoon__col1">
          <div className="comingsoon__img">
            <img className="img__1" src={img2} alt="" />
          </div>
          <div className="comingsoon__text">COMMING SOON</div>
        </div>
      </div>
      {/* end of the comming soon section */}

      {/* start of our products section */}
      <div className="ourProducts">
        <div className="ourProducts__liste">
          <h2>OUR PRODUCTS</h2>
          <ul className="ourProducts__ul">
            <li>
              <span className="filter__link" onClick={filterAll}>
                All
              </span>
            </li>
            <li>
              <span className="filter__link" onClick={filterNew}>
                New{" "}
              </span>
            </li>
            <li>
              <span className="filter__link" onClick={filterSale}>
                Sale
              </span>
            </li>
            <li>
              <span className="filter__link" onClick={filterOld}>
                Old
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="ourProducts__images">{filterProductHome}</div>
      {/* end of our products section  */}

      {/* start of the Lookbook section */}
      <div className="lookbook__global">
        <div className="lookbook-textinside">
          <p>The Beauty </p>
          <h1>LOOKBOOK</h1>
          <button>PLAY VIDEO</button>
        </div>
        <img className="img__3" src={img3} alt="" />
      </div>

      {/* end of the Lookbook section */}
    </div>
  );
};

export default Home;
