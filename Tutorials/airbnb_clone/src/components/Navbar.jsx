/* eslint-disable no-unused-vars */
import React from "react";
import logoImg from "../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logoImg} className="nav--logo" />
    </nav>
  );
}
