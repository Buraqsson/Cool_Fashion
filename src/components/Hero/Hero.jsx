import HeroCarousel from "react-hero-carousel";

const Hero = () => {
  return (
    <HeroCarousel>
      <img
        src="https://placem.at/places?w=1920&h=1080&seed=1&txt=1"
        width="100%"
        height="100%"
      />
      <img
        src="https://placem.at/places?w=1920&h=1080&seed=2&txt=2"
        width="100%"
        height="100%"
      />
      <img
        src="https://placem.at/places?w=1920&h=1080&seed=2&txt=2"
        width="100%"
        height="100%"
      />
    </HeroCarousel>
  );
};

export default Hero;
