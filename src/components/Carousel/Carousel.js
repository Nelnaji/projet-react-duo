import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../images/hero/master-slide-01_1920x570.webp";
import "./Carousel.css";
export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div>
          <div className="carousel-wrapper-textinside">
            <h1>LEATHER BAGS</h1>
            <p>New Collection</p>
            <button>SHOP NOW</button>
          </div>
          <img src={img1} />
        </div>
        <div>
          <div className="carousel-wrapper-textinside">
            <h1>LEATHER BAGS</h1>
            <p>New Collection</p>
            <button>SHOP NOW</button>
          </div>
          <img src={img1} />
        </div>
        <div>
          <div className="carousel-wrapper-textinside">
            <h1>LEATHER BAGS</h1>
            <p>New Collection</p>
            <button>SHOP NOW</button>
          </div>
          <img src={img1} />
        </div>
      </Carousel>
    </div>
  );
}
