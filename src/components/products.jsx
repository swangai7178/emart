/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return <>loading......</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div className="btn btn-outline-dark me-2">All</div>
          <div className="btn btn-outline-dark me-2">curtains</div>
          <div className="btn btn-outline-dark me-2">pillows</div>
          <div className="btn btn-outline-dark me-2">mats and rags</div>
          <div className="btn btn-outline-dark me-2">tiles</div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div class="card">
                  <img src={product.image} class="card-img-top" alt={product.title} />
                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">
                      ${product.price}
                    </p>
                    <a href="" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center"></div>
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}
