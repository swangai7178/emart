import React from "react";
import Products from "./products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-black border-0">
        <img
          src="/img/kunjus.jpg"
          className="card-img"
          alt="background"
          height="700px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW DESIGNS</h5>
            <p className="card-text lead fs-2">
              Checkout all the new design trends
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
