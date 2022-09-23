import "./Products.css";
import { AiOutlineSearch } from "react-icons/ai";
import Cards from "../../components/Cards/Cards";
import list from "../../Data/data.json";
import { useState } from "react";

const Products = ({
  handleClick,
  handleCLickLike,
  heartLike,
  setHeartLike,
}) => {
  // this is my filter code, It is not optimized at all.
  const all = list.map((item) => (
    <Cards
      key={item.id}
      item={item}
      handleClick={handleClick}
      handleCLickLike={handleCLickLike}
      heartLike={heartLike}
      setHeartLike={setHeartLike}
    />
  ));

  const [filterProduct, setFilterProduct] = useState(all);

  const [inputField, setInputField] = useState("");

  const kids = list
    .filter((item) => item.tag === "kids")
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
  const men = list
    .filter((item) => item.tag === "men")
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

  const women = list
    .filter((item) => item.tag === "women")
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

  const accessories = list
    .filter((item) => item.tag === "accessories")
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

  const searchField = list
    .filter((item) => item.name.toLowerCase().indexOf(inputField) !== -1)
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

  const filterAll = () => {
    setFilterProduct(all);
  };
  const filterKids = () => {
    setFilterProduct(kids);
  };
  const filterMen = () => {
    setFilterProduct(men);
  };
  const filterWomen = () => {
    setFilterProduct(women);
  };
  const filterAccessories = () => {
    setFilterProduct(accessories);
  };

  const searchFunction = (e) => {
    setInputField(e.target.value);
    setFilterProduct(searchField);
  };
  return (
    <section className="product__section-container">
      <div className="section-hero products-hero">
        <div className="hero-text-container">
          <h2 className="hero-title">PRODUCT</h2>
          <p className="hero-subtitle">New Arrivals Men Collection</p>
        </div>
      </div>

      <main className="product__main-container">
        <aside className="product__filter-container">
          <div className="categories__container">
            <h3 className=" c categories__link ategories__title">Categories</h3>
            <div className="categories__box-links">
              <span
                className=" categories__link categories__filter-option1"
                onClick={filterAll}
              >
                All
              </span>
              <span
                className=" categories__link categories__filter-option1"
                onClick={filterWomen}
              >
                Women
              </span>
              <span
                className=" categories__link categories__filter-option1"
                onClick={filterKids}
              >
                Kids
              </span>
              <span
                className=" categories__link categories__filter-option1"
                onClick={filterMen}
              >
                Men
              </span>
              <span
                className=" categories__link categories__filter-option1"
                onClick={filterAccessories}
              >
                Accessoire
              </span>
            </div>
          </div>
          <div className="search__container">
            <h3 className="categories__title">Filter</h3>
            <div className="search__field-box">
              <input
                className="search__field"
                type="text"
                placeholder="Search Products..."
                onChange={searchFunction}
                value={inputField}
              />
              <AiOutlineSearch className="search__icon" />
            </div>
          </div>
        </aside>
        <aside>
          <h3 className="product__number-search">Nombre of product search:</h3>
          <div className="product__grid-container">{filterProduct}</div>
        </aside>
      </main>
    </section>
  );
};

export default Products;
