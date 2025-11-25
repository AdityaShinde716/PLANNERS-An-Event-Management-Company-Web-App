import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/image1.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Make Your Dreams True</h1>
          <p>
          We Believe In Crafting Moments, Creating Memories!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;