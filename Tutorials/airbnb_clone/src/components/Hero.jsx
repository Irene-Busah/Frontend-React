/* eslint-disable no-unused-vars */
import React from "react";
import heroImg from "../assets/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} className="hero--photo" />
      <h1 className="hero--header">
        Online <span>Experiences</span>
      </h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
