import React from "react";

const Hero = () => {
  return (
    <section id="inicio" className="hero" aria-label="Portada">
      <div className="hero-tarjeta">
        <div className="hero-logo-circulo">
          <img
            src="/logo_me.jpg"
            alt="Logo de Mundo Esotérico"
            width="130"
            height="130"
          />
        </div>
        <div className="hero-texto">
          <h1>Bienvenidos a Mundo Esotérico</h1>
          <p className="hero-eslogan">✨ Tu espacio de buena vibra ✨</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
