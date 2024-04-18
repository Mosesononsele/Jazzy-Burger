import React from "react";
import HeroImg from "../assets/HeroImg.jpg"
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <main className="my-3">
        <img
          src={HeroImg}
          alt="hero-img"
          className="img-fluid w-100 hero-img"
        />
      </main>
    </>
  );
};

export default Hero;
