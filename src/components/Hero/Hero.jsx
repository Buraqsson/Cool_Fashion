import React from "react";
import ImageGallery from "react-image-gallery";
import "./Hero.css";

const Hero = () => {
  const images = [
    {
<<<<<<< HEAD
      original: "https://picsum.photos/id/1018/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
=======
      original: 'https://picsum.photos/id/157/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/22/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/26/1000/600/',
>>>>>>> eb03b7b74805796d75eb3bf56fdde7e6e220694d
    },
  ];
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
};

export default Hero;
