import "./About.css";
import aboutPicture from "../../images/about/about-photo.jpg";
const About = () => {
  return (
    <section className="about__section">
      <div className="section-hero about-hero">
        <div className="hero-text-container">
          <h2 className="hero-title">ABOUT</h2>
        </div>
      </div>
      <div className="about__section-content">
        <img
          src={aboutPicture}
          className="about__section-img"
          alt="multiple clothes displayed"
        />
        <div className="about__section-text-box">
          <h3>Our story</h3>
          <p className="primary__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            ullam excepturi laborum cupiditate modi voluptatibus atque odit
            soluta ipsam sed? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Asperiores ullam excepturi laborum cupiditate modi
            voluptatibus atque odit soluta ipsam sed? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Asperiores ullam excepturi laborum
            cupiditate modi voluptatibus atque odit soluta ipsam sed?
          </p>

          <p className="secondary__text">
            “The design is not just what it looks like and feels like. The
            design is how it works” — Steve Jobs
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
