import React from "react";
import image from "../../assets/perfil.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="about center" id="Welcome">
      <h1 className="about__name">Welcome,I'm Rodrigo.</h1>
      <h2 className="about__role">I'm a Developer</h2>
      <p className="about__desc">
        I'm looking for new opportunities to improve my skills
      </p>
      <img src={image} height="300px" alt="img" />
    </section>
  );
};

export default Home;
